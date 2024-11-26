import React, {useCallback, useEffect, useState } from 'react';
import './Viewcart.css';
import Login from '../../Authetication/Loginr';
import Register from '../../Authetication/Register';
import { Link } from 'react-router-dom';


// import React, {  useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Loginreg.css";
// import Register from "./Register";
// import Authuser from "./Authuser";
import { Modal, ModalHeader, ModalBody, Form, Input, Button } from "reactstrap";
import Authuser from '../../Authetication/Authuser';

const Viewcart = (props) => {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // const [isLoginOpen, setIsLoginOpen] = useState(false);


  const [showAddressSection, setShowAddressSection] = useState(false);

  const handleClick = () => {
    setShowAddressSection(true);
  };
  const products = [
    {
      name: "Egg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s",
      price: 249,
    },
    {
      name: "Chicken",
      img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
      price: 449,
    },
  ];


  const chatOptions = [
    {
      message: "1 kg - (22 - 28 pcs approx) 23%OFF Rs-249",
      buttonLabel: "Add to Cart",
      price: 249,
    },
    {
      message: "23% OFF on 250g (1 - 2 pcs approx.) - ₹99",
      buttonLabel: "Add to Cart",
      price: 99,
    },
    {
      message: "23% OFF on 1kg (4 - 6 pcs approx.) - ₹449",
      buttonLabel: "Add to Cart",
      price: 449,
    },
  ];

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };








  const { http } = Authuser();
  const [modal, setModal] = useState(false);
  const [loginData, setLoginData] = useState({
    user_phoneno: "",
    user_Name: "",
    user_Email: "",
    user_Password: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [register, setRegister] = useState(false);
  const [modalStates, setModalStates] = useState(false);

  const navigate = useNavigate();

  const toggleModal = useCallback(() => {
    setModal((prev) => !prev);
  }, [modal]);
  

  useEffect(() => {
    setModal(props.modal);
  }, [props.modal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit login form and send OTP
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Register Value: " + register);
    // check if register form is shown
    if (register) {
      http
        .post(process.env.REACT_APP_API_URL + "user/register", loginData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log("login otp", res.data);
          if (res.status === 200) {
            // alert("User Registered successfully!");
            setIsOtpSent(true); // Display OTP input field
          }
        })
        .catch((error) => {
          console.error("Error", error);
          toast.error("An error occurred. Please try again.");
        });
    } else {
      http
        .post(process.env.REACT_APP_API_URL + "user/send-otp", loginData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log("login otp", res.data);
          if (res.status === 200) {
            // alert("OTP sent successfully!");
            setIsOtpSent(true); // Display OTP input field
          }
          // Below condition doesn't occur ever
          // else
          // {
          //   toast.error("Invalid credentials");
          //   handleCloseLogin();
          //   setRegister(true); // Show registration modal if login fails
          // }
        })
        .catch((error) => {
          if (error.status === 400) {
            if (error.response.data.code === "NO_USER") {
              toast.error("Invalid credentials");
              // handleCloseLogin();
              setRegister(true); // Show registration modal if login fails
            }
          }
          console.error("Error", error);
          toast.error("An error occurred. Please try again.");
        });
    }
  };

  // Verify OTP
  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp.length < 4) {
      toast.error("Please enter the complete OTP.");
      return;
    }

    const data = {
      user_phoneno: loginData.user_phoneno,
      otp: otp,
    };

    http
      .post(process.env.REACT_APP_API_URL + "user/verify-otp", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log("OTP verification response", res.data);
        if (res.status === 200) {
          alert("OTP verified successfully!");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(res.data.userDetails)
          );

          navigate("/dash"); // Navigate to dashboard
        } else {
          toast.error(res.data.message || "OTP verification failed");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP", error);
        toast.error("An error occurred. Please try again.");
      });
  };


  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container d-flex">
      {/* Account Section */}
      <div className="account-section flex-grow-1">
  <div className="account-contents">
    <h5><strong>Account</strong></h5>
    <p>To place your order now, log in to your existing account or sign up.</p>
    <div className="button-group d-flex justify-content-between align-items-center jklk">
      <button 
        className="btn btn-light mx-2 cokl" 
        onClick={() => setModal(!modal)}
      >
        Have an account? <strong>LOG IN</strong>
      </button>
      <button 
        className="btn btn-danger mx-2 coi " 
        onClick={handleRegisterClick}
      >
        New to Meatzo? <strong>SIGN UP</strong>
      </button>
    </div>
  </div>

  {/* Delivery Address Section */}
  {showAddressSection && (
    <div className="delivery-container">
      <h2 className="section-title" onClick={handleClick}>Delivery Address</h2>
      <div className="address-cards d-flex flex-wrap">
        {/* Saved Address Card */}
        <div className="address-card me-3">
          <div className="address-details">
            <span className="icon">🏠</span>
            <div>
              <h3>Home</h3>
              <p>
                at post phaltan, 987, Pocket 25, Subhash Place, Rohini, Delhi, 
                110034, India
              </p>
              <strong>20 MINS</strong>
            </div>
          </div>
          <button className="deliver-btn btn btn-success">Deliver Here</button>
        </div>

        {/* Add New Address Card */}
        <div className="address-card">
          <h3>Add New Address</h3>
          <button className="add-address-btn btn btn-outline-primary">
            ADD New Address
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Delivery Address Section - Toggled */}
  <div className="delivery-address-container">
    <div className="accontent">
      <h5 onClick={toggleDetails}>Delivery Address</h5>
    </div>
    {showDetails && (
      <div className="delivery-address-details d-flex flex-wrap">
        <div className="address-info me-3">
          <span className="home-icon">🏠</span>
          <div className="address-text">
            <p>Home</p>
            <p>
              at post phaltan, 987, Pocket 25, Subhash Place, Rohini, Delhi, 
              110034, India
            </p>
            <p>20 MINS</p>
            <button className="deliver-button btn btn-success" style={{ borderRadius: "10px" }}>
              Deliver Here
            </button>
          </div>
        </div>
        <div className="add-new-address">
          <h6>Add New Address</h6>
          <button className="add-button btn btn-outline-primary" style={{ borderRadius: "10px" }}>
            ADD New Address
          </button>
        </div>
      </div>
    )}
  </div>

  {/* Payment Section */}
  <div className="accontent">
    <h5 className="">Payment</h5>
    <Link to="/placeorder">
      <button className="btn btn-primary place-order-btn">
        Proceed to Pay
      </button>
    </Link>
  </div>
</div>


      {/* Order Summary Section */}
      <div className="order-summary flex-grow-1 ml-4">
        <div className="indicator" />
       
     
        <div className="order-contents">
          <div className="order-header">
            <img
              src="https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg"
              alt="Product"
              className="product-img"
              style={{height:'70px',
                width:'70px'
              }}
            />
            <div>
              <h5 className="shop-name"><strong>Balaji Chicken Shop</strong></h5>
              <p>Available in your Kolhapur</p>
            </div>
          </div>
          <div className="order-details">
            <p><strong>Premium Chicken - 1 Full Chicken Curry Cut (Skinless)</strong></p>
            <p>1 Full Chicken is Provided</p>
          </div>
          <h6 className="summary-title"><strong>Order Summary</strong></h6>
          <div className="summary-item">
            <span>Order</span>
            <span>236</span>
          </div>
          <div className="summary-item">
            <span>Taxes</span>
            <span>Rs. 3.00</span>
          </div>
          <div className="summary-item">
            <span>Delivery fees</span>
            <span>Rs. 10.00</span>
          </div>
          <hr />
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>Rs. 236.00</strong>
          </div>
        </div>


      </div>


     



          {/* Login Modal */}
          <Modal id="showModal" isOpen={modal} toggle={toggleModal} centered>
        <ModalHeader className="bg-light p-3" toggle={toggleModal}>
          <h5 className="mx-auto" style={{ fontWeight: "bold",color:"#9a292f" }}>
            Login
          </h5>
        </ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <div className="mt-3" style={{ marginLeft: "25px" }}>
              {/* <span className="text-black">or </span> */}
              <span className="text-black">or </span>
              <span
                onClick={() => setModalStates(!modalStates)}
                className="text-red"
              >
                Create an account
              </span>
            </div>

            {/* Phone Number Input */}
            <div className="">
              <Input
                style={{
                  height: "7vh",
                  marginLeft: "20px",
                  width: "92%",
                  maxWidth: "600px",
                  fontWeight:"bold"
                }}
                type="text" // Use text to enable maxLength
                placeholder="Enter Your Mobile Number"
                name="user_phoneno"
                value={loginData.user_phoneno}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers and restrict to 10 digits
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    handleInputChange(e); // Update state with valid input
                  }
                }}
                maxLength="10" // Prevent typing more than 10 digits
              />
            </div>

            {/* Register Fields */}
            {register && (
              <div className="container mt-3">
                <Input
                  type="text"
                  name="user_Name"
                  placeholder="Name"
                  value={loginData.user_Name}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="user_Email"
                  placeholder="Email"
                  value={loginData.user_Email}
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  name="user_Password"
                  placeholder="Password"
                  value={loginData.user_Password}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  className="custom-register-btn mt-3"
                  style={{ width: "50px" }}
                >
                  Continue
                </Button>
              </div>
            )}

            {/* OTP and Login Button */}
            {!register && (
              <>
                {isOtpSent ? (
                 <div className="mt-3">
                 <Input
                   type="text"
                   placeholder="Enter Your OTP"
                   value={otp}
                   onChange={(e) => setOtp(e.target.value)}
                   maxLength="6"
                   style={{
                    width: "92%",
                    maxWidth: "600px",
                     textAlign: "center",
                     marginLeft:"20px ",
                     fontWeight:"bold"
               
                   }}
                 />
                 <Button
                 style={{marginLeft:"20px",width:"92%", maxWidth: "600px",height:"45px",backgroundColor:"#9a292f",fontWeight:"bold"}}
                   type="button"
                   className="btn btn-danger mt-3"
                   onClick={verifyOtp}
                 >
                   Verify OTP
                 </Button>
               </div>
               
                ) : (
                  <div className="container mt-2">
                    <button type="submit" className="custom-login-btn mt-3">
                      Continue
                    </button>
                  </div>
                )}
              </>
            )}
          </ModalBody>
        </Form>
      </Modal>

      {/* Registration Modal */}
      {modalStates && (
        <Register
          modalStates={modalStates}
          setModalStates={() => {
            setModalStates(false);
            setModal(false);
          }}
        />
      )}

      {/* {isLoginOpen && (
        <Login
          modalState={isLoginOpen}
          setModalState={() => setIsLoginOpen(false)}
        />
      )} */}

      {/* Register Modal */}
      {isRegisterOpen && (
        <Register
          modalStates={isRegisterOpen}
          setModalStates={() => setIsRegisterOpen(false)}
        />
      )}
    </div>
  );
};

export default Viewcart;

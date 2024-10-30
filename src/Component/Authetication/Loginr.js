import React, { useCallback, useEffect, useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Loginreg.css';
import Register from "./Register";
// import Register from "./Register";
// import Authuser from "./Authuser";
import {
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Button,
    Form,
  } from 'reactstrap';
  import { Toast } from 'react-bootstrap';

const Login = (props) => {
    const [modalStates, setModalStates] = useState(false);
//   const { http } = Authuser();
  const [loginData, setLoginData] = useState({ user_phoneno: "", user_Name: "", user_Email: "", user_Password: "" });
  const [otp, setOtp] = useState(""); // Store OTP as a single string
  const [isOtpSent, setIsOtpSent] = useState(false); // Track OTP status
  const [register, setRegister] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    setModal((prev) => !prev);
    if (modal) props.setModalStates(); // Close modal if already open
  }, [modal, props]);

  useEffect(() => {
    setModal(props.modalStates);
  }, [props.modalStates]);
  const navigate = useNavigate();

  // Handle input change for login form
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
    if(register) {
      fetch
      .post(process.env.REACT_APP_API_URL + "user/register", loginData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log("login otp", res.data);
        if (res.status === 200) {
          alert("User Registered successfully!");
          setIsOtpSent(true); // Display OTP input field
         
          
        } 
      })
      .catch((error) => {
        console.error("Error", error);
        toast.error("An error occurred. Please try again.");
      });
    } else {
      fetch
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
        if(error.status === 400) {
          if(error.response.data.code === "NO_USER") {
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

    fetch
      .post(process.env.REACT_APP_API_URL + "user/verify-otp", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log("OTP verification response", res.data);
        if (res.status === 200) {
          // alert("OTP verified successfully!");
          navigate("/dash"); // Navigate to dashboard
          // Assuming res.data includes user info
 
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

//   const handleCloseRegister = () => setShowRegisterModal(false);

  return (
    <div>
      {/* Login Modal */}
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
      <ModalHeader className="bg-light p-3" toggle={toggle}>
        <Modal.Title className="mx-auto">Login</Modal.Title>
        
      </ModalHeader>
        <Form onSubmit={handleFormSubmit}>
        <ModalBody>
            <Card className="border card-border-success p-3 shadow-lg">
              <Row>
                <Col lg={12}>
            <div className="mt-3">
              <span className="text-black">or </span>
              <span
                onClick={() => setModalStates(!modalStates)}
                className="text-red"
                
              >
                Create an account
              </span>
            </div>

            {/* Phone Number Input */}
            <div className="container">
            {/* <div className="floating-label"> */}
              <input
              style={{ height: '7vh' }}
                className="form-control"
                type="text"
                placeholder="Phone Number"
                name="user_phoneno"
                value={loginData.user_phoneno}
                onChange={handleInputChange}
              />
                {/* <label>Phone Number</label> */}
              </div>
            
            {/* </div> */}

            {register && (
              <div className="container mt-3">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_Name"
                    className="form-control"
                    placeholder="Name"
                    value={loginData.user_Name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="user_Email"
                    className="form-control"
                    placeholder="Email"
                    value={loginData.user_Email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="user_Password"
                    className="form-control"
                    placeholder="Password"
                    value={loginData.user_Password}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="custom-register-btn mt-3">
                  Continue
                </button>
              </div>
            )}

            {/* Login Button */}
            {!register && (
              <>
                {isOtpSent ? (
                  // OTP Input Section
                  <div className="mt-3">
                    <input
                      className="form-control otp-input"
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength="6"
                    />
                    <button
                      type="button"
                      className="btn btn-danger mt-3"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                ) : (
                  // Login Button Section
                  <div className="container mt-2">
                    <button type="submit" className="custom-login-btn mt-3">
                      Continue
                    </button>
                  </div>
                )}
              </>
            )}
            </Col>
            </Row>
            </Card>
          </ModalBody>
        </Form>
      </Modal>

      {/* Registration Modal */}
      {modalStates === true ? (
                  <Register
                    modalStates={modalStates}
                    setModalStates={() => {
                      setModalStates(false);
                    }}
                    // checkchang={handleCallback}
                  />
                ) : (
                  ""
                )}
    </div>
  );
};

export default Login;
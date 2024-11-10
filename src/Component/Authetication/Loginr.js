// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Loginreg.css";
// import Register from "./Register";
// import Authuser from "./Authuser";
// // import axios from 'axios';
// import { Modal, ModalHeader, ModalBody, Form, Input, Button } from "reactstrap";

// const Login = ({ modalStates, setModalStates }) => {
//   const { http } = Authuser();
//   const [modal, setModal] = useState(false);
//   const [ userName,setUserName ] =useState()
//   const [loginData, setLoginData] = useState({
//     user_phoneno: "",
//     user_Name: "",
//     user_Email: "",
//     user_Password: "",
//   });
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [register, setRegister] = useState(false);

//   const navigate = useNavigate();

//   const toggleModal = useCallback(() => {
//     setModal((prev) => !prev);
//     if (modal) setModalStates(); // Close modal if already open
//   }, [modal, setModalStates]);

//   useEffect(() => {
//     setModal(modalStates);
//   }, [modalStates]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (register) {
//       http
//         .post(`${process.env.REACT_APP_API_URL}/user/register`, loginData, {
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         })
//         .then((res) => {
//           if (res.status === 200) setIsOtpSent(true);
//         })
//         .catch(() => toast.error("An error occurred. Please try again."));
//     } else {
//       http
//         .post(`${process.env.REACT_APP_API_URL}/user/send-otp`, loginData, {
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         })
//         .then((res) => {
//           if (res.status === 200) setIsOtpSent(true);
//         })
//         .catch((error) => {
//           if (
//             error.response?.status === 400 &&
//             error.response.data.code === "NO_USER"
//           ) {
//             toast.error("Invalid credentials");
//             setRegister(true); // Show registration if login fails
//           }
//         });
//     }
//   };

//   // const verifyOtp = (e) => {
//   //     e.preventDefault();
//   //     const data = { user_phoneno: loginData.user_phoneno, otp };

//   //     http.post(`${process.env.REACT_APP_API_URL}/user/verify-otp`, data, {
//   //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   //     })
//   //     .then((res) => {
//   //         if (res.status === 200) {
//   //             localStorage.setItem("token", res.data.token);
//   //             // localStorage.setItem("userName", res.data.user.name);
//   //             localStorage.setItem('userName', res.data.user.user_Name);
//   //             navigate("/dash"); // Navigate to dashboard
//   //             toast.success("Logged in successfully!");
//   //             setModal(false); // Close modal
//   //         } else {
//   //             toast.error("OTP verification failed");
//   //         }
//   //     })
//   //     .catch(() => toast.error("An error occurred. Please try again."));
//   // };


//   // In Login component
//   const verifyOtp = (e) => {
//     e.preventDefault();

//     // Check OTP length
//     if (otp.length < 4) {
//       toast.error("Please enter the complete OTP.");
//       return;
//     }

//     // Data to send in the request
//     const data = {
//       user_phoneno: loginData.user_phoneno,
//       otp: otp,
//     };

//     // Make the POST request to verify OTP
    
//     http.post(`${process.env.REACT_APP_API_URL}/user/verify-otp`, data, {
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       })
//       .then((res) => {
//         if (res.data.status === "SUCCESS") {
//           // OTP verified successfully
//           alert("OTP verified successfully!");
//           localStorage.setItem("token", res.data.token); // Save token in local storage
//           localStorage.setItem("userName", res.data.user.user_Name); // Save user's name in local storage
//           setUserName(res.data.user.user_Name); // Update username in the app state
//           setModal(false); // Close the login modal
//           window.location.reload(); // Reload to update the header
//         } else {
//           toast.error(res.data.message || "OTP verification failed");
//         }
//       })
//       .catch((error) => {
//         console.error("Error verifying OTP", error);
//         toast.error("An error occurred. Please try again.");
//       });
//   };

//   return (
//     <div className="page-content">  
//       <Modal isOpen={modal} toggle={toggleModal} centered>
//         <ModalHeader className="bg-light p-3" toggle={toggleModal}>
//           <h5 className="mx-auto">Login</h5>
//         </ModalHeader>
//         <Form onSubmit={handleFormSubmit}>
//           <ModalBody>
//             <div className="mt-3">
//               <span onClick={() => setRegister(true)} className="text-red">
//                 Create an account
//               </span>
//             </div>

//             <Input
//               style={{ height: "7vh" }}
//               type="text"
//               placeholder="Phone Number"
//               name="user_phoneno"
//               value={loginData.user_phoneno}
//               onChange={handleInputChange}
//             />

//             {register && (
//               <div className="container mt-3">
//                 <Input
//                   type="text"
//                   name="user_Name"
//                   placeholder="Name"
//                   value={loginData.user_Name}
//                   onChange={handleInputChange}
//                 />
//                 <Input
//                   type="text"
//                   name="user_Email"
//                   placeholder="Email"
//                   value={loginData.user_Email}
//                   onChange={handleInputChange}
//                 />
//                 <Input
//                   type="password"
//                   name="user_Password"
//                   placeholder="Password"
//                   value={loginData.user_Password}
//                   onChange={handleInputChange}
//                 />
//                 <Button type="submit" className="custom-register-btn mt-3">
//                   Continue
//                 </Button>
//               </div>
//             )}

//             {!userName  && (
//               <>
//                 {isOtpSent ? (
//                   <div className="mt-3">
//                     <Input
//                       type="text"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       maxLength="6"
//                     />
//                     <Button
//                       type="button"
//                       className="btn btn-danger mt-3"
//                       onClick={verifyOtp}
//                     >
//                       Verify OTP
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="container mt-2">
//                     <button type="submit" className="custom-login-btn mt-3">
//                       Continue
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </ModalBody>
//         </Form>
//       </Modal>

//       {register && (
//         <Register
//           modalStates={modal}
//           setModalStates={() => setRegister(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Loginreg.css';
import Register from "./Register";
import Authuser from "./Authuser";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    Button,
} from 'reactstrap';

const Login = (props) => {
    const { http } = Authuser();
    const [modal, setModal] = useState(false);
    const [loginData, setLoginData] = useState({
        user_phoneno: "",
        user_Name: "",
        user_Email: "",
        user_Password: ""
    });
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [register, setRegister] = useState(false);
    const [modalStates, setModalStates] = useState(false);
    
    const navigate = useNavigate();

    const toggleModal = useCallback(() => {
        setModal((prev) => !prev);
        if (modal) props.setModalStates(); // Close modal if already open
    }, [modal, props]);

    useEffect(() => {
        setModal(props.modalStates);
    }, [props.modalStates]);

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
    
        http
          .post(process.env.REACT_APP_API_URL + "user/verify-otp", data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            console.log("OTP verification response", res.data);
            if (res.status === 200) {
              alert("OTP verified successfully!");
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('userDetails', JSON.stringify(res.data.userDetails));

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
    

    return (
        <div className="page-content">
            {/* Login Modal */}
            <Modal id="showModal" isOpen={modal} toggle={toggleModal} centered>
                <ModalHeader className="bg-light p-3" toggle={toggleModal}>
                    <h5 className="mx-auto"style={{fontWeight:"bold"}}>Login</h5>
                </ModalHeader>
                <Form onSubmit={handleFormSubmit}>
                    <ModalBody>
                        <div className="mt-3">
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
                        <div className="container">
                            <Input
                                style={{ height: '7vh' }}
                                type="text"
                                placeholder="Enter Your Mobile Number"
                                name="user_phoneno"
                                value={loginData.user_phoneno}
                                onChange={handleInputChange}
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
                                <Button type="submit" className="custom-register-btn mt-3">
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
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            maxLength="6"
                                        />
                                        <Button
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
        </div>
    );
};

export default Login;
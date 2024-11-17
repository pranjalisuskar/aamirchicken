import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Button,
  Form,
  Input,
} from "reactstrap";
import { Toast } from "react-bootstrap"; // Toast imported correctly
import "./Loginreg.css";
import Login from "./Loginr";
import Authuser from "./Authuser";

const Register = (props) => {
  const { http } = Authuser();
  const [modal, setModal] = useState(false);
  const [loginmodalStates, setloginModalStates] = useState(false);

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    user_Name: "",
    user_Email: "",
    user_phoneno: "",
    user_Password: "",
    user_pincode: "",
  });
  const toggle = useCallback(() => {
    setModal((prev) => !prev);
    if (modal) props.setModalStates(); // Close modal if already open
  }, [modal, props]);

  useEffect(() => {
    setModal(props.modalStates);
  }, [props.modalStates]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and limit to 10 digit/s
    // if (/^\d{0,10}$/.test(value)) {
    setFormData({
      ...formData,
      [name]: value,
    });
    // }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await http.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        formData,

        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      console.log("Register data:", response.data);
      // alert('Register successfully');

      setError(""); // Clear errors
      setShowToast(true); // Show success toast

      setModal(false); // Close the registration modal
      setloginModalStates(false); // Open the login modal
    } catch (err) {
      console.error("Error:", err);
      const errorMessage =
        err.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMessage); // Set error message
    }
  };

  return (
    <div>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          <h5
            className="mx-auto"
            onClick={() => setloginModalStates(!loginmodalStates)}
            style={{ fontWeight: "bold",color:"#9a292f" }}
          >
            Please Sign Up
          </h5>
        </ModalHeader>

        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <Card
              className="border card-border-success p-3 shadow-lg"
              style={{ width: "100%" }}
            >
              <Row>
                <Col lg={12}>
                  <div className="container">
                    {error && (
                      <div className="alert alert-danger mt-2">{error}</div>
                    )}

                    <Toast
                      onClose={() => setShowToast(false)}
                      show={showToast}
                      delay={3000}
                      autohide
                    >
                      <Toast.Body>Registration Successful!</Toast.Body>
                    </Toast>

                    <Input
                      style={{
                        height: "7vh",
                        width: "100%", // Adjust the width as needed
                        maxWidth: "600px",
                         fontWeight:"bold"
                      }}
                      type="text"
                      name="user_Name"
                      className="form-control"
                      placeholder="Enter Your Name"
                      value={formData.user_Name}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Allow only letters (uppercase, lowercase, and spaces)
                        if (/^[a-zA-Z\s]*$/.test(value)) {
                          handleInputChange(e); // Update state only with valid input
                        }
                      }}
                    />

                    <Input
                      style={{
                        height: "7vh",
                        width: "100%",
                        maxWidth: "600px",
                         fontWeight:"bold"
                      }}
                      type="text"
                      name="user_phoneno"
                      className="form-control"
                      placeholder="Enter Your Mobile Number"
                      value={formData.user_phoneno}
                      onChange={(e) => {
                        // Only allow numeric input and ensure length is capped at 10 digits
                        const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                        if (value.length <= 10) {
                          // Limit to 10 digits
                          handleInputChange({
                            target: { name: "user_phoneno", value },
                          });
                        }
                      }}
                    />

                    <Input
                      style={{
                        height: "7vh",
                        width: "100%",
                        maxWidth: "600px",
                        textAlign: "center",
                        fontWeight:"bold"
                      }}
                      type="text"
                      name="user_Email"
                      placeholder="Enter Your Email"
                      value={formData.user_Email}
                      onChange={handleInputChange}
                    />

                    <Input
                      style={{
                        height: "7vh",
                        width: "100%",
                        maxWidth: "600px",
                         fontWeight:"bold"
                      }}
                      type="password"
                      name="user_Password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      value={formData.user_Password}
                      onChange={handleInputChange}
                    />
                    <Input
                      style={{
                        height: "7vh",
                        width: "100%",
                        maxWidth: "600px",
                         fontWeight:"bold"
                      }}
                      type="text"
                      name="user_pincode"
                      className="form-control"
                      placeholder="Enter Your Pincode"
                      value={formData.user_pincode}
                      onChange={(e) => {
                        // Allow only numeric input and ensure the length is capped at 6 digits
                        const value = e.target.value.replace(/[^0-9]/g, ""); 
                        if (value.length <= 6) {
                          // Limit input to 6 digits (pincode length)
                          handleInputChange({
                            target: { name: "user_pincode", value },
                          });
                        }
                      }}
                      inputMode="numeric" 
                      pattern="[0-9]*" 
                    />

                    <button type="submit" className="custom-register-btn mt-3">
                      Submit
                    </button>
                  </div>
                </Col>
              </Row>
            </Card>
          </ModalBody>
        </Form>
      </Modal>

      {loginmodalStates === true ? (
        <Login
          loginmodalStates={loginmodalStates}
          setloginModalStates={() => {
            setloginModalStates(false);
          }}
          // checkchang={handleCallback}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;

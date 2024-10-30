import React, { useCallback, useEffect, useState } from 'react';
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
} from 'reactstrap';
import { Toast } from 'react-bootstrap'; // Toast imported correctly
import './Loginreg.css';
import Login from './Loginr';
import Authuser from './Authuser';

const Register = (props) => {
    const{http}=Authuser();
  const [modal, setModal] = useState(false);
  const [loginmodalStates, setloginModalStates] = useState(false);
  

  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    user_Name: '',
    user_Email: '',
    user_phoneno: '',
    user_Password: '',
  });
  const toggle = useCallback(() => {
    setModal((prev) => !prev);
    if (modal) props.setModalStates(); // Close modal if already open
  }, [modal, props]);

  useEffect(() => {
    setModal(props.modalStates);
  }, [props.modalStates]);



  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await http.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('Register data:', response.data);
      alert('Register successfully');

      setError(''); // Clear errors
      setShowToast(true); // Show success toast

      setModal(false); // Close the registration modal
      setloginModalStates(false); // Open the login modal
    } catch (err) {
      console.error('Error:', err);
      const errorMessage =
        err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage); // Set error message
    }
  };


  return (
    <div>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          <h5 className="mx-auto"onClick={() => setloginModalStates(!loginmodalStates)} >Please Sign Up</h5>
        </ModalHeader>

        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <Card className="border card-border-success p-3 shadow-lg">
              <Row>
                <Col lg={12}>
                  <div className="container">
                    {error && <div className="alert alert-danger mt-2">{error}</div>}

                    <Toast
                      onClose={() => setShowToast(false)}
                      show={showToast}
                      delay={3000}
                      autohide
                    >
                      <Toast.Body>Registration Successful!</Toast.Body>
                    </Toast>

                    <Input
                      style={{ height: '7vh' }}
                      type="text"
                      name="user_Name"
                      className="form-control"
                      placeholder="Username"
                      value={formData.user_Name}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      style={{ height: '7vh' }}
                      type="text"
                      name="user_phoneno"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={formData.user_phoneno}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      style={{ height: '7vh' }}
                      type="email"
                      name="user_Email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.user_Email}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      style={{ height: '7vh' }}
                      type="password"
                      name="user_Password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.user_Password}
                      onChange={handleInputChange}
                      required
                    />

                    <Button type="submit" className="custom-register-btn mt-3">
                      Continue
                    </Button>
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

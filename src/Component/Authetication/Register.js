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
} from 'reactstrap';
import { Toast } from 'react-bootstrap'; // Toast imported correctly
import './Loginreg.css';

const Register = (props) => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    user_Name: '',
    user_Email: '',
    user_phoneno: '',
    user_Password: '',
  });

  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);

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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}user/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed.');
      }

      console.log('Register data:', await response.json());
      alert('Registered successfully');
      setError('');
      setShowToast(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    }
  };

  return (
    <div>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          <h5 className="mx-auto">Please Sign Up</h5>
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

                    <input
                      style={{ height: '7vh' }}
                      type="text"
                      name="user_Name"
                      className="form-control"
                      placeholder="Username"
                      value={formData.user_Name}
                      onChange={handleInputChange}
                      required
                    />

                    <input
                      style={{ height: '7vh' }}
                      type="text"
                      name="user_phoneno"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={formData.user_phoneno}
                      onChange={handleInputChange}
                      required
                    />

                    <input
                      style={{ height: '7vh' }}
                      type="email"
                      name="user_Email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.user_Email}
                      onChange={handleInputChange}
                      required
                    />

                    <input
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
    </div>
  );
};

export default Register;

import React from "react";
import { Modal, ModalBody, ModalHeader, Button, Row, Col } from "reactstrap";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const NotificationModal = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/NotificationDetailPage');
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
    <ModalHeader className="text-center" toggle={toggle}>
      <span style={styles.modalHeaderText}>Notifications</span>
    </ModalHeader>
    <ModalBody>
      <div className="notification-item" style={styles.notificationItem}>
        <p style={styles.text}>
          A new order "<strong>AM001</strong>" has been placed by{" "}
          <strong>[Harshala Chavan]</strong>. Please ensure smooth processing.
        </p>
        <Row>
          <Col xs={6}>
            <Button style={styles.button} color="light">
              Accept
            </Button>
          </Col>
          <Col xs={6}>
            <Button style={styles.button} color="light">
              Reject
            </Button>
          </Col>
        </Row>
      </div>
  
      <div style={styles.viewAllContainer}>
        <Button
          style={styles.viewAllButton}
          color="light"
          className="view"
          onClick={() => {
            handleRedirect();  // Your redirect function
            toggle();           // Close the modal
          }}
        >
          View All Notifications
        </Button>
      </div>
    </ModalBody>
  </Modal>
  
  );
};

const styles = {
  modalHeaderText: {
    color: "#9a292f",
    fontWeight: "bold",
    textAlign: "center",
    display: "block",
    width: "100%",
  },
  notificationItem: {
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
    color: "#9a292f",

  },
  text: {
    marginBottom: "10px",
    fontSize: "14px",
    marginLeft:"20px"

  },
  button: {
    width: "100%",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "white",
    backgroundColor:"#9a292f",
    marginLeft:"20px"
  },
  viewAllContainer: {
    textAlign: "center",
    marginTop: "15px",
  },
  viewAllButton: {
    borderRadius: "10px",
    fontWeight: "bold",
    padding: "10px 20px",
    color: "white",
    width: "100%", // Ensures the button fits well within the modal
    maxWidth: "420px", // Restricts the maximum width for a balanced look
    margin: "0 auto", // Centers the button horizontally
    backgroundColor:"#9a292f"
  },
};

export default NotificationModal;

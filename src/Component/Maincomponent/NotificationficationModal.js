import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./Header.css";

const NotificationModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader className="text-center">
        <span style={styles.modalHeaderText} className="noyt">Notifications</span>
      </ModalHeader>
      <ModalBody>
        <div className="notification-item" style={styles.notificationItem}>
          <p style={styles.text}>
            A new order "<strong>AM001</strong>" has been placed by <strong>[Customer Name]</strong>. Please ensure smooth processing.
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

        <div className="notification-item" style={styles.notificationItem}>
          <p style={styles.text}>
            A new order "<strong>AM002</strong>" has been placed by <strong>[Customer Name]</strong>. Please ensure smooth processing.
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
    color: "#d9534f",
    fontWeight: "bold",
    textAlign: "center",
    display: "block",
    width: "100%",
  },
  notificationItem: {
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
  },
  text: {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#555",
  },
  button: {
    width: "100%",
    borderRadius: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  viewAllContainer: {
    textAlign: "center",
    marginTop: "15px",
  },
  viewAllButton: {
    borderRadius: "20px",
    fontWeight: "bold",
    padding: "10px 20px",
    color: "#333",
    width: "1200%", // Ensures the button fits well within the modal
    maxWidth: "400px", // Restricts the maximum width for a balanced look
    margin: "0 auto", // Centers the button horizontally
  },
};

export default NotificationModal;
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const DeleteModal = ({ isOpen, toggle, onDelete }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader
        toggle={toggle}
        style={{ fontWeight: "bold", marginRight: "30px"}}
      >
        Confirm Deletion
      </ModalHeader>

      <ModalBody style={{ marginLeft: "80px", fontWeight: "bold" }}>
        Are you sure you want to delete this item?
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={onDelete}
          style={{ marginRight: "80px" }} 
        >
          Delete
        </Button>
        <Button
          color="danger"
          onClick={toggle}
          style={{ marginLeft: "25px" }} 
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;

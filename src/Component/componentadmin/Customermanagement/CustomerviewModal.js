import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const CustomerviewModal = ({ isOpen, toggle, shop }) => {
  return (
    <Modal show={isOpen} onHide={toggle} size="lg" centered>
      <ModalHeader closeButton style={{fontWeight:"bold"}}>
       <h4> Customer Details</h4>
      </ModalHeader>
      <ModalBody>
      
        <form className="shopform" encType="multipart/form-data">
          <div className="row">
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="email"
                name="email"
                placeholder="Email ID"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="tel"
                name="pincode"
                placeholder="Enter Pincode"
                pattern="[0-9]{6}"
                style={{ fontWeight: "bold" }}
                maxLength="6"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <button
                type="button"
                className="choose-images-button"
                onClick={() => document.getElementById("shopImages").click()}
                style={{
                  width: "300px",
                  marginLeft: "5px",
                  backgroundColor: "#9a292f",
                  borderRadius: "5px",
                  marginLeft: "30px",
                  height: "45px",
                  fontWeight: "bold",
                }}
              >
                Choose Images
              </button>
              <input
                type="file"
                id="shopImages"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    console.log("Selected files:", files);
                  }
                }}
              />
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
      
      </ModalFooter>
    </Modal>
  );
};

export default CustomerviewModal;

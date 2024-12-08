import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const EdittrackorderModal = ({ isOpen, toggle, initialData, onSave }) => {
  return (
    <div>
      <Modal show={isOpen} onHide={toggle} size="lg" centered>
        <ModalHeader closeButton style={{ fontWeight: "bold" }}>
          <h4>Edit Modal</h4>
        </ModalHeader>
        <ModalBody>
        <form className="row g-3">
          <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Customer Name"
                name="shopLocation"
                required
                style={{marginLeft:"30px",fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                name="shopLocation"
                required
                style={{marginLeft:"30px",fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Quantity"
                name="mobileNumber"
                maxLength="10"
                pattern="[0-9]{10}"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="Date"
                className="form-control"
                placeholder="Enter Date "
                name="pincode"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
         
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Delivery Boy"
                name="email"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Delivery Address"
                name="email"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Payment Status"
                name="email"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Current Status"
                name="email"
                required
                style={{fontWeight:"bold"}}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
                {/* Hidden file input field */}
                <input
                  type="file"
                  id="shopImages"
                  style={{ display: "none" }}
                  accept="image/*" // Ensures only image files can be selected
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      console.log("Selected files:", files); // Handle the selected files
                    }
                  }}
                />

                {/* Visible button to trigger file input */}
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
              </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="submit-button"
                style={{
                  width: "300px",
                  marginLeft: "27px",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EdittrackorderModal;

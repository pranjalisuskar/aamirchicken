import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const DeliveryboyEdit =({ isOpen, toggle, initialData, onSave }) => {
    const [formData, setFormData] = React.useState(initialData);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData); // Call the save function with the updated data
      toggle(); // Close the modal
    };
  return (
    <div>
         <Modal show={isOpen} onHide={toggle} size="lg" centered>
      <ModalHeader closeButton style={{fontWeight:"bold"}}><h4>Delivery-Boy Edit Modal</h4></ModalHeader>
      <ModalBody>
        <form
          className="shopform"
          encType="multipart/form-data"
          // onSubmit={onSubmit}
        >
          <div className="row">
            {/* Shop Selection */}
            <div
              className="form-group col-md-6 custom-input"
              style={{ position: "relative" }}
            >
              <select
                className="form-control triangle-input"
                name="category"
                // value={productData.category}
                // onChange={onInputChange}
                style={{
                  fontWeight: "bold",
                  // width: "50%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  appearance: "none", // Remove default dropdown styling
                  WebkitAppearance: "none", // For Safari
                  MozAppearance: "none", // For Firefox
                  background: "white",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 10px center",
                  backgroundSize: "25px",
                  cursor: "pointer",
                }}
              >
                <option>Select Vehicle Type</option>
                <option>Cake Shop</option>
                <option>Aamir Shop</option>
              </select>
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="price"
                placeholder="Enter Shop Full Name"
                style={{ fontWeight: "bold" }}
              />
            </div>
            {/* <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Enter "
                style={{ fontWeight: "bold", marginLeft: "30px" }}
              />
            </div> */}
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Enter Pincode"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="tel"
                name="category"
                placeholder="Enter Contact Number"
                pattern="[0-9]{10}"
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                maxLength="10" // Restrict input length to 10 digits
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
                }}
              />
            </div>

            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Enter Email Address"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              {/* Hidden file input field */}
             
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Enter National Id/Passport"
                style={{ fontWeight: "bold" }}
              />
              {/* Visible button to trigger file input */}
            
            </div>
            <div className="form-group col-md-6 custom-input">
              {/* Hidden file input field */}
             
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Enter Emergency Number"
                style={{ fontWeight: "bold" }}
              />
              {/* Visible button to trigger file input */}
             
            </div>
            <div className="form-group col-md-12 custom-input">
              <button
                type="submit"
                className="submit-button"
                style={{
                  width: "300px",
                  marginLeft: "200px",
                  fontWeight: "bold",
                  
                }}
              >
                Update
              </button>
            </div>
          </div>
          {/* <button type="submit" className="submit-button">
    Submit
  </button> */}
        </form>
      </ModalBody>
    </Modal>
    </div>
  )
}

export default DeliveryboyEdit
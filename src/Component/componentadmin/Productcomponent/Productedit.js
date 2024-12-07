import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const Productedit =  ({ isOpen, toggle, initialData, onSave }) => {

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
  <Modal show={isOpen} toggle={toggle} size="lg" className="responsive-modal">
    <ModalHeader toggle={toggle}  style={{ fontWeight: "bold" }}>Product Edit Modal</ModalHeader>
    <ModalBody>
      <form className="shopform" encType="multipart/form-data">
        <div className="row">
          <div className="form-group col-md-6 col-sm-12 custom-input">
            <select
              className="form-control"
              name="category"
              style={{
                fontWeight: "bold",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                appearance: "none",
                background: "white",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "25px",
                cursor: "pointer",
              }}
            >
              <option value="" disabled>
                Select Shop
              </option>
              <option>Chicken Shop</option>
            </select>
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <input
              className="form-control"
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              style={{ fontWeight: "bold" }}
            />
          </div>

          <div className="form-group col-md-6 col-sm-12 custom-input">
            <select
              className="form-control"
              name="productCategory"
              style={{
                fontWeight: "bold",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                appearance: "none",
                background: "white",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "25px",
                cursor: "pointer",
              }}
            >
              <option value="" disabled>
                Select Product Category
              </option>
              <option>Example Category</option>
            </select>
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="Enter Product Price"
              style={{ fontWeight: "bold" }}
            />
          </div>

          <div className="form-group col-md-6 col-sm-12 custom-input">
            <button
              type="button"
              className="btn btn-primary "
              style={{
                backgroundColor: "#7a2226",
                color: "#fff",
                fontWeight: "bold",
                width:"300px"
              }}
            >
              Select Product Images
            </button>
            <input
              type="file"
              id="shopImages"
              name="image_url"
              multiple
              className="form-control-file "
              style={{ display: "none" }}
            />
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <button
              type="submit"
              className="btn btn-success "
              style={{
                fontWeight: "bold",
                backgroundColor: "#7a2226",
                color: "#fff",
                width:"300px"
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </ModalBody>
  </Modal>
</div>

  )
}

export default Productedit
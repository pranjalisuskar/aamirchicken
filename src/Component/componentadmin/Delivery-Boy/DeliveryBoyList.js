import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import DeliveryboyEdit from "./DeliveryboyEdit";
import Deliveryboyviewmodal from "./Deliveryboyviewmodal";
import DeleteModal from "../shopcomponent/Common/DeleteModal";

const DeliveryBoyList = () => {
  const [addModal, setAddModal] = useState(false);

  const toggleAddModal = () => setAddModal((prev) => !prev);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => {
    // setSelectedShop(shop);
    setEditModal((prev) => !prev);
  };
  const handleSave = (updatedData) => {
    // setShopData(updatedData);
    console.log("Updated shop data:", updatedData); // Handle the updated data (e.g., save to server)
  };

  const [viewModal, setToggleViewModal] = useState(false);

  // Toggle View Modal
  const toggleViewModal = (shop) => {
    // setSelectedShop(shop); // Set the selected shop for the modal
    setToggleViewModal((prev) => !prev);
  };

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteOrder = () => {
    console.log("Item deleted successfully");
    setDeleteModal(false); // Close the modal after deletion
  };

  return (
    <div className="container-fluid" style={{ marginBottom: "80px" }}>
      <DeleteModal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        onDelete={handleDeleteOrder}
      />
      <div className="row mt-5 px-2">
        <div className="col-12">
          <div className="shadow-sm">
            <div
              className="card-header bg-danger text-white rounded d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#9a292f" ,height:"60px"}}
            >
              <h5 className="mb-0" style={{ fontWeight: "bold" ,color:"white" ,marginLeft:"3%"}}>
                Total Delivery-Boy List
              </h5>
              <Button
  className="btn-light btn-sm responsive-button"
  onClick={toggleAddModal}
  style={{
    color: "#9a292f",
    fontWeight: "bold",
    marginRight: "3%",
  }}
>
  <i className="ri-add-line" style={{ color: "#9a292f" }}></i> Add Delivery-Boy
</Button>

<style jsx>{`
  .responsive-button {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    /* Tablet View */
    .responsive-button {
      font-size: 12px;
      padding: 6px 12px;
      margin-right: 2%;
    }
  }

  @media (max-width: 576px) {
    /* Mobile View */
    .responsive-button {
      font-size: 10px;
      padding: 4px 8px;
      margin-right: 1%;
    }
  }
`}</style>

            </div>

            <div className="table-responsive">
              <table className="table align-middle table-hover table-striped">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Full Name</th>
                    <th>Vehicle Type</th>
                    <th>Vehicle Number</th>
                    <th>Pincode</th>
                    <th>Contact Number</th>
                    <th>Email Address</th>
                    <th>Emergency Number</th>
                    <th>National Id/Passport</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Harshala</td>
                    <td>Bus</td>
                    <td>2890</td>
                    <td>413106</td>
                    <td>8010333958</td>
                    <td>harshalachavan@gmail.com</td>
                    <td>8010333958</td>
                    <td>3456</td>
                    <td className="d-flex gap-2">
                    <span onClick={() => toggleViewModal()}>
          <i
            className="ri-eye-line"
            style={{
              fontSize: "1.2rem",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          ></i>
        </span>

        <Deliveryboyviewmodal
          isOpen={viewModal}
          toggle={toggleViewModal}
          // shop={selectedShop}
        />
                      <span onClick={() => toggleEditModal()}>
                            <i
                              className="ri-edit-line"
                              style={{
                                fontSize: "1.2rem",
                                color: "green",
                                cursor: "pointer",
                              }}
                            ></i>
                          </span>
                       <DeliveryboyEdit
                            isOpen={editModal}
                            toggle={toggleEditModal}
                            // initialData={shop}
                            onSave={handleSave}
                          />
                      <i
                        className="ri-delete-bin-line"
                        style={{ fontSize: "1.2rem", color: "red" }}
                        onClick={() => setDeleteModal(true)}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Delivery-Boy Modal */}
      <Modal show={addModal} onHide={toggleAddModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Delivery-Boy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                Submit
              </button>
            </div>
          </div>
          {/* <button type="submit" className="submit-button">
    Submit
  </button> */}
        </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeliveryBoyList;

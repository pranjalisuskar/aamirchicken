import React, { useState } from "react";
import { CardHeader, Col, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";

const DeliveryBoyList = () => {
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [viewModal, setViewModal] = useState(false); // New state for view modal
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [shopData, setShopData] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteOrder = () => {
    console.log("Item deleted successfully");
    setDeleteModal(false); // Close the modal after deletion
  };

  const handleEditClick = (product) => {
    toggleEditModal();
  };

  const handleViewClick = (product) => {
    setSelectedProduct(product); // Set selected product for viewing
    toggleViewModal(); // Open the product view modal
  };

  const toggleEditModal = () => setEditModal((prev) => !prev);
  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleDetailsModal = () => setDetailsModal((prev) => !prev);
  const toggleViewModal = () => setViewModal((prev) => !prev); // Toggle for view modal

  return (
    <div
    className=""
    style={{ width: "1350px", marginLeft: "80px", marginBottom: "80px" }}
  >
  {/* <DeleteModal
      isOpen={deleteModal}
      toggle={() => setDeleteModal(!deleteModal)}
      onDelete={handleDeleteOrder}
    /> */}

    <div className="row" style={{ marginTop: "80px" }}>
      <div className="col-lg-12">
        <div className="shadow-sm">
          <CardHeader className="bg-danger text-white rounded">
            <Row
              className="gy-3 align-items-center"
              style={{ backgroundColor: "#9a292f" }}
            >
              <Col>
                <h5
                  className="mb-0"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    marginLeft: "5px",
                  }}
                >
                  Total Delivery-Boy List
                </h5>
              </Col>
              <Col xs={12} sm={6} className="text-end">
                <button
                  className="btn btn-light btn-sm "
                  onClick={toggleAddModal}
                  style={{
                    marginBottom: "10px",
                    width: "170px",
                    marginRight: "5px",
                    color: "#9a292f",
                  }}
                >
                  <i className="ri-add-line" style={{ color: "#9a292f" }}></i>{" "}
                  Add Delivery-Boy
                </button>
              </Col>
            </Row>
          </CardHeader>
          <div>
            <div className="table-responsive">
              <table
                className="table align-middle table-hover table-striped"
                style={{ width: "1350px" }}
              >
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th> Full Name</th>
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


                      <td className="d-flex gap-2" style={{ border: "none" }}>
                        <span>
                          <i
                            className="ri-eye-line"
                            style={{
                              fontSize: "1.2rem",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                        <span>
                          <i
                            className="ri-edit-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "green",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                        <span>
                          <i
                            className="ri-delete-bin-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "red",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                      </td>
                   
                    </tr>
                  
                    <tr>
                      <td>2</td>
                      <td>Harshala</td>
                      <td>Bus</td>
                      <td>2890</td>
                      <td>413106</td>
                      <td>8010333958</td>
                      <td>harshalachavan@gmail.com</td>
                      <td>8010333958</td>
                      <td>3456</td>


                      <td className="d-flex gap-2" style={{ border: "none" }}>
                        <span>
                          <i
                            className="ri-eye-line"
                            style={{
                              fontSize: "1.2rem",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                        <span>
                          <i
                            className="ri-edit-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "green",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                        <span>
                          <i
                            className="ri-delete-bin-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "red",
                              textDecoration: "none",
                              border: "none",
                            }}
                          ></i>
                        </span>
                      </td>
                   
                    </tr>
                  </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal isOpen={addModal} toggle={toggleAddModal} size="lg">
      <ModalHeader toggle={toggleAddModal}>Add TrackOrder</ModalHeader>
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
                <option>Select Shop</option>
                <option>Cake Shop</option>
                <option>Aamir Shop</option>
              </select>
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="price"
                placeholder="Enter Shop Location"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                className="form-control triangle-input"
                type="text"
                name="category"
                placeholder="Shop Address"
                style={{ fontWeight: "bold", marginLeft: "30px" }}
              />
            </div>
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
                placeholder="Enter Mobile Number"
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
            <div className="form-group col-md-6 custom-input">
              <button
                type="submit"
                className="submit-button"
                style={{
                  width: "300px",
                  marginLeft: "5px",
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
      </ModalBody>
    </Modal>

  </div>
  );
};

export default DeliveryBoyList;

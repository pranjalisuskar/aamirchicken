import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
} from "reactstrap";
import "./Viewcart.css";
import ShopEditModel from "./ShopEditModel";
import ShopviewModel from "./ShopviewModel";
// import DeleteModal from "../../Components/Common/DeleteModal";

import DeleteModal from "../shopcomponent/Common/DeleteModal";

const Shoptable = () => {
  // const [shopData, setShopData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  // const [detailsModal, setDetailsModal] = useState(false);
  // const [selectedShop, setSelectedShop] = useState(null);

  const toggleAddModal = () => setAddModal((prev) => !prev);
  // const toggleDetailsModal = () => setDetailsModal((prev) => !prev);

  // const handleRowClick = (shop) => {
  //   setSelectedShop(shop);
  //   toggleDetailsModal();
  // };

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteOrder = () => {
    console.log("Item deleted successfully");
    setDeleteModal(false); // Close the modal after deletion
  };

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/shops`);
        const result = await response.json();
        if (response.ok) setShopData(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchShopData();
  }, []);

  const [editModal, setEditModal] = useState(false);
  const [viewModal, settoggleViewModal] = useState(false);
  const [shopData, setShopData] = useState([]);

  const [selectedShop, setSelectedShop] = useState(null);

  const toggleViewModal = (shop) => {
    setSelectedShop(shop);
    settoggleViewModal((prev) => !prev);
  };

  const toggleEditModal = (shop) => {
    setSelectedShop(shop);
    setEditModal((prev) => !prev);
  };
  const handleSave = (updatedData) => {
    setShopData(updatedData);
    console.log("Updated shop data:", updatedData); // Handle the updated data (e.g., save to server)
  };

  return (
    <div
      className=""
      style={{ width: "1350px", marginLeft: "80px", marginBottom: "80px" }}
    >
      <DeleteModal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        onDelete={handleDeleteOrder}
      />

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
                    Total Shops List
                  </h5>
                </Col>
                <Col xs={12} sm={6} className="text-end">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={toggleAddModal}
                    style={{
                      marginBottom: "10px",
                      width: "150px",
                      marginRight: "5px",
                      color: "#9a292f",
                    }}
                  >
                    <i className="ri-add-line" style={{ color: "#9a292f" }}></i>{" "}
                    Add Shop
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
                      <th>Shop Name</th>
                      <th>Shop Location</th>
                      <th>Shop Address</th>
                      <th>Pincode</th>
                      <th>Mobile Number</th>
                      <th>Email Address</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shopData.map((shop, index) => (
                      <tr key={shop.id || index}>
                        <td>{index + 1}</td>
                        <td>{shop.shopName}</td>
                        <td>{shop.shopLocation}</td>
                        <td>{shop.address}</td>
                        <td>{shop.pincode}</td>
                        <td>{shop.mobileNumber}</td>
                        <td>{shop.emailAddress}</td>
                        <td>
                          <img
                            src={
                              "http://localhost:5001/uploads/shop/" +
                              shop.shopImage
                            }
                            alt={shop.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="d-flex gap-2" style={{ border: "none" }}>
                          <span onClick={() => toggleViewModal(shop)}>
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
                          <ShopviewModel
                            isOpen={viewModal}
                            toggle={toggleViewModal}
                            shop={selectedShop}
                          />
                          <span onClick={() => toggleEditModal(shop)}>
                            <i
                              className="ri-edit-line"
                              style={{
                                fontSize: "1.2rem",
                                color: "green",
                                cursor: "pointer",
                              }}
                            ></i>
                          </span>
                          <ShopEditModel
                            isOpen={editModal}
                            toggle={toggleEditModal}
                            initialData={shop}
                            onSave={handleSave}
                          />
                          <span onClick={() => setDeleteModal(shop.id)}>
                            <i
                              className="ri-delete-bin-line"
                              style={{
                                fontSize: "1.2rem",
                                color: "red",
                                cursor: "pointer",
                              }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={addModal} toggle={toggleAddModal} size="lg" centered>
        <ModalHeader toggle={toggleAddModal}>Add Shop</ModalHeader>
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

      {/* <Modal isOpen={detailsModal} toggle={toggleDetailsModal}>
        <ModalHeader toggle={toggleDetailsModal}>
          {selectedShop ? selectedShop.shopName : "Shop Details"}
        </ModalHeader>
        <ModalBody>
          {selectedShop ? (
            <>
              <p>
                <strong>Location:</strong> {selectedShop.shopLocation}
              </p>
              <p>
                <strong>Address:</strong> {selectedShop.address}
              </p>
              <p>
                <strong>Pincode:</strong> {selectedShop.pincode}
              </p>
            </>
          ) : (
            "No details available."
          )}
        </ModalBody>
      </Modal> */}
    </div>
  );
};

export default Shoptable;

import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  CardHeader,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import EdittrackorderModal from "./EdittrackorderModal";
import Trackorderviewmodal from "./Trackorderviewmodal";
import DeleteModal from "../shopcomponent/Common/DeleteModal";

const TrackOrderForm = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = (shop) => {
    // setSelectedShop(shop);
    setEditModal((prev) => !prev);
  };
  const handleSave = (updatedData) => {
    // setShopData(updatedData);
    console.log("Updated shop data:", updatedData); // Handle the updated data (e.g., save to server)
  };

  // Toggle Add Modal
  const toggleAddModal = () => setAddModal((prev) => !prev);

  const [viewModal, settoggleViewModal] = useState(false);

  const toggleViewModal = () => {
    // setSelectedShop(shop);
    settoggleViewModal((prev) => !prev);
  };

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteOrder = () => {
    console.log("Item deleted successfully");
    setDeleteModal(false); // Close the modal after deletion
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "1350px", marginLeft: "auto", marginRight: "auto" }}
    >
      <DeleteModal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        onDelete={handleDeleteOrder}
      />
      {/* Header Section */}
      <div className="shadow-sm">
        <CardHeader className="bg-danger text-white rounded">
          <Row
            className="gy-3 align-items-center"
            style={{ backgroundColor: "#9a292f" }}
          >
            <Col>
              <h5
                className="mb-0"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Total Track-Order List
              </h5>
            </Col>
            <Col xs="auto">
              <button
                className="btn btn-light btn-sm"
                onClick={toggleAddModal}
                style={{
                  width: "150px",
                  color: "#9a292f",
                  fontWeight: "bold",
                  marginBottom: "10px", // Correct placement for marginBottom
                }}
              >
                <i className="ri-add-line" style={{ color: "#9a292f" }}></i> Add
                TrackOrder
              </button>
            </Col>
          </Row>
        </CardHeader>
      </div>

      {/* Order Table */}
      <div className="table-responsive mt-3">
        <table className="table table-hover table-striped align-middle">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Order Date</th>
              <th>Delivery Boy</th>
              <th>Delivery Address</th>
              <th>Payment Status</th>
              <th>Current Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Harshala</td>
              <td>Chicken</td>
              <td>1kg</td>
              <td>08-01-2024</td>
              <td>ABC</td>
              <td>Kolhapur</td>
              <td>Online</td>
              <td>In Progress</td>
              <td className="d-flex gap-2" style={{ border: "none" }}>
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
                <Trackorderviewmodal
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
                <EdittrackorderModal
                  isOpen={editModal}
                  toggle={toggleEditModal}
                  // initialData={shop}
                  onSave={handleSave}
                />
                <span onClick={() => setDeleteModal(true)}>
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

            <tr>
              <td>2</td>
              <td>Harshala</td>
              <td>Chicken</td>
              <td>1kg</td>
              <td>08-01-2024</td>
              <td>ABC</td>
              <td>Kolhapur</td>
              <td>Online</td>
              <td>In Progress</td>
              <td className="d-flex gap-2" style={{ border: "none" }}>
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
                <Trackorderviewmodal
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
                <EdittrackorderModal
                  isOpen={editModal}
                  toggle={toggleEditModal}
                  // initialData={shop}
                  onSave={handleSave}
                />
                <span onClick={() => setDeleteModal(true)}>
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

            <tr>
              <td>3</td>
              <td>Harshala</td>
              <td>Chicken</td>
              <td>1kg</td>
              <td>08-01-2024</td>
              <td>ABC</td>
              <td>Kolhapur</td>
              <td>Online</td>
              <td>In Progress</td>
              <td className="d-flex gap-2" style={{ border: "none" }}>
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
                <Trackorderviewmodal
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
                <EdittrackorderModal
                  isOpen={editModal}
                  toggle={toggleEditModal}
                  // initialData={shop}
                  onSave={handleSave}
                />
                <span onClick={() => setDeleteModal(true)}>
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
          </tbody>
        </table>
      </div>

      {/* Add TrackOrder Modal */}
      <Modal show={addModal} onHide={toggleAddModal} size="lg" centered>
        <ModalHeader closeButton>
          <h5>Add TrackOrder</h5>
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

export default TrackOrderForm;

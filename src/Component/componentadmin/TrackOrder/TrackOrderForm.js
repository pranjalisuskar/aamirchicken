import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, CardHeader, Col, Row, Button } from "react-bootstrap";
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
  ;

  const handleSave = (updatedData) => {
    // setShopData(updatedData);
    console.log("Updated shop data:", updatedData); // Handle the updated data (e.g., save to server)
  };

  // Toggle Add Modal
  const toggleAddModal = () => setAddModal((prev) => !prev);

  const [viewModal,settoggleViewModal]=useState(false);
  

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
          <Row className="gy-3 align-items-center" style={{ backgroundColor: "#9a292f" }}>
            <Col>
              <h5 className="mb-0" style={{ fontWeight: "bold" ,color:"white"}}>
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
                }}
              >
                <i className="ri-add-line" style={{ color: "#9a292f" }}></i> Add TrackOrder
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
        <span
         onClick={() => toggleViewModal()}
         >
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
        <span
         onClick={() => toggleEditModal()}
         >
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
        <span 
        onClick={() => setDeleteModal(true)}
          >
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
              <select className="form-control" name="shop" required>
                <option value="">Select Shop</option>
                <option value="cake-shop">Cake Shop</option>
                <option value="aamir-shop">Aamir Shop</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Shop Location"
                name="shopLocation"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Shop Address"
                name="shopAddress"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                name="pincode"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number"
                name="mobileNumber"
                maxLength="10"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger w-100"
                onClick={() => document.getElementById("shopImages").click()}
              >
                Choose Images
              </button>
              <input
                type="file"
                id="shopImages"
                className="d-none"
                accept="image/*"
                multiple
              />
            </div>
            <div className="col-md-6">
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
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TrackOrderForm;

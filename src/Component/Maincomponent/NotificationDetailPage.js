import React, { useState } from "react";
import { CardHeader, Col, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";
import "./Notification.css";
import Notificationviewmodal from "./Notificationviewmodal";
import Notificationeditmodal from "./Notificationeditmodal";
import DeleteModal from "../componentadmin/shopcomponent/Common/DeleteModal";

  const NotificationDetailPage = () => {
    const [addModal, setAddModal] = useState(false); // Modal for Add Notification
    ;
    const toggleAddModal = () => setAddModal((prev) => !prev); // Toggle add modal

    const [viewModal, setToggleViewModal] = useState(false);

    // Toggle View Modal
    const toggleViewModal = (shop) => {
      // setSelectedShop(shop); // Set the selected shop for the modal
      setToggleViewModal((prev) => !prev);
    };

    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => {
      // setSelectedShop(shop);
      setEditModal((prev) => !prev);
    };
    const handleSave = (updatedData) => {
      // setShopData(updatedData);
      console.log("Updated shop data:", updatedData); // Handle the updated data (e.g., save to server)
    };

    const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteOrder = () => {
    console.log("Item deleted successfully");
    setDeleteModal(false); // Close the modal after deletion
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1500px", padding: "20px" }}>
      <DeleteModal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        onDelete={handleDeleteOrder}
      />
      <div className="row" style={{ marginTop: "80px" }}>
        <div className="col-12">
          <div className="shadow-sm">
            <CardHeader className="bg-danger text-white rounded">
              <Row className="gy-3 align-items-center" style={{ backgroundColor: "#9a292f" }}>
                <Col>
                  <h5 className="mb-0" style={{ color: "white", fontWeight: "bold" }}>
                    NotificationDetailPage List
                  </h5>
                </Col>
                <Col xs={12} sm={6} className="text-end">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={toggleAddModal}
                    style={{
                      marginBottom: "10px",
                      width: "170px",
                      marginRight: "5px",
                      color: "#9a292f",
                    }}
                  >
                    <i className="ri-add-line" style={{ color: "#9a292f" }}></i> Add Notification
                  </button>
                </Col>
              </Row>
            </CardHeader>
            <div>
              <div className="table-responsive">
                <table className="table align-middle table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer Name</th>
                      <th>Vehicle Type</th>
                      <th>Product Name</th>
                      <th>Pincode</th>
                      <th>Contact Number</th>
                      <th>Quantity</th>
                      <th>Order Date</th>
                      <th>Delivery Address</th>
                      <th>Total Amount</th>
                      <th>Delivery Boy</th>
                      <th>Payment Status</th>
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
                      <td>8010333958</td>
                      <td>3456</td>
                      <td>3456</td>



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

        <Notificationviewmodal
          isOpen={viewModal}
          toggle={toggleViewModal}
          // shop={selectedShop}
        /><span onClick={() => toggleEditModal()}>
        <i
          className="ri-edit-line"
          style={{
            fontSize: "1.2rem",
            color: "green",
            cursor: "pointer",
          }}
        ></i>
      </span>
   <Notificationeditmodal
        isOpen={editModal}
        toggle={toggleEditModal}
        // initialData={shop}
        onSave={handleSave}
      />
                        <span>
                          <i
                            className="ri-delete-bin-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "red",
                              textDecoration: "none",
                              border: "none",
                            }}
                            onClick={() => setDeleteModal(true)}
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
                      <td>8010333958</td>
                      <td>3456</td>
                      <td>8010333958</td>
                      {/* <td>3456</td>  */}

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

        <Notificationviewmodal
          isOpen={viewModal}
          toggle={toggleViewModal}
          // shop={selectedShop}
        /><span onClick={() => toggleEditModal()}>
        <i
          className="ri-edit-line"
          style={{
            fontSize: "1.2rem",
            color: "green",
            cursor: "pointer",
          }}
        ></i>
      </span>
   <Notificationeditmodal
        isOpen={editModal}
        toggle={toggleEditModal}
        // initialData={shop}
        onSave={handleSave}
      />
                        <span>
                          <i
                            className="ri-delete-bin-line"
                            style={{
                              fontSize: "1.2rem",
                              color: "red",
                              textDecoration: "none",
                              border: "none",
                            }}
                            onClick={() => setDeleteModal(true)}
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
  
      {/* Add Notification Modal */}
      <Modal show={addModal} onHide={toggleAddModal} size="lg" centered>
  <ModalHeader closeButton>
    <h5>Add Notification</h5>
  </ModalHeader>
  <ModalBody>
    <form className="shopform" encType="multipart/form-data">
      <div className="row">
        {/* Shop Selection */}
        <div className="form-group col-12 col-md-6 custom-input">
          <select className="form-control" name="category">
            <option>Select Shop</option>
            <option>Cake Shop</option>
            <option>Aamir Shop</option>
          </select>
        </div>
        <div className="form-group col-12 col-md-6 custom-input">
          <input
            className="form-control"
            type="text"
            name="price"
            placeholder="Enter Shop Location"
          />
        </div>
        <div className="form-group col-12 col-md-6 custom-input">
          <input
            className="form-control"
            type="text"
            name="category"
            placeholder="Shop Address"
          />
        </div>
        <div className="form-group col-12 col-md-6 custom-input">
          <input
            className="form-control"
            type="text"
            name="category"
            placeholder="Enter Pincode"
          />
        </div>
        <div className="form-group col-12 col-md-6 custom-input">
          <input
            className="form-control"
            type="tel"
            name="category"
            placeholder="Enter Mobile Number"
            pattern="[0-9]{10}"
            maxLength="10"
          />
        </div>
        <div className="form-group col-12 col-md-6 custom-input">
          <input
            className="form-control"
            type="text"
            name="category"
            placeholder="Enter Email Address"
          />
        </div>

        <div className="form-group col-12 col-md-6 custom-input">
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
          <button
            type="button"
            className="choose-images-button"
            onClick={() => document.getElementById("shopImages").click()}
            style={{
              backgroundColor: "#9a292f",
              borderRadius: "5px",
              height: "45px",
              fontWeight: "bold",
              color: "white",
              width: "100%",
            }}
          >
            Choose Images
          </button>
        </div>

        <div className="form-group col-12 col-md-6 custom-input">
          <button
            type="submit"
            className="submit-button"
            style={{
              width: "50%",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </ModalBody>
</Modal>

    </div>
  );
  
};

export default NotificationDetailPage;

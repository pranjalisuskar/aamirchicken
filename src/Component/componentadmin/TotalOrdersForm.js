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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import "./Viewcart.css";

const TotalOrdersForm = () => {
  const [shopData, setShopData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleDetailsModal = () => setDetailsModal((prev) => !prev);

  const handleRowClick = (shop) => {
    setSelectedShop(shop);
    toggleDetailsModal();
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

  return (
    <div
      className=""
      style={{ width: "1350px", marginLeft: "80px", marginBottom: "80px" }}
    >
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
                      height:"40px"
                    }}
                  >
                    Total Orders List
                  </h5>
                </Col>
                <Col xs={12} sm={6} className="text-end">
                  {/* <button
                    className="btn btn-light btn-sm "
                    onClick={toggleAddModal}
                    style={{
                      marginBottom: "10px",
                      width: "150px",
                      marginRight: "5px",
                      color: "#9a292f",
                    }}
                  >
                    <i className="ri-add-line" style={{ color: "#9a292f" }}></i>{" "}
                    Add Orders
                  </button> */}
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
                      <th>Customer Name</th>
                      <th>Shop Name</th>
                      <th>DeliveryBoy Name</th>
                      <th>Order Date</th>
                      <th>Order Total</th>
                      <th>Payment Method</th>
                      <th>Shipping Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chiken</td>
                      <td>200</td>
                      <td>abc</td>
                      <td>Chiken</td>
                      <td>200</td>
                      <td>abc</td>
                      <td>abc</td>

                      {/* <td className="d-flex gap-2" style={{ border: "none" }}>
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
                      </td> */}
                      <td>In Progress</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mutton</td>
                      <td>100</td>
                      <td>abc</td>
                      <td>Chiken</td>
                      <td>200</td>
                      <td>abc</td>
                      <td>abc</td>

                      {/* <td className="d-flex gap-2" style={{ border: "none" }}>
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
                      </td> */}
                      <td>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Fish</td>
                      <td>100</td>
                      <td>abc</td>
                      <td>Chiken</td>
                      <td>200</td>
                      <td>abc</td>
                      <td>abc</td>

                     <td>
                      Pending
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
        <ModalHeader toggle={toggleAddModal}>Add Order</ModalHeader>
        <ModalBody>
          <form
            className="shopform"
            encType="multipart/form-data"
            // onSubmit={onSubmit}
          >
            <div className="row">
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
                  name="productName"
                  placeholder="Enter Customer Name"
                  //   value={productData.productName}
                  //   onChange={onInputChange}
                  style={{ fontWeight: "bold" }}
                />
              </div>
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control triangle-input"
                  type="text"
                  name="price"
                  placeholder="Enter Delevirey Boy Name"
                  //   value={productData.price}
                  //   onChange={onInputChange}
                  style={{ marginLeft: "30px", fontWeight: "bold" }}
                />
              </div>
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control triangle-input"
                  type="text"
                  name="category"
                  placeholder="Enter Total Order"
                  //   value={productData.category}
                  //   onChange={onInputChange}
                  style={{ fontWeight: "bold" }}
                />
              </div>

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
                    marginLeft: "30px",
                  }}
                >
                  <option>Select Payment Method</option>
                  <option>Online</option>
                  <option>Cash On Delivery</option>
                </select>
              </div>
              <div className="form-group col-md-6 custom-input triangle-input">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Order Date"
                  customInput={
                    <input
                      style={{
                        width: "290px",
                        height: "45px", // Adjust height
                        fontSize: "16px", // Optional for text size
                        padding: "10px", // Optional for spacing
                        border: "1px solid #ccc", // Optional border styling
                        borderRadius: "5px", // Optional rounded corners
                        fontWeight: "bold",
                        textAlign: "center",
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
                    />
                  }
                />
              </div>
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
                    marginLeft: "5px",
                    marginLeft: "30px",
                  }}
                >
                  <option>Select Shipping Method</option>
                  <option>Pending</option>
                </select>
              </div>
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
                    marginLeft: "5px",
                  }}
                >
                  <option>Select Status</option>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                  <option>In Progress</option>
                  <option>On Hold</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
              style={{
                width: "200px",
                marginRight: "30px",
                fontWeight: "bold",
              }}
            >
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={detailsModal} toggle={toggleDetailsModal}>
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
      </Modal>
    </div>
  );
};

export default TotalOrdersForm;

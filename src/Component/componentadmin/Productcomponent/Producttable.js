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

const Producttable = () => {
  const [shopData, setShopData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  // const categories = ["Chicken", "Mutton", "Fish", "Egg"];

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

  const categories = ["Chicken", "Mutton", "Fish", "Egg"];
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
                    }}
                  >
                    Product List
                  </h5>
                </Col>
                <Col xs={12} sm={6} className="text-end">
                  <button
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
                    Add Product
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
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Product Category</th>
                      <th>Product Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chiken</td>
                      <td>200</td>
                      <td>abc</td>
                      <td>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ReGjnihI1IwgIL8_KJRWOff8lZWFlJb7xg&s"
                          alt="Image description"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>

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
                      <td>Mutton</td>
                      <td>100</td>
                      <td>abc</td>
                      <td>
                        <img
                          src="https://i0.wp.com/legpiece.in/wp-content/uploads/2021/05/Mutton-Curry-Cut.jpg?fit=640%2C640&ssl=1"
                          alt="Image description"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
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
                      <td>3</td>
                      <td>Fish</td>
                      <td>100</td>
                      <td>abc</td>
                      <td>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVW2TRmrDC5HRAmDcluJZMvUitjSzIiXJ9A&s"
                          alt="Image description"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
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
                    <tr style={{ border: "none" }}>
                      <td style={{ border: "none" }}>4</td>
                      <td style={{ border: "none" }}>Eggs</td>
                      <td style={{ border: "none" }}>100</td>
                      <td style={{ border: "none" }}>abc</td>
                      <td style={{ border: "none" }}>
                        <img
                          src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/health-benefits-of-eggs-732x549-thumbnail-732x549.jpg"
                          alt="Image description"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
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
                    <tr style={{ border: "none" }}>
                      <td style={{ border: "none" }}>5</td>
                      <td style={{ border: "none" }}>Chiken</td>
                      <td style={{ border: "none" }}>100</td>
                      <td style={{ border: "none" }}>abc</td>
                      <td style={{ border: "none" }}>
                        <img
                          src="https://img.freepik.com/premium-photo/fried-chicken-legs-with-lemon-parsley_266870-45.jpg"
                          alt="Image description"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
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
        <ModalHeader toggle={toggleAddModal} className="modal-header">
          Add Product
        </ModalHeader>
        <ModalBody>
          <form className="shopform" encType="multipart/form-data">
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

              {/* Product Name */}
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control styled-input"
                  type="text"
                  name="productName"
                  placeholder=" Enter Product Name"
                  style={{ fontWeight: "bold" }}
                />
              </div>

              {/* Product Price */}
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control styled-input"
                  type="text"
                  name="price"
                  placeholder="Enter Product Price"
                  style={{ fontWeight: "bold", marginLeft: "30px" }}
                />
              </div>

              {/* Category Selection */}
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

                    marginRight: "50px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    background: "white",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                    backgroundSize: "25px",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                >
                  <option>Select Product Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
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
                    marginLeft: "25px",
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

export default Producttable;

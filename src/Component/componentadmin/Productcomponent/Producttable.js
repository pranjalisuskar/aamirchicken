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
                    <tr>
                      <td>4</td>
                      <td>Eggs</td>
                      <td>100</td>
                      <td>abc</td>
                      <td>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={addModal} toggle={toggleAddModal} size="lg">
        <ModalHeader toggle={toggleAddModal}>Add product</ModalHeader>
        <ModalBody>
          <form
            className="shopform"
            encType="multipart/form-data"
            // onSubmit={onSubmit}
          >
            <div className="row">
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control triangle-input"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  //   value={productData.productName}
                  //   onChange={onInputChange}
                />
              </div>
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control triangle-input"
                  type="text"
                  name="price"
                  placeholder="Product Price"
                  //   value={productData.price}
                  //   onChange={onInputChange}
                />
              </div>
              <div className="form-group col-md-6 custom-input">
                <input
                  className="form-control triangle-input"
                  type="text"
                  name="category"
                  placeholder="Product Category"
                  //   value={productData.category}
                  //   onChange={onInputChange}
                />
              </div>
              <div className="form-group col-md-6 custom-input">
                <button
                  type="button"
                  //   onClick={() => document.getElementById("shopImages").click()}
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#7a2226",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                    textAlign: "center",
                    border: "none",
                  }}
                >
                  Choose Images
                </button>
                <input
                  type="file"
                  id="shopImages"
                  name="image_url"
                  multiple
                  className="form-control-file"
                  //   onChange={(e) => handleImageChange(e)}
                  style={{ display: "none" }}
                />
                <div className="image-preview-container mt-3">
                  <img
                    src=""
                    alt=""
                    className="image-preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      margin: "5px",
                      borderRadius: "5px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  {/* ))} */}
                </div>
              </div>
            </div>
            <button type="submit" className="submit-button">
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

export default Producttable;

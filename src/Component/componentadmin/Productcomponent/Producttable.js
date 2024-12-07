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
import Productedit from "./Productedit";
import ProductviewModal from "./ProductviewModal";

import DeleteModal from "../shopcomponent/Common/DeleteModal";

const Producttable = () => {
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [viewModal, setViewModal] = useState(false); // New state for view modal
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [shopData, setShopData] = useState([]);
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = () => setEditModal((prev) => !prev);
  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleDetailsModal = () => setDetailsModal((prev) => !prev);
  const toggleViewModal = () => setViewModal((prev) => !prev); // Toggle for view modal

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
    <div style={{ width: "1350px", marginLeft: "80px", marginBottom: "80px" }}>
      
      <div className="row" style={{ marginTop: "80px" }}>
        <div className="col-lg-12">
          <div className="shadow-sm">
            <CardHeader className="bg-danger text-white rounded">
              <Row className="gy-3 align-items-center" style={{ backgroundColor: "#9a292f" }}>
                <Col>
                  <h5 className="mb-0" style={{ color: "white", fontWeight: "bold", marginBottom: "5px", marginLeft: "5px" }}>
                    Product List
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
                    <i className="ri-add-line" style={{ color: "#9a292f" }}></i> Add Product
                  </button>
                </Col>
              </Row>
            </CardHeader>
            <div>
              <div className="table-responsive">
                <table className="table align-middle table-hover table-striped" style={{ width: "1350px" }}>
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
                    {shopData.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="d-flex gap-2">
                          <span>
                            <i
                              className="ri-eye-line"
                              style={{ fontSize: "1.2rem" }}
                              onClick={() => handleViewClick(product)} // Show view modal when clicked
                            ></i>
                          </span>
                          <span>
                            <i
                              className="ri-edit-line text-success"
                              style={{ fontSize: "1.2rem" }}
                              onClick={() => handleEditClick(product)}
                            ></i>
                          </span>
                          <span onClick={() => setDeleteModal(true)}>
                            <i
                              className="ri-delete-bin-line text-danger"
                              style={{ fontSize: "1.2rem" }}
                              // onClick={() => handleDeleteClick(product.id)}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <DeleteModal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        onDelete={handleDeleteOrder}
      />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={addModal} toggle={toggleAddModal} size="lg">
        <ModalHeader toggle={toggleAddModal} className="modal-header">
          Add Product
        </ModalHeader>
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
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#7a2226",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Select Product Images
            </button>
            <input
              type="file"
              id="shopImages"
              name="image_url"
              multiple
              className="form-control-file"
              style={{ display: "none" }}
            />
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                fontWeight: "bold",
                backgroundColor: "#9a292f",
                color: "#fff",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
        </ModalBody>
      </Modal>

      {/* Product View Modal */}
      <ProductviewModal
        isOpen={viewModal}
        toggle={toggleViewModal}
        product={selectedProduct} // Pass selected product to the modal
      />

      {/* Edit Modal */}
      <Productedit
        isOpen={editModal}
        toggle={toggleEditModal}
        // initialData={Product}
        onSave={(updatedProduct) => {
          const updatedData = shopData.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          );
          setShopData(updatedData);
          toggleEditModal();
        }}
      />
    </div>
  );
};

export default Producttable;

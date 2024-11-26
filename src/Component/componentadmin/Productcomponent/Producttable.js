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
    <div className="page-content">
      <div className="fluid " style={{marginTop:'20px'}}>
        < div className="row">
          <div className="col-lg-12" >
            {/* <Card className="shadow-sm"> */}
            <div className="shadow-sm">
              <CardHeader className="bg-danger text-white rounded">
                <Row className="gy-3 align-items-center">
                  <Col xs={12} sm={6}>
                    <h5 className="mb-0">🛍 Product List</h5>
                  </Col>
                  <Col xs={12} sm={6} className="text-end">
                    <button
                      className="btn btn-light btn-sm text-danger"
                      onClick={toggleAddModal}
                      style={{marginRight:'80px'}}
                    >
                      <i className="ri-add-line"></i> Add Product
                    </button>
                  </Col>
                </Row>
              </CardHeader>
              {/* <CardBody> */}
              <div>
                <div className="table-responsive">
                  <table className="table align-middle table-hover table-striped">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>product Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
  <tr>
    <td>1</td>
    <td>hjk</td>
    <td className="d-flex gap-2">
      <button className="btn btn-sm btn-outline-primary">
        View
      </button>
      <button className="btn btn-sm btn-outline-secondary">
        Edit
      </button>
      <button className="btn btn-sm btn-outline-danger">
        Delete
      </button>
    </td>
  </tr>
  <tr>
    <td colSpan="3" className="text-center">
      No shops available.
    </td>
  </tr>
</tbody>

                  </table>
                </div>
                </div>
                </div>
              {/* </CardBody> */}
            {/* </Card> */}
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
              style={{ display: "none"}}
            />
            <div className="image-preview-container mt-3">
              
                <img
                 
                  src=''
                  alt=''
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

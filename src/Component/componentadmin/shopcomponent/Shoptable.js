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

const Shoptable = () => {
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
      <div className="fluid" style={{marginTop:'20px'}}>
        < div className="row">
          <div className="col-lg-12" >
            {/* <Card className="shadow-sm"> */}
            <div className="shadow-sm">
              <CardHeader className="bg-danger text-white rounded">
                <Row className="gy-3 align-items-center">
                  <Col xs={12} sm={6}>
                    <h5 className="mb-0">🛍 Shop List</h5>
                  </Col>
                  <Col xs={12} sm={6} className="text-end">
                    <button
                      className="btn btn-light btn-sm text-danger"
                      onClick={toggleAddModal}  style={{marginRight:'80px'}}
                    >
                      <i className="ri-add-line"></i> Add Shop
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
                        <th>Shop Name</th>
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
        <ModalHeader toggle={toggleAddModal}>Add Shop</ModalHeader>
        <ModalBody>
        <form className="shopform" >
          <div className="row">
            {/* Add Shopowner DD here */}
            <div className="form-group col-md-6 custom-input">
              <input
              style={{fontWeight:"bold"}}
                className="form-control triangle-input"
                type="text"
                name="shopName"
                // value={formData.shopName}
                // onChange={onInputChange}
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className="form-group col-md-6 custom-input">
              <input
                  style={{fontWeight:"bold"}}
                className="form-control triangle-input"
                type="text"
                name="shopLocation"
                // value={formData.shopLocation}
                // onChange={onInputChange}
                placeholder="Enter Product Price"
                required
              />
            </div>
            <div
              className="form-group col-md-6 custom-input"
              style={{ paddingTop: "5px" }}
            >
              <input
                  style={{fontWeight:"bold"}}
                className="form-control triangle-input"
                type="text"
                name="address"
                // value={formData.address}
                // onChange={onInputChange}
                placeholder="Enter Product Category "
                required
              />
            </div>

            <div className="form-group col-md-6 custom-input">
              <input
                style={{
                  width: "80%", 
                  height: "45px", 
                  padding: "10px", 
                  borderRadius: "5px", 
                  border: "1px solid #ccc", 
                  marginTop: "10px", 
                }}
                type="file"
                id="file"
                name="file"
                multiple
                className="form-control-file"
                // onChange={onInputChange}
                required
              />
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

export default Shoptable;

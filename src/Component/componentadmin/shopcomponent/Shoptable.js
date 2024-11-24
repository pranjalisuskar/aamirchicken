import React, { useState, useEffect } from 'react';
import {
  Card, CardBody, CardHeader, Col, Container,
  Modal, ModalHeader, ModalBody, Row, Nav,
} from 'reactstrap';
import './Viewcart.css';

const Shoptable = () => {
  // State for shop data
  const [shopData, setShopData] = useState([]);

  // State for modals
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  // State for selected shop details
  const [selectedShop, setSelectedShop] = useState(null);

  // Toggle functions for modals
  const toggleAddModal = () => setAddModal((prev) => !prev);
  const toggleDetailsModal = () => setDetailsModal((prev) => !prev);

  // Handle row click to open details modal
  const handleRowClick = (shop) => {
    setSelectedShop(shop);
    toggleDetailsModal();
  };

  // Fetch shop data from API
  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/shops`);
        const result = await response.json();
        if (response.ok) {
          setShopData(result.data);
        } else {
          console.error('Error fetching shop data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchShopData();
  }, []);

  return (
    <div className="page-content">
      {/* Main container */}
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Card className="shadow-sm">
              {/* Card Header */}
              <CardHeader className="bg-danger text-white shadow-sm rounded">
                <Row className="align-items-center gy-2">
                  <Col xs={12} sm={6}>
                    <h5 className="mb-0 fw-semibold">🛍 Shop List</h5>
                  </Col>
                  <Col xs={12} sm={6} className="text-sm-end">
                    <button
                      type="button"
                      className="btn btn-sm btn-light text-danger fw-bold d-flex align-items-center gap-1 w-100 w-sm-auto"
                      onClick={toggleAddModal}
                    >
                      <i className="ri-add-line"></i> Add
                    </button>
                  </Col>
                </Row>
              </CardHeader>

              {/* Card Body */}
              <CardBody className="pt-0">
                <Nav className="nav-tabs-custom nav-success" role="tablist"></Nav>

                {/* Responsive Table */}
                <div className="table-responsive mt-3">
                  <table className="table align-middle table-hover table-striped">
                    <thead className="table-light text-uppercase">
                      <tr>
                        <th>Sr No</th>
                        <th>Shop Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shopData.length > 0 ? (
                        shopData.map((shop, index) => (
                          <tr key={shop.id}>
                            <td>{index + 1}</td>
                            <td>{shop.shopName}</td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li className="list-inline-item">
                                  <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => handleRowClick(shop)}
                                  >
                                    <i className="ri-eye-fill"></i> View
                                  </button>
                                </li>
                                <li className="list-inline-item">
                                  <button className="btn btn-sm btn-outline-danger">
                                    <i className="ri-delete-bin-5-fill"></i> Delete
                                  </button>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center py-4">
                            No shops available.{' '}
                            <a href="#" onClick={toggleAddModal}>
                              Add a new shop
                            </a>.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add Shop Modal */}
      <Modal isOpen={addModal} toggle={toggleAddModal} size="lg">
        <ModalHeader toggle={toggleAddModal}>Add to Shop</ModalHeader>
        <ModalBody>
          {/* Add your form logic here */}
        </ModalBody>
      </Modal>

      {/* Shop Details Modal */}
      <Modal isOpen={detailsModal} toggle={toggleDetailsModal} size="lg">
        <ModalHeader toggle={toggleDetailsModal}>
          {selectedShop ? selectedShop.shopName : 'Shop Details'}
        </ModalHeader>
        <ModalBody>
          {selectedShop ? (
            <div>
              <p><strong>Location:</strong> {selectedShop.shopLocation}</p>
              <p><strong>Address:</strong> {selectedShop.address}</p>
              <p><strong>Pincode:</strong> {selectedShop.pincode}</p>
              <p><strong>Mobile No:</strong> {selectedShop.mobileNumber}</p>
              <p><strong>Email:</strong> {selectedShop.emailAddress}</p>
            </div>
          ) : (
            <p>No shop details available.</p>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Shoptable;

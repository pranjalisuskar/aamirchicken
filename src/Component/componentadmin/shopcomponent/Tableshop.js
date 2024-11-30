import React, { useState, useEffect } from "react";

const Tableshop = () => {
  const [shopData, setShopData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  const toggleAddModal = () => setAddModal(!addModal);
  const toggleDetailsModal = () => setDetailsModal(!detailsModal);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/shops`);
        const result = await response.json();
        if (response.ok) {
          setShopData(result.data);
        } else {
          console.error("Error fetching shop data:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchShopData();
  }, []);

  const handleViewClick = (shop) => {
    setSelectedShop(shop);
    toggleDetailsModal();
  };

  return (
    <div className="container-fluid page-content">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-header border-0 text-white bg-danger rounded">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h5 className="card-title mb-0 fw-semibold">🛍 Shop List</h5>
                </div>
                <div className="col-sm-6 text-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-light text-danger fw-bold"
                    onClick={toggleAddModal}
                  >
                    <i className="ri-add-line" /> Add
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-striped mt-3">
                  <thead className="table-light text-muted text-uppercase">
                    <tr>
                      <th>Sr No</th>
                      <th>Shop Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {shopData.length > 0 ? (
                      shopData.map((shop, index) => (
                        <tr key={shop.id} style={{ cursor: "pointer" }}>
                          <td>{index + 1}</td>
                          <td>{shop.name}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleViewClick(shop)}
                            >
                              <i className="ri-eye-line" /> View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          No shops available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {addModal && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add to Shop</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleAddModal}
                ></button>
              </div>
              <div className="modal-body"> {/* Add shop form here */}</div>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {detailsModal && selectedShop && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shop Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleDetailsModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Name:</strong> {selectedShop.name}
                </p>
                <p>
                  <strong>Location:</strong> {selectedShop.location}
                </p>
                <p>
                  <strong>Address:</strong> {selectedShop.address}
                </p>
                <p>
                  <strong>Contact:</strong> {selectedShop.contact}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tableshop;

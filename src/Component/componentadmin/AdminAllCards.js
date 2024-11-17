import React, { useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      {/* Top Bar */}
      <div className="top-bar">
        <h5 style={{ fontWeight: "bold" }}>Admin Dashboard!</h5>
        <Link to="/shopadd">
          <button
            className="btn btn-success"
            style={{
              backgroundColor: "#9a292f",
              width: "150px",
              marginLeft: "630px",
            }}
          >
            Add Shop
          </button>
        </Link>

        <button
          className="btn btn-success"
          style={{ backgroundColor: "#9a292f", width: "150px" }}
        >
         Add Delivery Boy
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="row mt-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              {/* <i class="fas fa-tasks fa-2x mr-3"></i> */}
              <i
                className="fas fa-tachometer-alt fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>Dashboard</h6>
                <p>View your stats and metrics.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-box fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>New Order</h6>
                <p>Manage your account Order.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              {/* <i class="fas fa-check-circle fa-2x mr-3"></i> */}
              <i
                className="fas fa-cogs fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>
                  Total Product
                </h6>
                <p>Customize your product.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              {/* <i class="fas fa-dollar-sign fa-2x mr-3"></i> */}
              <i
                className="fas fa-box-open fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>
                  Pending Orders
                </h6>
                <p>Find helpful pending orders.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
      <div className="row mt-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              {/* <i class="fas fa-tasks fa-2x mr-3"></i> */}
              <i
                className="fas fa-calendar-day fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>Daily Sale</h6>
                <p>Manage your daily sales.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <Link
            to="/addproduct"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <i
                  className="fas fa-plus-circle fa-2x mr-3"
                  style={{ color: "#9a292f", fontSize: 30 }}
                />
                <div>
                  <h6 style={{ fontWeight: "bold", fontSize: 18 }}>
                    Add Product
                  </h6>
                  <p>Manage your add product.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <Link
            to="/shopadd"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <i
                  className="fas fa-store fa-2x mr-3"
                  style={{ color: "#9a292f", fontSize: 30 }}
                />
                <div>
                  <h6 style={{ fontWeight: "bold", fontSize: 18 }}>Add Shop / Delivery Boy</h6>
                  <p>Manage your add shop.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              {/* <i class="fas fa-dollar-sign fa-2x mr-3"></i> */}
              <i
                className="fas fa-store-alt fa-2x mr-3"
                style={{ color: "#9a292f", fontSize: 30 }}
              />
              <div>
                <h6 style={{ fontWeight: "bold", fontSize: 18 }}>
                  Total Shops
                </h6>
                <p>Manage your add shops.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Content;

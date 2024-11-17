import React, { useState } from "react";


const ShopCards = () => {
  return (
<div>
    <div className="sidebar d-none d-md-block col-md-3 col-lg-2" style={{backgroundColor: '#9a292f'}}>
  <div className="text-center mb-4">
  {/* <img src="/logo/logo.jpg" alt="Logo" className="logo" /> */}
    <h4 className="text-white" style={{fontWeight:"bold"}}>Amir Chicken
    </h4>
  </div>
  <nav className="nav flex-column">
    <a className="nav-link text-white active" href="#" style={{marginRight: 10}}>
      <i className="fas fa-tachometer-alt" /> Dashboard
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-box" /> New Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-cogs" /> Total Product
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-box-open" /> Pending Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-times-circle" /> Rejected Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-calendar-day" /> Daily Sale
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-plus-circle" /> Add Product
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-store" /> Add Shop
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-store-alt" /> Total Shops
    </a>
  </nav>
</div>
<div>
</div>
   <div className="content">
  {/* Top Bar */}
  <div className="top-bar">
    <h5 style={{fontWeight: 'bold'}}>Precision Creates Perfection!</h5>
    <button className="btn btn-success" style={{backgroundColor: '#9a292f',width:"160px"}}>
      Backup Database
    </button>
  </div>
  {/* Dashboard Cards */}
  <div className="row mt-4">
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          {/* <i class="fas fa-tasks fa-2x mr-3"></i> */}
          <i className="fas fa-tachometer-alt fa-2x mr-3" style={{color: '#9a292f', fontSize: 30}} />
          <div>
            <h6 style={{fontWeight: 'bold', fontSize: 18}}>Dashboard</h6>
            <p>View your stats and metrics.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <i className="fas fa-box fa-2x mr-3" style={{color: '#9a292f', fontSize: 30}} />
          <div>
            <h6 style={{fontWeight: 'bold', fontSize: 18}}>New Order</h6>
            <p>Manage your account Order.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          {/* <i class="fas fa-check-circle fa-2x mr-3"></i> */}
          <i className="fas fa-cogs fa-2x mr-3" style={{color: '#9a292f', fontSize: 30}} />
          <div>
            <h6 style={{fontWeight: 'bold', fontSize: 18}}>
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
          <i className="fas fa-box-open fa-2x mr-3" style={{color: '#9a292f', fontSize: 30}} />
          <div>
            <h6 style={{fontWeight: 'bold', fontSize: 18}}>
              Pending Orders
            </h6>
            <p>Find helpful pending orders.</p>
          </div>
        </div>
      </div>
    </div>
    {/* Add more cards as needed */}
  </div>
  
</div>
</div>
  );
};

export default ShopCards;

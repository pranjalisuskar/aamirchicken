import React, { useState } from 'react';
import './Placeoeder.css';

const Placeorder = () => {
  const [orderPlaced, setOrderPlaced] = useState(null);

  const productsData = [
    {
      name: 'Premium Chicken',
      available: 'Available in your Kolhapur',
      full: '1 Full Chicken is Provided',
      description: '1 Full Chicken Curry Cut (Skinless)',
      price: 'Rs. 236.00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s',
    },
  ];

  const handlePlaceOrder = (product) => {
    setOrderPlaced(product);
  };

  const handleBackToShop = () => {
    setOrderPlaced(null);
  };

  return (
    <div className="container mt-5 shop-container">
      <div className="shop-header">
        <img
          src="http://localhost:5001/uploads/shop/" 
          alt=''
          className="shop-img"
        />
        <div className="shop-info">
          <h1 className="shop-name"> || "N/A"</h1>
          <p>Address: </p>
          <p>Pincode: </p>
          <div className="shop-status">
            <span className="status-available">
                service available
              {/* {
                ? "Service available"
                : "Service not available"} */}
            </span>
            <span className="shop-rating">
              <strong>uii</strong>
              <i className="fas fa-star text-warning"></i>
              <span> reviews</span>
            </span>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Placeorder;

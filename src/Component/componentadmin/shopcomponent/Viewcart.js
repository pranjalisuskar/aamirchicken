import React, { useState } from 'react';
import './Viewcart.css';
import Login from '../../Authetication/Loginr';
import Register from '../../Authetication/Register';
import { Link } from 'react-router-dom';

const Viewcart = () => {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const products = [
    {
      name: "Egg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s",
      price: 249,
    },
    {
      name: "Chicken",
      img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
      price: 449,
    },
  ];


  const chatOptions = [
    {
      message: "1 kg - (22 - 28 pcs approx) 23%OFF Rs-249",
      buttonLabel: "Add to Cart",
      price: 249,
    },
    {
      message: "23% OFF on 250g (1 - 2 pcs approx.) - ₹99",
      buttonLabel: "Add to Cart",
      price: 99,
    },
    {
      message: "23% OFF on 1kg (4 - 6 pcs approx.) - ₹449",
      buttonLabel: "Add to Cart",
      price: 449,
    },
  ];


  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  return (
    <div className="container d-flex">
      {/* Account Section */}
      <div className="account-section flex-grow-1">
        {/* <div className="indicator" /> */}
        <div className="account-content">
          <h5><strong>Account</strong></h5>
          <p>To place your order now, log in to your existing account or sign up.</p>
          <div className="button-group">
          <button className="btn-light" onClick={handleLoginClick}>
        Have an account? <strong>LOG IN</strong>
      </button>
            <button className="btn-danger" onClick={handleRegisterClick}>
              New to Meatzo? <strong>SIGN UP</strong>
            </button>
          </div>
        </div>

        <div className="accontent">
          <h5 className="jkl">Delivery Address</h5>
        </div>

        <div className="accontent">
          <h5 className="">Payment</h5>
          <Link to='/placeorder'>
          <button className="btn btn-primary place-order-btn" >
              proceed to pay
            </button>
            </Link>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary flex-grow-1 ml-4">
        <div className="indicator" />
       
     
        <div className="order-content">
          <div className="order-header">
            <img
              src="https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg"
              alt="Product"
              className="product-img"
              style={{height:'70px',
                width:'70px'
              }}
            />
            <div>
              <h5 className="shop-name"><strong>Balaji Chicken Shop</strong></h5>
              <p>Available in your Kolhapur</p>
            </div>
          </div>
          <div className="order-details">
            <p><strong>Premium Chicken - 1 Full Chicken Curry Cut (Skinless)</strong></p>
            <p>1 Full Chicken is Provided</p>
          </div>
          <h6 className="summary-title"><strong>Order Summary</strong></h6>
          <div className="summary-item">
            <span>Order</span>
            <span>236</span>
          </div>
          <div className="summary-item">
            <span>Taxes</span>
            <span>Rs. 3.00</span>
          </div>
          <div className="summary-item">
            <span>Delivery fees</span>
            <span>Rs. 10.00</span>
          </div>
          <hr />
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>Rs. 236.00</strong>
          </div>
        </div>


      </div>

      {isLoginOpen && (
        <Login
          modalState={isLoginOpen}
          setModalState={() => setIsLoginOpen(false)}
        />
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <Register
          modalStates={isRegisterOpen}
          setModalStates={() => setIsRegisterOpen(false)}
        />
      )}
    </div>
  );
};

export default Viewcart;

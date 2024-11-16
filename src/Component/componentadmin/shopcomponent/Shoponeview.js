import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shoponeview.css";
import Authuser from "../../Authetication/Authuser";
import { Modal, ModalBody, Button, ModalHeader } from 'reactstrap';

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [dropdownStates, setDropdownStates] = useState({}); // Track dropdown visibility for each product
  // const [cart, setCart] = useState({});
  // const [showModal, setShowModal] = useState(false);
  

  const products = [
    {
      name: "Egg",
      price: "100 / 10 p",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s",
    },
    {
      name: "Chicken",
      price: "144 / 500gm",
      img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
    },
    {
      name: "Chicken Wing",
      price: "144 / 500gm",
      img: "https://t4.ftcdn.net/jpg/02/92/77/85/360_F_292778539_JeGMFXajaQtXpq5nRZLo87suJZkqJ7oS.jpg",
    },
    {
      name: "1 Full Chicken Curry Cut",
      price: "144 / 500gm",
      img: "https://newzealandfresh.sg/cdn/shop/products/Screen_Shot_2018-08-14_at_12.16.53_AM_grande.png?v=1563071603",
    },
  ];

  const chatOptions = [
    { message: "23% OFF on 500g (2 - 4 pcs approx.) - ₹189" },
    { message: "23% OFF on 250g (1 - 2 pcs approx.) - ₹99" },
    { message: "23% OFF on 1kg (4 - 6 pcs approx.) - ₹449" },
  ];
  const getShopData = () => {
    fetch(`http://localhost:5001/api/shop/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setShop(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getShopData();
  }, [id, token]);

  // Function to toggle dropdown visibility for each product
  const toggleDropdownChat = (productName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [productName]: !prevStates[productName],
    }));
  };


  const [showModals, setShowModals] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState({});


  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    
  };
  
  // Add product to cart or increase its quantity
  const addToCart = (productName) => {
    setShowModals(!showModals);
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: prevCart[productName] ? prevCart[productName] + 1 : 1,
    }));
  };

  // Sample decrement and increment functions
  const decrementQuantity = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: prevCart[productName] > 1 ? prevCart[productName] - 1 : 1,
    }));
  };

  const incrementQuantity = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: prevCart[productName] + 1,
    }));
  };


  return (
    <div className="container mt-5 shop-container">
      <div className="shop-header">
        <img
          src={"http://localhost:5001/uploads/shop/" + shop.shopImage}
          alt={shop.shopName}
          className="shop-img"
        />
        <div className="shop-info">
          <h1 className="shop-name"> {shop.shopName || "N/A"}</h1>
          <p>Address: {shop.address || "N/A"}</p>
          <p>Pincode: {shop.pincode || "N/A"}</p>
          <div className="shop-status">
            <span className="status-available">
              {shop.availability?.serviceAvailable
                ? "Service available"
                : "Service not available"}
            </span>
            <span className="shop-rating">
              <strong>{shop.rating || "N/A"}</strong>
              <i className="fas fa-star text-warning"></i>
              <span> ({shop.reviews || 0} reviews)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="search-bar text-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search for the products you love"
        />
      </div>
      <div className="products-section">
        <h2
          className="section-title"
          style={{
            color: "#9a292f",
            fontWeight: "bold",
            fontSize: "35px",
            fontStyle: "italic",
            paddingTop: "20px",
            marginBottom: "20px",
          }}
        >
          Products
        </h2>
        <div className="products">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card"
              style={{
                position: "relative",
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "100%", borderRadius: "8px", height: "200px" }}
              />
              <h5 style={{ textAlign: "center", marginTop: "10px" }}>
                {product.name}
              </h5>

              <div
                className="dropdown-container"
                style={{ textAlign: "center" }}
              >
                <button
                  className="dropdown-button"
                  style={{
                    // padding: "10px 20px",
                    // fontSize: "16px",
                    width: "100%",
                    backgroundColor: "#9a292f",
                    borderRadius: "5px",
                    color: "white",
                    textAlign: "center",
                    marginRight: "30px",
                  }}
                  onClick={() => toggleDropdownChat(product.name)}
                >
                  Chat with us
                </button>

                {dropdownStates[product.name] && (
                  <div
                    className="chat-dropdown"
                    style={{
                      position: "absolute",
                      top: "100%",
                      width: "110%",
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                      zIndex: 1,
                      borderRadius: "8px",
                      padding: "10px",
                      marginTop: "8px",
                      left: 0,
                      textAlign: "center",
                      marginRight: "30px",
                    }}
                  >
                    {chatOptions.map((option, idx) => (
                      <div
                        key={idx}
                        className="chat-message"
                        style={{
                          padding: "8px",
                          backgroundColor:
                            idx % 2 === 0 ? "#f0f0f0" : "#e0e0e0",
                          borderRadius: "12px",
                          marginBottom: "6px",
                          textAlign: idx % 1 === 0 ? "left" : "right",
                          height: "60px",
                          margin: "30px",
                          width: "100%",
                        }}
                      >
                        {option.message}
                      </div>
                    ))}
                    <button
                      className="more-options"
                      style={{
                        padding: "10px",
                        color: "#9A292F",
                        cursor: "pointer",
                        fontSize: "14px",
                        textAlign: "center",
                        fontWeight: "bold",
                        background: "none",
                        border: "none",
                      }}
                    >
                      +20 More Combos
                    </button>
                  </div>
                )}
              </div>
              {/* Add to Cart and Quantity Buttons */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                {cart[product.name] ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => decrementQuantity(product.name)}
                      style={{
                        padding: "5px 10px",
                        fontSize: "16px",
                        backgroundColor: "#9a292f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: "16px", margin: "0 10px" }}>
                      {cart[product.name]}
                    </span>
                    <button
                      onClick={() => incrementQuantity(product.name)}
                      style={{
                        padding: "5px 10px",
                        fontSize: "16px",
                        backgroundColor: "#9a292f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <Link to='/view'>
                  <button
                    onClick={() => addToCart(product.name)}
                    style={{
                      padding: "10px 20px",
                      fontSize: "16px",
                      width: "100%",
                      backgroundColor: "#9a292f",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    Add to Cart
                  </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      




    


       {/* Modal for Cart Notification */}
       <Modal
  show={showModals}
  onHide={() => setShowModals(false)}
  className="bottom-modal"
  style={{ marginTop: '400px' }}
  size="lg"
>
        <Modal.Body>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <p>Your item has been added to the cart.</p>
            </div>
            <div className="col-sm-6">
            <button className="custom-view-cart-btn" style={{height:"40px",width:"190px"}}>View Cart</button>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Shoponeview;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shoponeview.css"; // Import the CSS for styling
import Authuser from "../../Authetication/Authuser";

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("1 kg - (4 - 6 pcs approx.)");

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

  const getShopData = () => {
    fetch(`http://localhost:5001/api/shop/${id}`) // Using id directly in the API call
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle response errors
        }
        return response.json();
      })
      .then((data) => {
        setShop(data.data); // Set shop data here
        console.log(data); // Log fetched data for debugging
        // setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false); // Set loading to false on error
      });
  };

  useEffect(() => {
    getShopData();
  }, [id, token]); // Fetch data whenever id or token changes

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const productOptions = [
    { weight: "500 g", pieces: "2 - 4 pcs approx.", discount: "23% OFF", price: "₹189", originalPrice: "₹246" },
    { weight: "250 g", pieces: "1 - 2 pcs approx.", discount: "23% OFF", price: "₹99", originalPrice: "₹129" },
    { weight: "1 kg", pieces: "4 - 6 pcs approx.", discount: "23% OFF", price: "₹449", originalPrice: "₹584" }
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.weight + " - (" + option.pieces + ")");
    setShowDropdown(false); // Close dropdown after selection
  };


  return (
    <div className="container mt-5 shop-container">
      <div className="shop-header">
        {/* <img src={shop.shopImage} alt={shop.shopName} className="shop-img" /> */}
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
          {products && Array.isArray(products) ? (
            products.map((product, index) => (
              <Link to={`/product/${index}`}>
                {" "}
                {/* Pass unique index as ID */}
                <div key={product.name} className="product-card">
                  <img src={product.img} alt={product.name} />
                  <h5>{product.name}</h5>
                  <p
                    className="no-underline"
                    style={{ backgroundColor: "#9a292f", height: "40px" }}
                  >
                    {product.price}
                  </p>
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button
                      onClick={handleAddToCart}
                      style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        width: "20",
                        backgroundColor: "#9a292f",
                        borderRadius: "5px",
                      }}
                    >
                      Add to Cart
                    </button>
                    {/* <p>Items in Cart: {cartCount}</p> */}
                  </div>
                  {/* <div
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      position: "relative",
                      width: "200px",
                    }}
                  >
                    <button
                      onClick={toggleDropdown}
                      style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        width: "100%",
                      }}
                    >
                      {selectedOption} ▼
                    </button>

                    {showDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50px",
                          width: "100%",
                          backgroundColor: "white",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                          zIndex: 1,
                        }}
                      >
                        {productOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                              padding: "10px",
                              cursor: "pointer",
                              borderBottom: "1px solid #e0e0e0",
                            }}
                          >
                            <div
                              style={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              {option.weight} - ({option.pieces})
                            </div>
                            <div style={{ color: "green", fontSize: "12px" }}>
                              {option.discount}
                            </div>
                            <div style={{ fontSize: "14px" }}>
                              <span style={{ color: "black" }}>
                                {option.price}
                              </span>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "gray",
                                  marginLeft: "8px",
                                }}
                              >
                                {option.originalPrice}
                              </span>
                            </div>
                          </div>
                        ))}
                        <div
                          style={{
                            padding: "10px",
                            color: "#007bff",
                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                        >
                          +20 More Combos
                        </div>
                      </div>
                    )}
                  </div> */}
                </div>
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shoponeview;

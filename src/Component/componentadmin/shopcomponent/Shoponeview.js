import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shoponeview.css";
import Authuser from "../../Authetication/Authuser";

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [dropdownStates, setDropdownStates] = useState({}); // Track dropdown visibility for each product

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

  const productOptions = [
    { weight: "500 g", pieces: "2 - 4 pcs approx.", discount: "23% OFF", price: "₹189", originalPrice: "₹246" },
    { weight: "250 g", pieces: "1 - 2 pcs approx.", discount: "23% OFF", price: "₹99", originalPrice: "₹129" },
    { weight: "1 kg", pieces: "4 - 6 pcs approx.", discount: "23% OFF", price: "₹449", originalPrice: "₹584" }
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
  const toggleDropdown = (productName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [productName]: !prevStates[productName],
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
              {shop.availability?.serviceAvailable ? "Service available" : "Service not available"}
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
        <h2 className="section-title" style={{ color: "#9a292f", fontWeight: "bold", fontSize: "35px", fontStyle: "italic", paddingTop: "20px", marginBottom: "20px" }}>
          Products
        </h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.img} alt={product.name} />
              <h5>{product.name}</h5>
              <p className="no-underline" style={{ backgroundColor: "#9a292f", height: "40px" }}>
                {product.price}
              </p>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  onClick={() => toggleDropdown(product.name)}
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
              </div>
              {dropdownStates[product.name] && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                    zIndex: 1,
                    borderRadius: "8px",
                    padding: "10px",
                    marginTop: "8px",
                  }}
                >
                  {productOptions.map((option, idx) => (
                    <div key={idx} className="dropdown-option" style={{ padding: "8px 0", display: "flex", justifyContent: "space-between" }}>
                      <span>{option.weight} - {option.pieces}</span>
                      <span>{option.price}</span>
                    </div>
                  ))}
                  <div style={{ padding: "10px", color: "#007bff", cursor: "pointer", fontSize: "14px", textAlign: "center", fontWeight: "bold" }}>
                    +20 More Combos
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoponeview;

import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./Shoponeview.css";
import Authuser from "../../Authetication/Authuser";
import { borderRadius, width } from "@mui/system";

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [dropdownStates, setDropdownStates] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const viewCart = () => {
    // Generate a string representation of the cart showing product names and prices
    const cartItems = cart
      .map((item) => `${item.name} - ₹${item.price}`)
      .join("\n");

    alert("Viewing Cart:\n" + cartItems);
  };

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

  const styles = {
    cardContainer: {
      display: "flex",
      flexWrap: "wrap", // Allows wrapping of cards into multiple rows
      justifyContent: "space-between", // Distributes cards evenly
      gap: "20px", // Adds space between cards
    },
    card: {
      width: "300px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      margin: "20px auto",
      // position: "relative",
      backgroundColor: "#fff",
      padding: "30px",
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
      borderRadius: "5px",
    },
    label: {
      backgroundColor: "#a12030",
      color: "#fff",
      padding: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      position: "relative",
      borderRadius: "5px",
      height: "38px",
    },
    controls: {
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      width: "250px",
    },
    dropdown: {
      width: "300px", // Sets a fixed width
      padding: "8px", // Adds inner padding for better appearance
      fontSize: "14px", // Sets font size for readability
      border: "1px solid #ccc", // Adds a subtle border
      borderRadius: "5px", // Rounds the corners
      backgroundColor: "#f9f9f9", // Light background for a clean look
      color: "#333", // Text color
      outline: "none", // Removes default focus outline
      cursor: "pointer", // Indicates interactivity
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
      transition: "border-color 0.3s ease", // Smooth border transition
    },
    button: {
      flex: "1",
      backgroundColor: "#a12030",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      fontSize: "14px",
      cursor: "pointer",
      // marginBottom:"10px"
    },
  };

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Chicken",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/11/TT/VP/LJ/30115384/product-jpeg-500x500.jpg",
      prices: {
        "250 gm": 100,
        "500 gm": 180,
        "750 gm": 250,
        "1 kg": 320,
      },
    },
    {
      id: 2,
      name: "Fish",
      image:
        "https://media.istockphoto.com/id/1393004403/photo/lots-of-rohu-fish-labeo-rohita-fish-arranged-in-line-in-indian-fish-market-rui-fish-sale-in.jpg?s=612x612&w=0&k=20&c=6i3EoHSBy7O0iaRuigxUPxJp9IfprTFMzsDBHo_HlAU=",
      prices: {
        "250 gm": 120,
        "500 gm": 220,
        "750 gm": 300,
        "1 kg": 400,
      },
    },
    {
      id: 3,
      name: "Mutton",
      image:
        "https://i0.wp.com/legpiece.in/wp-content/uploads/2021/05/Mutton-Curry-Cut.jpg?fit=640%2C640&ssl=1",
      prices: {
        "250 gm": 200,
        "500 gm": 360,
        "750 gm": 500,
        "1 kg": 640,
      },
    },
    {
      id: 4,
      name: "Egg",
      image:
        "https://media.istockphoto.com/id/520889612/photo/boiled-eggs-in-bowl.jpg?s=612x612&w=0&k=20&c=wwes11nnPnZu7IFz6SSSjhsfoBK-ZcTFsqH9Em72ClA=",
      prices: {
        "250 gm": 200,
        "500 gm": 360,
        "750 gm": 500,
        "1 kg": 640,
      },
    },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = { quantity: 1, weight: "250 gm" };
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, type) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (type === "increment") {
        if (updatedQuantities[productId].quantity < 6) {
          updatedQuantities[productId].quantity += 1;
        }
      } else if (type === "decrement") {
        if (updatedQuantities[productId].quantity > 1) {
          updatedQuantities[productId].quantity -= 1;
        }
      }
      return updatedQuantities;
    });
  };
  

  const handleWeightChange = (productId, weight) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], weight },
    }));
  };

  const handleAddToCart = (product) => {
    const { weight, quantity } = quantities[product.id];
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      weight,
      quantity,
      price: product.prices[weight] * quantity,
    };

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === item.id && p.weight === item.weight
      );
      if (existingProductIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingProductIndex].quantity += item.quantity;
        newCart[existingProductIndex].price += item.price;
        return newCart;
      }
      return [...prevCart, item];
    });
  };

  const handleViewCart =()=>{
    navigate("/viewcart",{state:{cart}})
  }

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
          placeholder="Search For The Products You Love..."
          style={{fontWeight:"bold"}}
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
            textAlign: "center",
          }}
        >
          Products
        </h2>

        <div className="row">
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h5 style={{ fontWeight: "bold" }}>{product.name}</h5>
                <select
                  value={quantities[product.id].weight}
                  onChange={(e) =>
                    handleWeightChange(product.id, e.target.value)
                  }
                >
                  {Object.keys(product.prices).map((weight) => (
                    <option key={weight} value={weight}>
                      {weight} - ₹{product.prices[weight]}
                    </option>
                  ))}
                </select>
                <div className="quantity-section">
            <button
              style={{
                backgroundColor: "#9a292f",
                borderRadius: "5px",
                color: "white",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                handleQuantityChange(product.id, "decrement")
              }
              disabled={quantities[product.id].quantity === 1}
            >
              -
            </button>
            <span style={{ margin: "0 10px" }}>
              {quantities[product.id].quantity}
            </span>
            <button
              style={{
                backgroundColor: "#9a292f",
                borderRadius: "5px",
                color: "white",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                handleQuantityChange(product.id, "increment")
              }
              disabled={quantities[product.id].quantity === 6}
            >
              +
            </button>
          </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* style={{
                  backgroundColor: "#9a292f",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  width: "200px",
                  color: "#fff",
                }} */}
          {cart.length > 0 && (
            <div className="cart-section">
              <p style={{ marginRight: "20px" }}>{cart.length} Item(s) Added</p>
             <button onClick={handleViewCart}>View Cart</button>
            </div>
          )}
  

          {showCart && (
            <div className="cart-details">
              <h4>Cart Details</h4>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          
        </div>
      </div>

      {/* Popup */}
      {/* {popupVisible && (
        <div className="popup">
          <p>
            {addedProduct.name} has been added to your cart for ₹
            {addedProduct.price}!
          </p>
          <Link to="/viewcart">
            {" "}
            <button onClick={viewCart} className="view-cart-button">
              View Cart
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Shoponeview;

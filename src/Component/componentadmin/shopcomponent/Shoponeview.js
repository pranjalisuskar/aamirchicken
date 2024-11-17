import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shoponeview.css";
import Authuser from "../../Authetication/Authuser";

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [dropdownStates, setDropdownStates] = useState({}); 
  const [cart, setCart] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState("");


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


  const toggleDropdownChat = (productName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [productName]: !prevStates[productName],
    }));
  };

  const addToCart = (productName, price) => {
    // Add product to the cart with name and price
    setCart((prevCart) => {
    // Ensure prevCart is always an array
    const updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];
    updatedCart.push({ name: productName, price });
    return updatedCart;
  });
    // Set the added product's name and price to display in the popup
    setAddedProduct({ name: productName, price });

    // Show the popup
    setPopupVisible(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  };

  const viewCart = () => {
    // Generate a string representation of the cart showing product names and prices
    const cartItems = cart
      .map((item) => `${item.name} - ₹${item.price}`)
      .join("\n");

    alert("Viewing Cart:\n" + cartItems);
  };






  chatOptions.forEach((option) => {
    console.log(option.message); // Display the message
    console.log(option.buttonLabel); // Add button functionality here
  });

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
  // const toggleDropdownChat = (productName) => {
  //   setDropdownStates((prevStates) => ({
  //     ...prevStates,
  //     [productName]: !prevStates[productName],
  //   }));
  // };

  // // Add product to cart or increase its quantity
  // const addToCart = (productName) => {
  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     [productName]: prevCart[productName] ? prevCart[productName] + 1 : 1,
  //   }));
  // };

  // Increase quantity of a product in the cart
  const incrementQuantity = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: prevCart[productName] + 1,
    }));
  };

  // Decrease quantity of a product in the cart
  const decrementQuantity = (productName) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[productName] - 1;
      if (newQuantity > 0) {
        return { ...prevCart, [productName]: newQuantity };
      } else {
        const { [productName]: _, ...restCart } = prevCart;
        return restCart;
      }
    });
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
            textAlign: "center",
          }}
        >
          Products
        </h2>
        <div className="products">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h5>{product.name}</h5>
            <button
              className="dropdown-button"
              onClick={() => toggleDropdownChat(product.name)}
            >
              Select Options
            </button>

            {dropdownStates[product.name] && (
              <div className="chat-dropdown">
                {chatOptions.map((option, idx) => (
                  <div key={idx} className="chat-option">
                    <div className="option-message">{option.message}</div>
                    <div
                      className="option-button"
                      onMouseEnter={() =>
                        console.log(`Hovered on: ${option.buttonLabel}`)
                      }
                    >
                      <button
                        onClick={() => addToCart(product.name, option.price)} // Add to cart with price
                        className="add-to-cart-button"
                      >
                        {option.buttonLabel}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="popup">
          <p>
            {addedProduct.name} has been added to your cart for ₹
            {addedProduct.price}!
          </p>
          <Link to='/viewcart'> <button onClick={viewCart} className="view-cart-button">
            View Cart
          </button></Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default Shoponeview;

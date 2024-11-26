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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BeNXwduRlVooIfmtYmQNM_mLLuLdWxfGRHvu8lZljLcpHwNhBX7O30rJ4-JyEhJTX78&usqp=CAU",
      price: 249,
    },
    {
      name: "Chicken",
      img: "https://i2.wp.com/mamaloli.com/wp-content/uploads/2012/02/kungpao-04.jpg",
      price: 449,
    },
    {
      name: "Fish",
      img: "https://st4.depositphotos.com/1068090/39894/i/450/depositphotos_398948462-stock-photo-fresh-raw-fish-rudd-isolated.jpg",
      price: 249,
    },
    {
      name: "Mutton",
      img: "https://t4.ftcdn.net/jpg/02/66/03/21/360_F_266032107_lre5ZWBTTVJmMvYWyf3zYdb40QhBYDGA.jpg",
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
        {/* <div className="products">
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
      </div> */}


<div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
  {products.map((product) => (
    <div
      key={product.name}
      className="product-card"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        width: "250px",
        padding: "15px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        className="product-img"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h5 style={{ fontSize: "18px", margin: "10px 0", fontWeight: "bold", color: "#333" }}>
        {product.name}
      </h5>
      <div
        className="product-details"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: "bold", color: "#9a292f" }}>
          ₹{product.price}
        </span>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product.name, product.price)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#fc8019",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            width:"100px",
            backgroundColor:"#9a292f"

          }}
        >
          Add to Cart
        </button>
      </div>
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

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shoponeview.css";
import Authuser from "../../Authetication/Authuser";
import { borderRadius, width } from "@mui/system";

const Shoponeview = () => {
  const { token } = Authuser();
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [dropdownStates, setDropdownStates] = useState({});
  const [cart, setCart] = useState([]); 
  const [popupVisible, setPopupVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState("");

  const [quantity, setQuantity] = useState("");



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
  const productData = {
    "1kg": { price: 249, originalPrice: 324 },
    "750g": { price: 200, originalPrice: 300 },
    "500g": { price: 150, originalPrice: 250 },
    "250g": { price: 100, originalPrice: 200 },
  };


  const handleAddToCart = () => {
    if (quantity) {
      const selectedProduct = productData[quantity];
      const cartItem = {
        quantity,
        price: selectedProduct.price,
        originalPrice: selectedProduct.originalPrice,
      };
      setCart((prevCart) => [...prevCart, cartItem]); // Add new item to the cart
      alert(`Added ${quantity} to the cart`);
    } else {
      alert("Please select a quantity");
    }
  };


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
padding:"30px"
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
      borderRadius:"5px"
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
      width:"250px"
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
       
       <div style={styles.cardContainer}>

      <div style={styles.card}>
        <img
          src="https://packmymeat.com/wp-content/uploads/2022/11/20230726_020541-jpg.webp"
          alt="Chicken"
          style={styles.image}
        />
        <div style={styles.label}>Chicken</div>
        <div style={styles.controls} >
   
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={styles.dropdown}
          >
            <option value="1kg">1 kg - ₹249 (₹324)</option>
            <option value="750g">750 gm - ₹200 (₹300)</option>
            <option value="500g">500 gm - ₹150 (₹250)</option>
            <option value="250g">250 gm - ₹100 (₹200)</option>
          </select>
        </div>

      
        {/* Price Display */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          {quantity && (
            <>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#a12030",
                  marginRight: "10px",
                }}
              >
                ₹{productData[quantity].price}
              </p>
              <p
                style={{
                  textDecoration: "line-through",
                  fontSize: "15px",
                  color: "#999",
                }}
              >
                ₹{productData[quantity].originalPrice}
              </p>
            </>
          )}
        </div>


        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            justifyContent: "center",
          }}
        >
         
        </div>
        <button onClick={handleAddToCart} style={styles.button}>
          Add to Cart
        </button>
      </div>
      {/* Cart Summary */}
      {/* <div style={{ marginTop: "30px" }}>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.quantity} - ₹{item.price} (Original Price: ₹{item.originalPrice})
            </li>
          ))}
        </ul>
      </div> */}
    </div>

      {/* Card 2 */}
 
      
      {/* You can add more cards here following the same pattern */}
    </div>

        {/* Popup */}
        {popupVisible && (
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
        )}
      </div>
    
  );
};

export default Shoponeview;

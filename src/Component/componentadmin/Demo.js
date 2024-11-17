import React, { useState } from "react";
import "./Demo.css"; // Ensure custom styles are applied

const Demo = () => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [cart, setCart] = useState([]);
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
    setCart((prevCart) => [...prevCart, { name: productName, price }]);

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

  return (
    <div className="products-section">
      <h2>Products</h2>
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
          <button onClick={viewCart} className="view-cart-button">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Demo;

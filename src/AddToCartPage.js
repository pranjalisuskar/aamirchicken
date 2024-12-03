import React, { useState } from 'react';

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Chicken',
      image: 'https://via.placeholder.com/150',
      prices: {
        '250 gm': 100,
        '500 gm': 180,
        '750 gm': 250,
        '1 kg': 320,
      },
    },
    {
      id: 2,
      name: 'Mutton',
      image: 'https://via.placeholder.com/150',
      prices: {
        '250 gm': 200,
        '500 gm': 360,
        '750 gm': 500,
        '1 kg': 640,
      },
    },
    {
      id: 3,
      name: 'Fish',
      image: 'https://via.placeholder.com/150',
      prices: {
        '250 gm': 120,
        '500 gm': 220,
        '750 gm': 300,
        '1 kg': 400,
      },
    },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = { quantity: 1, weight: '250 gm' };
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, type) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      if (type === 'increment' && newQuantities[productId].quantity < 6) {
        newQuantities[productId].quantity += 1;
      } else if (type === 'decrement' && newQuantities[productId].quantity > 1) {
        newQuantities[productId].quantity -= 1;
      }
      return newQuantities;
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

  return (
    <div className="add-to-cart-page">
      <h1>Product Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <select
              value={quantities[product.id].weight}
              onChange={(e) => handleWeightChange(product.id, e.target.value)}
            >
              {Object.keys(product.prices).map((weight) => (
                <option key={weight} value={weight}>
                  {weight} - ₹{product.prices[weight]}
                </option>
              ))}
            </select>
            <div className="quantity-section">
              <button
                onClick={() => handleQuantityChange(product.id, 'decrement')}
                disabled={quantities[product.id].quantity === 1}
              >
                -
              </button>
              <span>{quantities[product.id].quantity}</span>
              <button
                onClick={() => handleQuantityChange(product.id, 'increment')}
                disabled={quantities[product.id].quantity === 6}
              >
                +
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-section">
          <p>{cart.length} item(s) added</p>
          <button onClick={() => setShowCart(true)}>View Cart</button>
        </div>
      )}

      {showCart && (
        <div className="cart-details">
          <h4>Cart Details</h4>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
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
  );
};

export default AddToCartPage;
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const shopsData = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s",
    name: "Egg",
    price: "144/500gm",
    rating: 4,
  },
  {
    img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
    name: "Chicken",
    price: "144/500gm",
    rating: 5,
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/92/77/85/360_F_292778539_JeGMFXajaQtXpq5nRZLo87suJZkqJ7oS.jpg",
    name: "Chicken Wing",
    price: "144/500gm",
    rating: 3,
  },
  {
    img: "https://newzealandfresh.sg/cdn/shop/products/Screen_Shot_2018-08-14_at_12.16.53_AM_grande.png?v=1563071603",
    name: "Boneless chicken",
    price: "144/500gm",
    Address: "Available in your Kolhapur",
    full: "1 Full chicken is provided",
    detail: "Premium chicken - 1 Full chicken curry cut (Skinless)",
    total: "318",
    rating: 4,
  },
];

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

function Productdetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const shopIndex = parseInt(productId);
  const shop = shopsData[shopIndex];

  if (!shop) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, shop]);
    setShowModal(true); // Show the modal when the item is added
  };

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="container mt-5">
      <div className="shop-header">
        <img src={shop.img} alt={shop.name} className="shop-img" />
        <div className="shop-info">
          <h1 className="shop-name">{shop.name}</h1>
          <p>Address: {shop.Address || "Not available"}</p>
          <h5>Detail: {shop.detail || "No details available"}</h5>
          <p>Plate: {shop.full || "No info"}</p>
          <p>Price: {shop.price}</p>
          <p>Rating: {shop.rating} <i className="fas fa-star text-warning"></i></p>
          <p>{shop.total}</p>
          <button onClick={addToCart} className="submit-button">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar text-center mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search for the products you love"
        />
      </div>

      {/* Products section */}
      <div className="products-section">
        <h2 className="section-title">Products</h2>
        <div className="products">
          {products && Array.isArray(products) ? (
            products.map((product,index) => (
              <Link to={`/product/${index}`}> {/* Pass unique index as ID */}
              <div key={product.name} className="product-card" onClick={() => handleProductClick(product.name)}>
                <img src={product.img} alt={product.name} />
                <h5>{product.name}</h5>
                <p>{product.price}</p>
              </div>
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      {/* Modal for Cart Notification */}
      <Modal
  show={showModal}
  onHide={() => setShowModal(false)}
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
}

export default Productdetails;

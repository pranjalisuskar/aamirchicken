import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Shoponeview.css'; // Import the CSS for styling
import Authuser from '../../Authetication/Authuser';

const Shoponeview = () => {
  const {  token } = Authuser();
  const { id } = useParams(); // Get the shop id from the URL
  const [shop, setShop] = useState({}); // Set initial state to an empty object
  // const [loading, setLoading] = useState(true); // Track loading state

  const shopsData = [
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Balaji Chicken",
      rating: 4.7,
      address: "Balaji park, mhada colony, Kolhapur, Maharashtra",
      pincode: "ZB53S7H",
      availability: { serviceAvailable: true, serviceNotAvailable: false },
      reviews: 31,
      products: [
        { name: 'Egg', price: '100 / 10 p', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s' },
        { name: 'Chicken', price: '144 / 500gm', img: 'https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg' },
        { name: 'Chicken Wing', price: '144 / 500gm', img: 'https://t4.ftcdn.net/jpg/02/92/77/85/360_F_292778539_JeGMFXajaQtXpq5nRZLo87suJZkqJ7oS.jpg' },
        { name: '1 Full Chicken Curry Cut', price: '144 / 500gm', img: 'https://newzealandfresh.sg/cdn/shop/products/Screen_Shot_2018-08-14_at_12.16.53_AM_grande.png?v=1563071603' },
      ]
    },
    // Add more shops if necessary
  ];
  

  const getShopData = () => {
    fetch(`http://localhost:5001/api/shop/${id}`) // Using id directly in the API call
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle response errors
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

  // if (loading) {
  //   return <div>Loading...</div>; // Display a loading state while data is being fetched
  // }

  return (
    <div className="container mt-5 shop-container">
        <div className="shop-header">
            <img src={shop.shopImage} alt={shop.shopName} className="shop-img" />
            <div className="shop-info">
                <h1 className="shop-name"> {shop.shopName || 'N/A'}</h1>
                <p>Address: {shop.address || 'N/A'}</p>
                <p>Pincode: {shop.pincode || 'N/A'}</p>
                <div className="shop-status">
                    <span className="status-available">
                        {shop.availability?.serviceAvailable ? 'Service available' : 'Service not available'}
                    </span>
                    <span className="shop-rating">
                        <strong>{shop.rating || 'N/A'}</strong>
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
  <h2 className="section-title">Products</h2>
  <div className="products">
    {shop.products && shop.products.length > 0 ? (
      shop.products.map((product) => (
        <div key={product.name} className="product-card">
          <img src={product.img} alt={product.name} />
          <h5>{product.name}</h5>
          <p>{product.price}</p>
        </div>
      ))
    ) : (
      <p>No products available</p>
    )}
  </div>
</div>

    </div>
);

}

export default Shoponeview;

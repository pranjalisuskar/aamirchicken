import React, { useState } from "react";
import axios from "axios";

const ProductAdd = () => {
  // Initialize productData with image_url as an empty array
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    category: "",
    file: [], // Ensure it's an array for image files
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle input changes for text fields
  const onInputChange = (e) => {
    const { name, value,type, files  } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    // Handle image file changes
    const handleImageChange = (e) => {
      const files = e.target.files;
  
      if (files.length > 0) {
        setProductData((prevData) => ({
          ...prevData,
          image_url: Array.from(files), // Convert FileList to array
        }));
  
        const imagePreviews = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        setImagePreviews(imagePreviews);
      }
    };
  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Declare and initialize formData properly
    const formData = new FormData();
    formData.append("productName", productData.productName);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
  
    // Check if image_url is an array and append files correctly
    if (Array.isArray(productData.image_url) && productData.image_url.length > 0) {
      productData.image_url.forEach((file) => {
        formData.append("image_url", file);
      });
    }
  
    try {
      const response = await fetch("http://localhost:5001/api/product/create", {
        method: "POST",
        headers: {
          // Content-Type should not be set when sending FormData, it will be set automatically by the browser
        },
        body: formData, // FormData goes as the request body
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Product added successfully!");
      } else {
        console.error("Error adding product:", response.statusText);
        alert("There was an error adding the product. Please try again.");
      }
    } catch (error) {
      console.error("Network error adding product:", error);
      alert("There was an error adding the product. Please try again.");
    }
  };
  

  return (
    <div className="container shopform-container">
      <h2 className="form-title">Product Information</h2>
      <form
        className="shopform"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="productName"
              placeholder="Product Name"
              value={productData.productName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="price"
              placeholder="Product Price"
              value={productData.price}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="category"
              placeholder="Product Category"
              value={productData.category}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <button
              type="button"
              onClick={() => document.getElementById("shopImages").click()}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#7a2226",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                border: "none",
              }}
            >
              Choose Images
            </button>
            <input
              type="file"
              id="shopImages"
              name="image_url"
              multiple
              className="form-control-file"
              onChange={(e) => handleImageChange(e)}
              style={{ display: "none"}}
            />
            <div className="image-preview-container mt-3">
              {imagePreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`preview-${index}`}
                  className="image-preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    margin: "5px",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;

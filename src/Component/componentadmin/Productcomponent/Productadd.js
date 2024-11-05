import React, { useState } from 'react'
import '../shopcomponent/Addshop.css'

const Productadd = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    shop_id: '',
    product_name:'',
    description: '',
    price: '',
    category: '',
    image_url: [] // Array to store images
  });

  // Update form data state on input change
  const onInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: Array.from(files) }); // Corrected to store all files in an array
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append each key-value to the FormData object
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach(file => data.append(key, file)); // Append each file
      } else {
        data.append(key, formData[key]);
      }
    }

    // Make API call
    fetch('http://localhost:5001/api/products', {
      method: 'POST',
      body: data,
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status === 403 ? 'Access Denied' : `HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert('Added successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(`Error: ${error.message}`);
      });
  };

  // State for image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  // Update image previews on file change
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const previews = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        previews[index] = reader.result; // Store preview in array
        if (previews.length === files.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="container shopform-container">
      <h2 className="form-title">Product Information</h2>
      <form className="shopform" encType="multipart/form-data" onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="productName"
              placeholder="Product Name"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="price"
              placeholder="Product Price"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="category"
              placeholder="Product Category"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <button
              type="button"
              onClick={() => document.getElementById('shopImages').click()}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#7a2226",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                border: "none"
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
              onChange={(e) => { handleImageChange(e); onInputChange(e); }} // Combine change handlers
              style={{ display: "none" }}
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
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default Productadd;

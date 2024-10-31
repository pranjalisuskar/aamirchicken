import React, { useState } from 'react'
import '../shopcomponent/Addshop.css'

const Productadd = () => {

  // const [imagePreviews, setImagePreviews] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const previews = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        previews.push(reader.result);
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
      <form className="shopform" encType="multipart/form-data" >
        <div className="row">
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="productName"
              placeholder="Product Name"
            //   onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name=" "
              placeholder=" Product price "
            //   onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name=" "
              placeholder="Product category"
            //   onChange={onInputChange}
            />
          </div>
          {/* <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="pincode"
              placeholder="Pincode"
            //   onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="mobileNumber"
              placeholder="Mobile No"
            //   onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="email"
              name="emailAddress"
              placeholder="Email Address"
            //   onChange={onInputChange}
            />
          </div> */}
      <div className="form-group col-md-6 custom-input">
  <button
    type="button"
    onClick={() => document.getElementById('shopImages').click()} // Trigger file input click
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
    name="shopImages"
    multiple
    className="form-control-file"
    onChange={handleImageChange}
    style={{ display: "none" }} // Hide the file input
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
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Productadd
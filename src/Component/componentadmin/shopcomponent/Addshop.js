import React, { useState } from 'react';
import './Addshop.css';

const Addshps = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    shopLocation: '',
    address: '',
    street: '',
    pincode: '',
    mobileNumber: '',
    emailAddress: '',
    shopImages: [] // Array to store images
  });

  const onInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        for (let i = 0; i < formData[key].length; i++) {
          data.append(key, formData[key][i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    fetch('http://localhost:5001/api/shop/create', {
      method: 'POST',
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
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

  return (
    <div className="container shopform-container">
      <h2 className="form-title">Shop Information</h2>
      <form className="shopform" onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={onInputChange}
              placeholder="Shop Name"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="shopLocation"
              value={formData.shopLocation}
              onChange={onInputChange}
              placeholder="Shop Location"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={onInputChange}
              placeholder="Address"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={onInputChange}
              placeholder="Pincode"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={onInputChange}
              placeholder="Mobile No"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={onInputChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group col-12 custom-input">
            <input
              type="file"
              id="shopImages"
              name="file"
              multiple
              className="form-control-file"
              onChange={onInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addshps;

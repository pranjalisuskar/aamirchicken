import React, { useState, useEffect } from "react";
// import "./Addshop.css";

const DeliveryboyForm = () => {
  const [shopOwners, setShopOwners] = useState([]);
  const [formData, setFormData] = useState({
    shopName: "",
    shopLocation: "",
    address: "",
    street: "",
    pincode: "",
    mobileNumber: "",
    emailAddress: "",
    file: [], // Array to store images
  });

  const onInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     for (const key in formData) {
//       if (Array.isArray(formData[key])) {
//         for (let i = 0; i < formData[key].length; i++) {
//           data.append(key, formData[key][i]);
//         }
//       } else {
//         data.append(key, formData[key]);
//       }
//     }

//     console.log(data);

//     fetch("http://localhost:5001/api/shop/create", {
//       method: "POST",
//       body: data,
//       headers: {
//         "x-auth-token": localStorage.getItem("token"),
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           if (res.status === 403) {
//             throw new Error(`Access Denied`);
//           } else {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         alert("Added successfully");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert(`Error: ${error.message}`);
//       });
//   };

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await fetch("http://localhost:5001/api/users/Shop-Owner", {
//         method: "GET",
//         headers: {
//           "x-auth-token": localStorage.getItem("token"),
//         },
//       })
//         .then((res) => {
//           if (!res.ok) {
//             if (res.status === 403) {
//               throw new Error(`Access Denied`);
//             } else {
//               throw new Error(`HTTP error! status: ${res.status}`);
//             }
//           }
//           return res.json();
//         })
//         .then((data) => {
//           // console.log(data);
//           setShopOwners(data);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert(`Error: ${error.message}`);
//         });
//     }

//     fetchMyAPI();
//   }, []);

  console.log(shopOwners);

  return (
    <div className="container shopform-container" style={{marginBottom:"70px"}}>
      <h2
        className="form-title"
        style={{ fontWeight: "bold", color: "#9a292f" }}
      >
        Delivery Boy Information
      </h2>
      <form className="shopform" >
        <div className="row">
          {/* Add Shopowner DD here */}
          <div className="form-group col-md-6 custom-input">
            <input
              style={{fontWeight:"bold"}}
              className="form-control triangle-input"
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={onInputChange}
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              style={{fontWeight:"bold"}}
              className="form-control triangle-input"
              type="text"
              name="shopLocation"
              value={formData.shopLocation}
              onChange={onInputChange}
              placeholder="Enter Vehicle Type"
              required
            />
          </div>
          {/* <div
            className="form-group col-md-6 custom-input"
            style={{ paddingTop: "5px" }}
          >
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="address"
              value={formData.address}
              onChange={onInputChange}
              placeholder="Enter Shop Address"
              required
            />
          </div> */}
            <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={onInputChange}
              placeholder="Enter Vehicle Number"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={onInputChange}
              placeholder="Enter Your Pincode"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={onInputChange}
              placeholder="Enter Contact Number"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={onInputChange}
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              style={{fontWeight:"bold"}}
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={onInputChange}
              placeholder="Enter Emergency Number"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              style={{fontWeight:"bold"}}
              className="form-control triangle-input"
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={onInputChange}
              placeholder="Enter National ID/Passport"
              required
            />
          </div>
          <div className="form-group custom-input d-flex align-items-center">
            {/* <input
              style={{
                width: "40%", 
                height: "40px", 
                padding: "10px", 
                borderRadius: "5px", 
                border: "1px solid #ccc", 
              }}
              type="file"
              id="file"
              name="file"
              multiple
              className="form-control-file"
              onChange={onInputChange}
              required
            /> */}
            <button
              type="submit"
              className="submit-button"
              style={{
                marginLeft: "510px",

                width: "10%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#9a292f",
                color: "#fff",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* <button type="submit" className="submit-button">
              Submit
            </button> */}

     
    </div>
  );
};

export default DeliveryboyForm;

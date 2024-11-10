import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Login from "../Authetication/Loginr";
import Authuser from "../Authetication/Authuser";

const Header = () => {
  const [userDetails, setuserDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [showCityModal, setShowCityModal] = useState(false);

  const [modalStates, setModalStates] = useState(false);

  const handleCloseCity = () => setShowCityModal(false);
  const handleShowCity = () => setShowCityModal(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userDetails");
    if (storedUserName) {
      console.log(storedUserName);
      setuserDetails(JSON.parse(storedUserName));
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleSignIn = () => {
    setModalStates((prev) => !prev);
  };

  
  // Handle logout functionality
  // const handleLogout = async () => {
  //   try {
  //     console.log("Logging out...");
      
  //     // Send the logout request to the backend
  //     const response = await fetch("http://localhost:5001/api/user/logout/current-user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",  // Ensure cookies are included in the request if using cookies for session
  //     });
      
  //     // Check if the logout request was successful
  //     if (response.ok) {
  //       console.log("Logout successful");
        
  //       // Clear user data from localStorage or sessionStorage
  //       localStorage.removeItem("userDetails");
  //       sessionStorage.removeItem("token");
  //       setuserDetails(null); // Clear user details from the state

  //       // Show a success message or alert
  //       alert("You have successfully logged out.");
        
  //       // Redirect user to the homepage after logout
  //       navigate("/");  // Redirect to the home page after logout
  //     } else {
  //       // Handle the error case from the backend
  //       const errorData = await response.json();
  //       alert(`Logout failed: ${errorData.message || 'Unknown error'}`);
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //     alert("An error occurred during logout. Please try again.");
  //   }
  // };



  return (
    <div className="page-content">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo and Name */}
            <Link className="navbar-brand d-flex align-items-center" to="#">
              <img
                src="https://t3.ftcdn.net/jpg/06/55/69/72/360_F_655697217_GclwFgFfhS8Tw1V3dRbplhWKouXgQ9SL.jpg"
                alt="Logo"
                className="logo"
                style={{ alignItems: "center", height: "50PX" }}
              />
              <span className="ms-2">Amir Chicken</span>
            </Link>

            {/* Search Bar */}
            <div className="mx-auto d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                style={{
                  width: "400px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              />
            </div>

            {/* Product and My Account Buttons */}
            &nbsp;
            <div className="d-flex align-items-center custom-nav">
              {/* Location Link */}
              <Link
                to="#"
                className="nav-link me-3"
                onClick={handleShowCity}
                style={{ marginRight: "1rem" }}
              >
                <i className="fa-solid fa-city me-1" /> Location
              </Link>

              {/* City Modal */}
              <Modal show={showCityModal} onHide={handleCloseCity}>
                <Modal.Header closeButton />
                <Modal.Body>
                  <p className="text-center">Choose Your Location</p>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search your city or pincode..."
                      aria-label="Search"
                      style={{
                        textAlign: "center",
                        width: "80%",
                        height: "8vh",
                        maxWidth: "400px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="d-flex justify-content-center w-100">
                    <Button
                      style={{
                        backgroundColor: "#9A292F",
                        width: "80%",
                        height: "8vh",
                        maxWidth: "400px",
                        borderRadius: "10px",
                      }}
                      onClick={() => alert("Search performed!")}
                    >
                      Submit
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>

              {/* Products Link */}
              <a
                href="/product"
                className="nav-link me-3"
                style={{ marginRight: "1rem" }}
              >
                <i className="fa-solid fa-box me-1" /> Products
              </a>

              {/* User Menu */}
              <div className="user-menu ms-auto">
                {userDetails ? (
                  <div
                    className="user-dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <span
                      className="user-name"
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                    >
                      <i className="fa-solid fa-user me-1" />{" "}
                      {userDetails.userName}
                    </span>
                    {showDropdown && (
                      <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">
                          <i className="fa-solid fa-user me-2" /> Profile
                        </Link>
                        <button
                          onClick={logOut}
                          className="dropdown-item"
                        >
                          <i className="fa-solid fa-sign-out-alt me-2" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                  to="#"
                  className="nav-link"
                  onClick={() => setModalStates((prev) => !prev)}
                  style={{ marginRight: "1rem" }}
                >
                  <i className="fa-solid fa-user me-1" /> Sign In
                </Link>
                
                )}
              </div>
            </div>
          </div>
        </nav>

        {modalStates === true ? (
          <Login
            modalStates={modalStates}
            setModalStates={() => {
              setModalStates(false);
            }}
          />
        ) : (
          ""
        )}
      </header>
    </div>
  );
};

export default Header;

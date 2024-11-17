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

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const [showCityModal, setShowCityModal] = useState(false);

  const handleCloseCity = () => setShowCityModal(false);
  const handleShowCity = () => setShowCityModal(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userDetails");
    if (storedUserName) {
      setuserDetails(JSON.parse(storedUserName));
    }
  }, []);

  const logOut = () => {
    // Clear user session
    localStorage.removeItem("authToken"); // Example for token-based authentication
    setuserDetails(null); // Reset user details to null
    navigate("/"); // Redirect to homepage or login page
  };

  const handleSignIn = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="page-content">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo and Name */}
            <Link className="navbar-brand d-flex align-items-center" to="#">
              <img
                src="/logo/logo.jpg"
                alt="Logo"
                className="logo"
                style={{ width: "80px", height: "50px",marginLeft:"30px" }}
              />

              {/* <span
                className="ms-2"
                style={{
                  fontWeight: "bold",
                  color: "#9A292F",
                  fontSize: "28px",
                  fontStyle: "italic",
                }}
              >
                Amir Chicken
              </span> */}
              <div style={{ marginLeft: "140px" }}>
                {/* Toggler for mobile */}
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbar-menu"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={toggleMobileMenu}
                >
                  <i className="fa fa-bars" />
                </button>
              </div>
            </Link>

            {/* Navbar items container */}
            <div
              className={`collapse navbar-collapse ${
                isMobileMenuOpen ? "show" : ""
              }`}
              id="navbar-menu"
            >
              <div
                className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start"
                style={{ marginLeft: "80px" }}
                
              >
                {/* Search Bar */}
                <input
                  className="form-control w-100"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                // step={{fontWeight:"bold",color:"#9a292f"}}
                />
                 {/* <i class="fas fa-search"></i> */}
              </div>

              {/* Navigation Links */}
              <div className="d-flex w-100 ">
                {/* Location Link */}
                <span
                  style={{ color: " #c62828", marginLeft: "300px",fontWeight:"bold" }}
                  to="#"
                  className=" me-3 "
                  onClick={handleShowCity}
                >
                  <i className="fa-solid fa-city me-1" /> Location
                </span>

                {/* City Modal */}
                <Modal show={showCityModal} onHide={handleCloseCity} centered>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <p
                      className="text-center"
                      style={{
                        fontSize: "20px",
                        color: "#9A292F",
                        fontWeight: "bold",
                      }}
                    >
                      Choose Your Location
                    </p>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Your Pincode"
                        aria-label="Search"
                        style={{ textAlign: "center", width: "550px", marginLeft:"32px" ,fontWeight:"bold"}}
                        maxLength="6"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          ); // Restrict non-numeric input
                        }}
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="d-flex justify-content-center w-100">
                      <Button
                        style={{
                          backgroundColor: "#9A292F",
                          border: "#9A292F",
                          height: "40px",
                          width: "385px",
                          marginRight: "20px",
                          fontWeight:"bold"
                        }}
                        className="btn-submit "
                        onClick={() => alert("Search performed!")}
                      >
                        Submit
                      </Button>
                    </div>
                  </Modal.Footer>
                </Modal>

                {/* User Menu */}
                <div
                  className="user-menu ms-auto"
                  style={{ marginRight: "20px" }}
                >
                  {userDetails ? (
                    <div
                      style={{ marginRight: "50px" }}
                      className="user-dropdown"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <span className="user-name">
                        <i className="fa-solid fa-user me-1" />{" "}
                        {userDetails.userName}
                      </span>
                      {showDropdown && (
                        <div className="dropdown-menu">
                          <Link to="/profile" className="dropdown-item">
                            <i className="fa-solid fa-user me-2" /> Profile
                          </Link>
                          <button onClick={logOut} className="dropdown-item">
                            <i className="fa-solid fa-sign-out-alt me-2" />{" "}
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span
                      style={{ color: "#c62828", paddingRight: "50px",fontWeight:"bold" }}
                      onClick={handleSignIn}
                    >
                      <i className="fa-solid fa-user me-1" /> Sign In
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Login Modal */}
        {isOpen && (
          <Login modalStates={isOpen} setModalStates={() => setIsOpen(false)} />
        )}
      </header>
    </div>
  );
};

export default Header;

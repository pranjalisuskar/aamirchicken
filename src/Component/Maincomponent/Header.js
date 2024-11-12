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
    setMobileMenuOpen(prevState => !prevState);
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
    localStorage.clear();
    navigate('/');
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
                src="https://t3.ftcdn.net/jpg/06/55/69/72/360_F_655697217_GclwFgFfhS8Tw1V3dRbplhWKouXgQ9SL.jpg"
                alt="Logo"
                className="logo"
              />
              <span className="ms-2">Amir Chicken</span>
            </Link>

            {/* Toggler for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbar-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <i className="fa fa-bars" />
            </button>

            {/* Navbar items container */}
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbar-menu">
              <div className="d-flex align-items-center w-100">
                {/* Search Bar */}
                <input
                // style={{marginleft:"50%"}}
                  className="form-control me-2 w-100"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{marginLeft: "50%"}}
                />
              </div>

              {/* Navigation Links */}
              <div className="d-flex align-items-center w-100 mt-2">
                {/* Location Link */}
                <span
                style={{color:" #c62828"}}
                  to="#"
                  className="nam me-3 "
                  onClick={handleShowCity}
                >
                  <i className="fa-solid fa-city me-1" /> Location
                </span>

                {/* City Modal */}
                <Modal show={showCityModal} onHide={handleCloseCity} centered>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <p className="text-center">Choose Your Location</p>
                    <div className="d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search your city or pincode..."
                        aria-label="Search"
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="d-flex justify-content-center w-100">
                      <Button
                        className="btn-submit"
                        onClick={() => alert("Search performed!")}
                      >
                        Submit
                      </Button>
                    </div>
                  </Modal.Footer>
                </Modal>

                {/* User Menu */}
                <div className="user-menu ms-auto">
                  {userDetails ? (
                    <div
                      className="user-dropdown"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <span className="user-name">
                        <i className="fa-solid fa-user me-1" /> {userDetails.userName}
                      </span>
                      {showDropdown && (
                       <div className="dropdown-menu">
                       <Link to="/profile" className="dropdown-item">
                         <i className="fa-solid fa-user me-2" /> Profile
                       </Link>
                       <button onClick={logOut} className="dropdown-item">
                         <i className="fa-solid fa-sign-out-alt me-2" /> Logout
                       </button>
                     </div>
                     
                      )}
                    </div>
                  ) : (
                    <span
                    style={{color:" #c62828"}}
                      to="#"
                      className=" nams"
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
          <Login
            modalStates={isOpen}
            setModalStates={() => setIsOpen(false)}
          />
        )}
      </header>
    </div>
  );
};

export default Header;

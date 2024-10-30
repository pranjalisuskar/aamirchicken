import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Authetication/Loginr'
const Header = () => {

    const [showCityModal, setShowCityModal] = useState(false);

    const [modalStates, setModalStates] = useState(false);
  
    const handleCloseCity = () => setShowCityModal(false);
    const handleShowCity = () => setShowCityModal(true);
  return (
    <div className='page-content'>
<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo and Name */}
            <Link className="navbar-brand d-flex align-items-center" to="#">
              <img
                src="https://t3.ftcdn.net/jpg/06/55/69/72/360_F_655697217_GclwFgFfhS8Tw1V3dRbplhWKouXgQ9SL.jpg"
                alt="Logo"
                className="logo"
                style={{ alignItems: "center", height:'50PX'}}
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
              {/* City Link */}
              <Link to="#" className="nav-link" onClick={handleShowCity}>
                <i className="fa-solid fa-city me-1" /> Location
              </Link>

              {/* City Modal */}
              <Modal show={showCityModal} onHide={handleCloseCity}>
                <Modal.Header closeButton></Modal.Header>

                {/* <Modal.Title className="text-center mt-3">
                  Amir chicken
                </Modal.Title> */}

                <Modal.Body>
                  <p className="text-center">Choose Your location</p>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search your city or pincode..."
                      aria-label="Search"
                      style={{
                        // width: "100%",
                        // maxWidth: "400px",
                        // borderRadius: "10px",
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

              {/* Products Button */}
              <div className="d-flex align-items-center">
                {/* Products Link */}
                <a href="/product" className="nav-link">
                  <i className="fa-solid fa-box me-1" /> Products
                </a>

                {/* My Account Button with custom class */}
                {/* {!token ? ( */}
                  <Link to="#" className="nav-link" onClick={() => setModalStates(!modalStates)}>
                {/* //   onClick={handleShowLogin} */}
                  
                    <i className="fa-solid fa-user me-1" /> Sign In
                  </Link>
                {/* // ) : (
                  // Dropdown Trigger with User Name */}
                  <div className="dropdown-trigger" 
                //   onClick={toggleDropdown}
                  >
                    {/* <i className="fa fa-user me-1"></i> */}
                     {/* {user?.user_Name || "User"} */}
                  </div>
                {/* // )} */}

                {/* {isOpen && token && ( */}
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/orders">Orders</Link>
                      </li>
                      <li>
                        <Link to="/swiggy-one">Amar chicken One</Link>
                      </li>
                      <li>
                        <Link to="/favourites">Favourites</Link>
                      </li>
                      <li>
                        <Link to="/" >logout</Link>
                      </li>
                    </ul>
                  </div>
                {/* )} */}
              </div>

              {/* Account Modal */}
              {/* <Modal show={showAccountModal} onHide={handleCloseAccount}>
                <Modal.Header closeButton>
                  <Modal.Title>Log In/Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control sty"
                     
                      onClick={handleShowLogin}
                    >
                      Log in Existing Account
                    </button>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                  <button
        className="form-control sty"
        onClick={handleShowRegister}  // <-- Updated this line
      >
        Create New Account
      </button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseAccount}>Close</Button> */}
              {/* </Modal.Footer> */}
              {/* </Modal>  */}
            </div>
          </div>
        </nav>

        
        {modalStates === true ? (
                  <Login
                  modalStates={modalStates}
                  setModalStates={() => {
                    setModalStates(false);
                    }}
                    // checkchang={handleCallback}
                  />
                ) : (
                  ""
                )}
      </header>
    </div>
  )
}

export default Header
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminAllCards.css";
const Content = ({ role }) => {
  const navigate = useNavigate();
  // Log the role when it changes
  useEffect(() => {
    console.log(role);
  }, [role]);

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/admin");
  };

  // Cards data based on roles
  const cards = {
    Admin: [
      {
        path: "/customerlist",
        icon: "fas fa-tachometer-alt",
        title: "Customer Management",
        description: "View Your Customer.",
      },
      {
        path: "/TrackOrderForm",
        icon: "fas fa-calendar-day",
        title: "Track Orders",
        description: "Manage Your Track Orders.",
      },
      {
        path: "/producttable",
        icon: "fas fa-store-alt",
        title: "Total Product",
        description: "Customize your product.",
      },
      {
        path: "/TotalOrdersForm",
        icon: "fas fa-store-alt",
        title: "Total Orders (21)",
        description: "Find helpful total orders.",
      },
      {
        path: "/DeliveryBoyList",
        icon: "fas fa-store-alt",
        title: "Total Delivery Boy",
        description: "Manage Your Total Delivery Boy.",
      },
      {
        path: "/addproduct",
        icon: "fas fa-plus-circle",
        title: "Add Product",
        description: "Manage your add product.",
      },
      {
        path: "/shoptable",
        icon: "fas fa-store-alt",
        title: "Total Shops",
        description: "Manage your add shops.",
      },
      {
        path: "/productmaster",
        icon: "fas fa-store-alt",
        title: "Product Master",
        description: "Manage your product master.",
      },
      {
        path: "/shopadd",
        icon: "fas fa-store-alt",
        title: "Add Shops",
        description: "Manage your add shops.",
      },
      {
        path: "/deliveryboyform",
        icon: "fas fa-store-alt",
        title: "Add Delivery Boy",
        description: "Manage your add delivery boy.",
      },
      {
        path: "/orderreturn",
        icon: "fas fa-plus-circle",
        title: "Order Return",
        description: "Manage Your Return Order.",
      },
      {
        path: "/shopsales",
        icon: "fas fa-calendar-day",
        title: "Shop Sales",
        description: "Manage your Shop Sales.",
      },
    ],
    ShopOwner: [
      {
        path: "/shoptable",
        icon: "fas fa-store-alt",
        title: "Total Shops",
        description: "Manage your add shops.",
      },
      {
        path: "/shopsales",
        icon: "fas fa-calendar-day",
        title: "Shop Sales",
        description: "Manage your Shop Sales.",
      },
    ],
  };

  // Determine cards to display based on role
  const visibleCards = role === "Admin" ? cards.Admin : cards.ShopOwner;

  return (
    <div className="content">
      {/* Top Bar */}
      <div className="top-bar">
        <h5 style={{ fontWeight: "bold" }}>Admin Dashboard..!</h5>
        {role === "Admin" && (
          <div className="">
            <button className="btn custom-button logout" onClick={logout} style={{width:"100px"}}>
              Logout
            </button>
            {/* <Link to="/shopadd">
            <button className="btn custom-button add-shop">
              Add Shop
            </button>
          </Link>
          <Link to="/deliveryboyform">
            <button className="btn custom-button add-delivery">
              Add Delivery Boy
            </button>
          </Link> */}
          </div>
        )}
      </div>

      {/* Cards Section */}
      <div className="row mt-4">
        {visibleCards.map((card, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <Link
              to={card.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card p-3">
                <div className="d-flex align-items-center">
                  <i
                    className={`${card.icon} fa-2x mr-3`}
                    style={{ color: "#9a292f", fontSize: 30 }}
                  />
                  <div>
                    <h6 style={{ fontWeight: "bold", fontSize: 18 }}>
                      {card.title}
                    </h6>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

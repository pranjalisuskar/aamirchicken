import React from 'react';
import {
  useMediaQuery,
  useTheme,
} from '@mui/material';


const drawerWidth = 240;

const Sidebar = ({role}) => {
  console.log('====================================');
  console.log(role);
  console.log('====================================');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  return (
  <div className="sidebar d-none d-md-block col-md-3 col-lg-2" style={{backgroundColor: '#9a292f'}}>
  <div className="text-center mb-4">
  {/* <img src="/logo/logo.jpg" alt="Logo" className="logo" /> */}
    <h4 className="text-white" style={{fontWeight:"bold"}}>Amir Chicken
    </h4>
  </div>
  <nav className="nav flex-column">
    { role=="Admin" ?<a className="nav-link text-white active" href="#" style={{marginRight: 10}}>
      <i className="fas fa-tachometer-alt" /> Dashboard
    </a>:null}
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-box" /> New Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-cogs" /> Total Product
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-box-open" /> Pending Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-times-circle" /> Rejected Order
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-calendar-day" /> Daily Sale
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-plus-circle" /> Add Product
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-store" /> Add Shop
    </a>
    <a className="nav-link text-white" href="#" style={{marginTop: 20}}>
      <i className="fas fa-store-alt" /> Total Shops
    </a>
  </nav>
</div>

  );
};

export default Sidebar;

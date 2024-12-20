import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './AdminAllCards';
import ShopCards from './ShopCards';

const Allcontent = ({role}) => {
    
  return (
    <>
    {/* <Header/> */}
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Header */}
     

      {/* Main Content Area */}
      {/* <Box sx={{ display: 'flex', flex: 1 }}> */}
        {/* Sidebar */}
        <Sidebar role={role}/>
        
        {/* Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Content role={role}/>
        </Box>
{/* 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ShopCards />
        </Box> */}
      {/* </Box> */}

      {/* Footer */}
    
    </Box>
    {/* <Footer/> */}
    </>
  );
};

export default Allcontent;

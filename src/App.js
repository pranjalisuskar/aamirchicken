// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Component/Master';
import Home from './Component/Maincomponent/Home';
import Product from './Component/Maincomponent/Product';
import Tableshop from './Component/componentadmin/shopcomponent/Tableshop';
import Productadd from './Component/componentadmin/Productcomponent/Productadd';
import Addshps from './Component/componentadmin/shopcomponent/Addshop';
import Allcontent from './Component/componentadmin/Allcontent';
import Shoponeview from './Component/componentadmin/shopcomponent/Shoponeview';
import Productdetails from './Component/componentadmin/Productcomponent/Productdetails';
import AdminLogin from './Component/componentadmin/AdminLogin';
import ShopCards from './Component/componentadmin/ShopCards';
import ProductMaster from './Component/componentadmin/Productcomponent/ProductMaster';


function App() {
  return (
    <div className="App page-content">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Home} />}/>
        <Route path='/shop/:id' element={<Master Rcf={Shoponeview}/>}/>
        {/* <Route path='/dashboard' element={<Master Rcf={Dashboard}/>}/> */}
        <Route path='/dash' element={<Allcontent />}/>
        <Route path='/shopdash' element={<ShopCards/>}/>

        {/* <Route path='/shop/:shopName' element={<Master Rcf={Shoplist}/>}/> */}
       <Route path='/product' element={<Master Rcf={Product}/>}/>
       <Route path='/shopadd' element={<Master Rcf={Addshps}/>}/>
       
        <Route path='/shoptale' element={<Master Rcf={Tableshop}/>}/>
        <Route path='/addproduct' element={<Master Rcf={Productadd}/>}/>
        <Route path="/product/:productId" element={< Master Rcf={Productdetails}/>} />
        <Route path='/productmaster' element={<Master Rcf={ProductMaster}/>}/>
        <Route path="/admin" element={<AdminLogin />} />


      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

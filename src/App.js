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
import Viewcart from './Component/componentadmin/shopcomponent/Viewcart';
import ShopCards from './Component/componentadmin/ShopCards';
import ProductMaster from './Component/componentadmin/Productcomponent/ProductMaster';
import Shoptable from './Component/componentadmin/shopcomponent/Shoptable';
import Producttable from './Component/componentadmin/Productcomponent/Producttable';
import DeliveryboyForm from './Component/componentadmin/Delivery-Boy/DeliveryboyForm';
import TotalOrdersForm from './Component/componentadmin/TotalOrdersForm';
import AddToCartPage from './AddToCartPage';
import ShopEditModel from './Component/componentadmin/shopcomponent/ShopEditModel';
import Customerlist from './Component/componentadmin/Customermanagement/Customerlist';
import TrackOrderForm from './Component/componentadmin/TrackOrder/TrackOrderForm';
import DeliveryBoyList from './Component/componentadmin/Delivery-Boy/DeliveryBoyList';


function App() {
  return (
    <div className="App page-content">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Home} />}/>
        <Route path='/shop/:id' element={<Master Rcf={Shoponeview}/>}/>
        <Route path='/dash' element={<Allcontent />}/>
        {/* <Route path='/shopdash' element={<ShopCards/>}/> */}
       <Route path='/product' element={<Master Rcf={Product}/>}/>
       <Route path='/shopadd' element={<Master Rcf={Addshps}/>}/>
        <Route path='/shoptale' element={<Master Rcf={Tableshop}/>}/>
        <Route path='/addproduct' element={<Master Rcf={Productadd}/>}/>
        <Route path="/product/:productId" element={< Master Rcf={Productdetails}/>} />
        <Route path='/productmaster' element={<Master Rcf={ProductMaster}/>}/>
        <Route path="/admin" element={<AdminLogin />} />
        {/* <Route path="/shop/:id" element={<Shoponeview />} /> */}
        <Route path="/viewcart" element={< Master Rcf= {Viewcart } />}/>
        {/* <Route path='/placeorder' element={<Master Rcf={Placeorder}/>}/> */}
        <Route path='/shoptable' element={<Master Rcf={Shoptable}/>}/>
        <Route path='/producttable' element={<Master Rcf={Producttable}/>}/>
        <Route path='/deliveryboyform' element={<Master Rcf={DeliveryboyForm}/>}/>
        <Route path='/TotalOrdersForm' element={<Master Rcf={TotalOrdersForm}/>}/>
        <Route path='/AddToCartPage' element={<Master Rcf={AddToCartPage}/>}/>
        <Route path='/ShopEditModel' element={<Master Rcf={ShopEditModel}/>}/>
        <Route path='/customerlist' element={<Master Rcf={Customerlist}/>}/>
        <Route path='/TrackOrderForm' element={<Master Rcf={TrackOrderForm}/>}/>
        <Route path='/DeliveryBoyList' element={<Master Rcf={DeliveryBoyList}/>}/>






      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

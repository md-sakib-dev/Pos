import React from 'react'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from '../RootLayout';
import LandingPage from '../Componenet/LandingPage'
import NewUser from '../Pages/Admin/NewUser'
import NewProduct from '../Pages/Admin/NewProduct'
import UserList from '../Pages/Admin/UserList'
import EditUser from '../Pages/Admin/EditUser'
import EditProduct from '../Pages/Admin/EditProduct'
import EditPrice from '../Pages/Admin/EditPrice'
import Configuration from '../Pages/Admin/Configuration'
import Sales from '../Pages/Sales/Sales'
import CustomSearch from '../Pages/Sales/CustomSearch'
import GiftSale from '../Pages/Sales/GiftSale'
import Refund from '../Pages/Sales/Refund'
import SearchInvoice from '../Pages/Sales/SearchInvoice'
import LabelPrint from  '../Pages/Product/LabelPrint'
import SearchProduct from  '../Pages/Product/SearchProduct'
import GetProduct from  '../Pages/Product/GetProduct'
import ProductManage from  '../Pages/Product/ProductManage'
import ProductRecieve from '../Pages/Inventory/ProductRecieve'
import GiftRecieve from '../Pages/Inventory/GiftRecieve'
import ChallanReprint from '../Pages/Inventory/ChallanReprint'
import StockUpdate from '../Pages/Inventory/StockUpdate'
import Factory from '../Pages/Inventory/Factory'
import StockTransfer from '../Pages/Inventory/StockTransfer'
import GiftTransfer from '../Pages/Inventory/GiftTransfer'
import Reports from '../Componenet/Reports'
import Changepass from '../Pages/Users/Changepass';
import Footer from '../Footer';


const Body = () => {
  return (
    <>
    <RootLayout>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/report" element={<Reports/>} />
        <Route path="/newuser" element={<NewUser/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
        <Route path="/userlist" element={<UserList/>}/>
        <Route path="/edituser" element={<EditUser/>}/>
        <Route path="/editproduct" element={<EditProduct/>}/>
        <Route path="/editprice" element={<EditPrice/>}/>
        <Route path="/configure" element={<Configuration/>}/>
        <Route path="/Sales" element={<Sales/>}/>
        <Route path="/customsearch" element={<CustomSearch/>}/>
        <Route path="/gift" element={<GiftSale/>}/>
        <Route path="/refund" element={<Refund/>}/>
        <Route path="/invoice" element={<SearchInvoice/>}/>
        <Route path="/label" element={<LabelPrint/>}/>
        <Route path="/searchpro" element={<SearchProduct/>}/>
        <Route path="/getpro" element={<GetProduct/>}/>
        <Route path="/productmanage" element={<ProductManage/>}/>
        <Route path="/productrecieve" element={<ProductRecieve/>}/>
        <Route path="/giftrecieve" element={<GiftRecieve/>}/>
        <Route path="/challan" element={<ChallanReprint/>}/>
        <Route path="/stockupdate" element={<StockUpdate/>}/>
        <Route path="/factory" element={<Factory/>}/>
        <Route path="/stockT" element={<StockTransfer/>}/>
        <Route path="/giftT" element={<GiftTransfer/>}/>
        <Route path="/change" element={<Changepass/>}/>
        </Routes>
        {/* <Footer/> */}
    </RootLayout>
    </>
  )
}

export default Body

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Component/AddProduct/AddProduct';
import AddReview from './Component/addReview/AddReview';
import Blog from './Component/Blog/Blog';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import ManageProduct from './Component/Mproduct/ManageProduct';
import MyOrders from './Component/MyOrders/MyOrders';
import MyProfile from './Component/MyProfile/MyProfile';
import NotFound from './Component/NotFound/NotFound';
import Portfolio from './Component/Portfolio/Portfolio';
import Purchase from './Component/Purchase/Purchase';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="">
<Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
        <Route path="/myProfile" element={<MyProfile/>} />
        <Route path="/myOrders" element={<MyOrders/>} />
        <Route path="/addReview" element={<AddReview/>} />
        <Route path="/manageOrder" element={<ManageOrders/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/manageProduct" element={<ManageProduct/>} />


        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/purchase" element={
        <RequireAuth><Purchase/></RequireAuth>} />

        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

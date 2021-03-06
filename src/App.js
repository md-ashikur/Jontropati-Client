
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
import MakeAdmin from './Component/MakeAdmin/MakeAdmin';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import ManageProduct from './Component/Mproduct/ManageProduct';
import MyOrders from './Component/MyOrders/MyOrders';
import MyProfile from './Component/MyProfile/MyProfile';
import NotFound from './Component/NotFound/NotFound';
import Portfolio from './Component/Portfolio/Portfolio';
import Purchase from './Component/Purchase/Purchase';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import ForgetPass from './Component/Signup/ForgetPass';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="">
<Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="blog" element={<Blog/>} />

        {/* ========dashboard======= */}
        <Route path="dashboard" 
        element={<RequireAuth><Dashboard/></RequireAuth>}>

        <Route index  element={<RequireAuth><MyProfile/></RequireAuth>} ></Route>
        <Route path="myOrders" element={<RequireAuth><MyOrders/></RequireAuth>} ></Route>

        <Route path="addReview" element={<RequireAuth><AddReview/></RequireAuth>} ></Route>
        <Route path="manageOrder" element={<RequireAuth><ManageOrders/></RequireAuth>} ></Route>
        <Route path="addProduct" element={<RequireAuth><AddProduct/></RequireAuth>} ></Route>
        <Route path="manageProduct" element={<RequireAuth><ManageProduct/></RequireAuth>} ></Route>
        <Route path="makeAdmin" element={<RequireAuth><MakeAdmin/></RequireAuth>} ></Route>

        </Route>
        
       


        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="forgetPass" element={<ForgetPass/>} />

        <Route path="purchase" element={
        <RequireAuth><Purchase/></RequireAuth>} />

        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

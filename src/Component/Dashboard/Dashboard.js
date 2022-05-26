import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="mt-20 container mx-auto">
           
<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
    <h5 className="text-2xl font-bold text-primary my-3">Menu</h5>
                         {/* <!-- Sidebar content here --> */}
                        <li ><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/addReview">Add A Review</Link></li>

                        <li><Link to="/dashboard/manageOrder">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
                        <li><Link to="">Make Admin</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;

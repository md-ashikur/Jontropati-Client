import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
    return (
        <div>
            <div class="drawer h-0 lg:h-screen drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content h-0 lg:h-screen z-1">
                    <h1 className="fixed left-40 z-40 lg:hidden font-bold text-primary">DASHBOARD</h1>
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button  lg:hidden fixed  w-screen rounded-none text-white z-100 mt-10">Click Me</label>

                </div>
                <div class="drawer-side lg:h-screen h-0 shadow-xl z-1 lg:z-0">

                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <h5 className="text-2xl font-bold text-primary my-3">Menu</h5>
                        {/* <!-- Sidebar content here --> */}
                        <li ><Link to="/myProfile">My Profile</Link></li>
                        <li><Link to="/myOrders">My Orders</Link></li>
                        <li><Link to="/addReview">Add A Review</Link></li>

                        <li><Link to="/manageOrder">Manage All Orders</Link></li>
                        <li><Link to="/addProduct">Add A Product</Link></li>
                        <li><Link to="/manageProduct">Manage Products</Link></li>
                        <li><Link to="">Make Admin</Link></li>
                    </ul>

                </div>
            </div>


            
        </div>
    );
};

export default DashboardMenu;
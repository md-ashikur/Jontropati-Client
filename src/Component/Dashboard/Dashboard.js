import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="mt-20 container mx-auto">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">All User</Link>
            </li>

            {admin ? (
              <div>
                <li>
                  <Link to="/dashboard/manageOrder">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProduct">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add A Review</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

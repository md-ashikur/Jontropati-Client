import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 lg:px-10 px-5 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Conatct Us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <b className="ml-6 text-xl text-primary">JontroPati</b>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About Us</NavLink>
          </li>
          <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Conatct Us</NavLink>
            </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <HiOutlineShoppingCart className="text-2xl" />
                  <span className="badge badge-sm bg-primary indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-accent ">
                  <img src={user?.photoURL} alt=""/>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="" className="justify-between  text-primary">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Profile</NavLink>
                </li>
                <li tabIndex="0">
                  <NavLink to="dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/setting">Setting</NavLink>
                </li>
                <li>
                  {user ? (
                    <div>
                      <button className="signOut" onClick={handleSignOut}>
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to="login" className="font-bold">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

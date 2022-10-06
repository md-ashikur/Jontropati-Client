import React from "react";
import { Link, NavLink } from "react-router-dom";
import product6 from "../../Images/product-6-1-300x310.jpg";
import { BiSearchAlt2 } from "react-icons/bi";
const Shop = () => {
  return (
    <div className="bg-base-200">
      <div className="grid lg:grid-cols-4 gap-3 py-28 lg:mx-10 mx-5">
        <div>
          <div className="shadow-lg bg-base-100 p-4 rounded">
            <h2 className=" text-2xl font-bold px-5 ">Product Categories</h2>
            <ul className="my-5 px-5">
              <li className="border-b-2 py-3 border-gray-100 hover:text-primary">
                <NavLink to="">Accessories</NavLink>
              </li>
              <li className="border-b-2 py-3 border-gray-100 hover:text-primary">
                <NavLink to="">Drills</NavLink>
              </li>
              <li className="border-b-2 py-3 border-gray-100 hover:text-primary">
                <NavLink to="">Gear & Equipment</NavLink>
              </li>
              <li className="border-b-2 py-3 border-gray-100 hover:text-primary">
                <NavLink to="">Hand Tools</NavLink>
              </li>
              <li className=" py-3 border-gray-100 hover:text-primary">
                <NavLink to="">Power Tools</NavLink>
              </li>
            </ul>
          </div>

          {/* =====================product tag==========      */}
          <div className="shadow-lg bg-base-100 p-4 my-8 rounded">
            <h2 className=" text-2xl font-bold px-5 ">Product Tags</h2>

            <div className="flex flex-wrap gap-2 text-center my-5 mx-3 ">
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Auto Parts</button>
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Construction</button>
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Electrical</button>
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Heavy Equipment</button>
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Machine</button>
              <button className="badge badge-outline px-4 py-3 opacity-25 rounded-full text-xs  hover:bg-red-500 hover:text-white   hover:opacity-100">Mechanic Tools</button>
             

            </div>
          </div>
        </div>
        {/* ==================products======= */}
        <div className="lg:col-span-3 lg:px-5">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input caret-primary ease-in-out w-64 lg:focus:w-96 focus:outline-none transition duration-700 input-bordered"
              />
              <button className="btn btn-square text-xl border-0 hover:bg-accent bg-primary text-white w-20 flex justify-center items-center">
                <BiSearchAlt2 />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-3 py-10 ">
            <img src={product6} alt="" className="w-[450px] h-[290px]" />

            <div className="lg:col-span-2 my-5 lg:mx-3">
              <h3 className="font-bold text-xl">Mediocre Leather Shoes</h3>

              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <h3 className="font-bold text-xl">$380.99–$386.89</h3>
              <p className="text-green-500 text-sm font-bold">In Stock</p>
              <p className="my-3">
                Deserunt recusandae nam quaerat aut mollitia. Similique id
                necessitatibus et voluptas sunt temporibus. Omnis pariatur
                debitis iure non.
              </p>
              <button
                type=""
                className="bg-red-500 btn glass border-0 hover:bg-primary px-5 py-3 text-white duration-300 ease-in-out rounded font-semibold"
              >
                BUY PRODUCT
              </button>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

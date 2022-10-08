import React, { useState } from "react";
import Magnifier from "react-magnifier";
import {  NavLink, Outlet } from "react-router-dom";
import pro1 from "../../Images/product-6-1-300x310.jpg";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [num, setNum] = useState(1);
  const incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="bg-base-200  py-28">
      <div className="bg-white grid lg:grid-cols-2 lg:gap-4 lg:mx-20 mx-5">
        <div className="lg:w-[600px] lg:h-[500px] relative overflow-hidden">
          <Magnifier
            src={pro1}
            mgWidth={400}
            mgHeight={300}
            zoomFactor={0.7}
            mgShape="square"
            className="w-full"
          />
        </div>
        <div className="m-8">
          <h2 className="text-3xl font-bold">Mediocre Leather Shoes</h2>

          <div className="rating rating-xs flex items-center">
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
            <p> (5)</p>
          </div>
          <p className="text-green-500 text-sm font-bold">In Stock</p>
          <hr></hr>
          <p className="my-4">
            Deserunt recusandae nam quaerat aut mollitia. Similique id
            necessitatibus et voluptas sunt temporibus. Omnis pariatur debitis
            iure non.
          </p>
          <h3 className="text-xl font-bold my-3 text-secondary">$380 – $386</h3>
          <div className="flex gap-4">
            <p>Color</p>
            <div className="tooltip tooltip-accent" data-tip="Red">
              <input
                type="radio"
                name="radio-4"
                className="radio bg-red-500 checked:bg-red-500"
              />
            </div>
            <div className="tooltip tooltip-accent" data-tip="Blue">
              <input
                type="radio"
                name="radio-4"
                className="radio bg-blue-500 checked:bg-blue-500"
              />
            </div>
            <div className="tooltip tooltip-accent" data-tip="Green">
              <input
                type="radio"
                name="radio-4"
                className="radio bg-green-500 checked:bg-green-500"
              />
            </div>
            <div className="tooltip tooltip-accent" data-tip="Yellow">
              <input
                type="radio"
                name="radio-4"
                className="radio bg-yellow-500 checked:bg-yellow-500"
              />
            </div>
            <div className="tooltip tooltip-accent" data-tip="Accent">
              <input
                type="radio"
                name="radio-4"
                className="radio bg-accent checked:bg-accent"
              />
            </div>
          </div>
          <div className="my-5 flex items-center">
            <button
              className="bg-red-500 hover:bg-red-500 btn border-0  glass text-white px-5 h-10 rounded-l-full"
              onClick={decNum}
            >
              –
            </button>
            <input
              value={num}
              onChange={handleChange}
              className="px-5 py-2 w-20 border text-center"
              type="text"
            />
            <button
              onClick={incNum}
              className="bg-red-500 hover:bg-red-500 btn border-0 glass h-10 text-white px-5 rounded-r-full"
            >
              +
            </button>
            <h3 className="mx-3 text-xl">
              Total : <span className="text-secondary font-bold">$380</span>{" "}
            </h3>
          </div>

          <button
            type=""
            className="bg-red-500 btn glass border-0 hover:bg-primary px-5 py-3 text-white duration-300 ease-in-out rounded-full font-semibold"
          >
            ADD TO CART
          </button>

          <div className="text-xs my-5">
            <p>Categories: Convallis, Gear & Equipment</p>
            <p>Tags: Electrical, Mechanic tools</p>
          </div>
        </div>
      </div>

      {/* ======================description============= */}
      
      <div className="bg-white  px-10 lg:mx-20 mx-5 h-screen">
      <hr/>
       

        <div className="flex my-10 gap-5 lg:text-3xl font-semibold">
          <NavLink to="/productDetails/description">Description</NavLink>

          <NavLink to="/productDetails/additionalInfo">
            Additional Information
          </NavLink>

          <NavLink to="/productDetails/productReviews">Reviews (5)</NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProductDetails;

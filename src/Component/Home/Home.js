import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heavy from "../../Images/heavy.jpg"
import Newsletters from "../Newsletters/Newsletters";

import ToolsCard from "../ToolsCard/ToolsCard";
import Business from "./Business/Business";
import Review from "./Review/Review";

const Home = ({ item }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://secret-wave-92614.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
     <div className="lg:my-52 lg:mx-20 mx-5 mt-20 absolute z-10 text-white">
      <p className="font-bold text-primary">THE ULTIMATE GOAL</p>
      <h1 className="lg:text-5xl text-2xl font-bold">We are manufacturing<br/> products with world<br/> class quality</h1>
     <p className="my-5">
        Expert Technical Support | High-Performance | Machines Profitable
        Solutions
      </p>
      <Link to="/shop"><button className="btn bg-primary border-none py-3 text-white px-5 shadow-lg hover:bg-white hover:text-primary font-semibold rounded">Shop Now</button></Link>
     </div>
      <img src={heavy} alt="" className="brightness-50 w-full lg:h-screen h-96"/>
      
      <div className=" text-center">
        <h2 className="text-4xl text-primary mt-20 font-bold my-5">Industries We Serve</h2>
        <p className="px-5">
          Manufacturer’s high end manufacturing services are a
          perfect complement to<br/> today’s high tech industries.We Are Restocking
          as Quickly as Possible. Come Back 7/30 to Order,<br></br> more of
          These Flavors Inspired by the Places You Call Home!
        </p>
{/* ================tools==================== */}
        <h2 className="text-4xl text-primary mt-20 font-bold">TOOLS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-20 mx-4 lg:gap-2 ">
          {items.slice(0, 3).map((item) => (
            <ToolsCard key={item._id} item={item}></ToolsCard>
          ))}
          
        </div>
        <Link to="/shop"><button className="btn bg-primary border-none py-3 text-white px-5 shadow-lg hover:bg-white hover:text-primary font-semibold rounded">SEE MORE</button></Link>

   {/* ============MILLION BUSINESS TRUST US==============      */}
        <Business></Business>
      </div>
      {/* Reviews=============================== */}

      <Review></Review>

     

      {/* news-letter==================== */}
    <Newsletters/>
    </div>
  );
};

export default Home;

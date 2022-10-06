import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Business = () => {
   
  return (
    <div className="text-center my-20">
      <h2 className="text-4xl font-bold text-primary">
        MILLION BUSINESS TRUST US
      </h2>
      <p className="font-medium"> TRY TO UNDERSTAND USERS EXPECTION</p>

      {/* countup section=================== */}

      <div className="block lg:flex lg:justify-evenly my-10 ">
        <div className="text-4xl font-bold">
          <img src="" alt="" />
          <div className="flex justify-center">
          <CountUp end={150} duration="2" enableScrollSpy  delay={2}></CountUp>
          <p>K+</p>
        </div>
          <p className="text-xl font-normal	 text-primary">Customers</p>
        </div>

        <div className="text-4xl font-bold">
          <img src="" alt="" />
          <div className="flex justify-center">
          <CountUp end={300} duration="2" enableScrollSpy  delay={2}></CountUp>
          <p>K+</p>
        </div>
          <p className="text-xl font-normal	 text-primary">Annual revenue</p>
        </div>

        <div className="text-4xl font-bold">
          <img src="" alt="" />
          <div className="flex justify-center">
          <CountUp end={80} duration="2" enableScrollSpy  delay={2}></CountUp>
          <p>K+</p>
        </div>
        <p className="text-xl font-normal text-primary">Tools</p>
        </div>

        <div className="text-4xl font-bold">
          <img src="" alt="" />

          <div className="flex justify-center">
            <CountUp end={43} duration="2" enableScrollSpy delay={2} />
            <p>K+</p>
          </div>
          <p className="text-xl font-normal	 text-primary">Reviews</p>
        </div>
      </div>
      {/* =============
            counter end=
            ===================== */}

      <div className="card bg-base-100 shadow-lg w-4/5 mx-auto">
        <div className=" block lg:flex py-10 px-10 justify-between">
          <div>
            <h2 className="card-title text-primary text-xl font-bold">
              Have any question about us or get a product request?
            </h2>
            <p className="lg:text-left">Don't hesitate to contact us</p>
          </div>
          <div className="card-actions py-5 justify-center lg:py-0 ">
            <button className="btn btn-primary rounded-lg text-white">
              Contacct Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

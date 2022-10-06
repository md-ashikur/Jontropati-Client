import React from 'react';

const Newsletters = () => {
    return (
        <div className="my-20 text-center mx-5">
        <h2 className="lg:text-4xl text-2xl font-semibold text-accent ">
          Sign Up For Newsletters
        </h2>
        <p>Get e-mail updates about our latest shop and special offers.</p>
        <div className="form-control">
          <label className="input-group justify-center my-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered focus:outline-none lg:w-2/4 	"
            />
            <button className="btn btn-square bg-accent text-white w-20 border-0 font-bold hover:bg-secondary">
              Email
            </button>
          </label>
        </div>
      </div>
    );
};

export default Newsletters;
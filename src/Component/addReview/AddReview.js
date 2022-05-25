import React from 'react';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';

const AddReview = () => {
    return (
        <div className="mt-20 container mx-auto  lg:flex">
            <DashboardMenu></DashboardMenu>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <div className="card w-96 bg-base-100 px-10 shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title justify-center">Give A Review</h2>
                                <input type="number" placeholder="Give a rating between 1 to 5" className="input rounded-lg input-bordered input-accent w-full max-w-xs" />
                                <textarea className="textarea textarea-accent rounded-lg" placeholder="Description"></textarea>
                                <button className="btn btn-primary text-white">ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
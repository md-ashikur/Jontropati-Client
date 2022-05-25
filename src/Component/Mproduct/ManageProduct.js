import React from 'react';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';

const ManageProduct = () => {
    return (
        <div className="mt-20 container mx-auto  lg:flex">
            <DashboardMenu></DashboardMenu>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
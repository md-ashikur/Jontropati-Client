import React from 'react';

import ToolsCard from '../ToolsCard/ToolsCard';
import Business from './Business/Business';
import Carousel from './Carousel/Carousel';
import Review from './Review/Review';


const Home = () => {
    return (
        <div>

            <Carousel></Carousel>
            <div className='container mx-auto'>
                <ToolsCard></ToolsCard>
                <Business></Business>
            </div>
            {/* Reviews=============================== */}
            
            <Review></Review>
            {/* news-letter==================== */}
            <div className="my-20 text-center">
                <h2 className="text-4xl font-semibold text-accent ">Sign Up For Newsletters</h2>
                <p>Get e-mail updates about our latest shop and special offers.</p>
                <div className="form-control">
                    
                    <label className="input-group justify-center my-5">
                       
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-2/4		" />
                        <span className="bg-accent text-white font-bold hover:bg-secondary">Email</span>
                    </label>
                </div>
            </div>

            
        </div>
    );
};

export default Home;
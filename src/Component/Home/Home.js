import React, { useEffect, useState } from 'react';
import ToolCards from '../ToolsCard/ToolCards';

import ToolsCard from '../ToolsCard/ToolsCard';
import Business from './Business/Business';
import Carousel from './Carousel/Carousel';
import Review from './Review/Review';


const Home = ({item}) => {
    const [ items, setItems] = useState([]);
    
    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return (
        <div>

            <Carousel></Carousel>
            <div className='container mx-auto'>
           <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 my-20">
           {
                items.slice(0, 3).map(item => <ToolsCard
                    key={item._id}
                    item={item}
                >
                </ToolsCard>)
            }
           </div>
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
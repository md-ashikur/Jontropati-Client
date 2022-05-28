import React, { useEffect, useState } from 'react';
import ToolCards from '../ToolsCard/ToolCards';

import ToolsCard from '../ToolsCard/ToolsCard';
import Business from './Business/Business';
import Carousel from './Carousel/Carousel';
import Review from './Review/Review';


const Home = ({ item }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://secret-wave-92614.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div >
            <h1 className='my-20 absolute top-40 left-48 z-10 text-center font-bold text-5xl '>Expert Technical Support
                High-Performance<br></br> Machines
                Profitable Solutions</h1>
            <Carousel></Carousel>
            <div className='container mx-auto text-center'>








                <h2 className='text-4xl mt-20 font-bold'>Industries We Serve</h2>
                <p>Manufacturer’s high end manufacturing services are a<br></br>
                    perfect complement to today’s high tech industries.We Are Restocking as Quickly as Possible. Come Back 7/30 to Order,<br></br> more of These Flavors Inspired by the Places You Call Home!</p>

                <h2 className='text-4xl mt-20 font-bold'>TOOLS</h2>
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

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 class="text-5xl font-bold">Our Capabilities</h1>
                        <p class="py-6">We Are Restocking as Quickly as Possible. Come Back 7/30 to Order,<br></br> more of These Flavors Inspired by the Places You Call Home!</p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

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
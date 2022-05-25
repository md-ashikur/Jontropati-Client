import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = () => {
    return (
        <div className='my-10'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <b>Minimum order quantity : </b>
                    <b>Available quantity : </b>
                    <b>Price : </b>
                    
                    <div class="card-actions justify-center">
                        <Link to="/purchase"><button class="btn btn-primary px-20 text-white font-bold">Purchase</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsCard;
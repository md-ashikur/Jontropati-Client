import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ToolsCard = ({item}) => {
    const { id: _id, name, img, description, minQuantity, availableQuantity, price } = item;
    const navigate = useNavigate();

    const navigateToItem = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='my-10'>
            <div className="card card-compact w-100 bg-base-100 shadow-xl mx-3">
                <figure className='h-{200px}'><img src={img} alt="Shoes" className='h-80' /></figure>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                    <b>Minimum order quantity : {minQuantity}</b>
                    <b>Available quantity : {availableQuantity}</b>
                    <b>Price : {price}</b>
                    
                    <div className="card-actions justify-center">
                        <Link to="/purchase"><button className="btn btn-primary px-20 text-white font-bold">Purchase</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsCard;
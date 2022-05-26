import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const ToolCards = ({item}) => {
    const [ items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
             {
                items.map(item => <ToolsCard
                    key={item._id}
                    item={item}
                >
                </ToolsCard>)
            }
        </div>
    );
};

export default ToolCards;
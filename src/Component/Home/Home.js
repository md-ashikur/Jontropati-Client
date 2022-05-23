import React from 'react';
import ToolsCard from '../Footer/ToolsCard/ToolsCard';
import Business from './Business/Business';
import Carousel from './Carousel/Carousel';


const Home = () => {
    return (
            <div>
            
            <Carousel></Carousel>
            <div className='container mx-auto'>
           <ToolsCard></ToolsCard>
            <Business></Business>
            </div>
        </div>
    );
};

export default Home;
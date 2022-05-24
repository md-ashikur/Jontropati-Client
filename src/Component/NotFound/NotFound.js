import React from 'react';
import notfound from "../../Images/not-found.png";

const NotFound = () => {
    return (
        <div className="my-20 flex justify-center">
            <img src={notfound} alt="" className="w-cover" />
        </div>
    );
};

export default NotFound;
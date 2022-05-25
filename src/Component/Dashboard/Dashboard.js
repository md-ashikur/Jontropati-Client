import React from 'react';
import { Link } from 'react-router-dom';
import DashboardMenu from './DashboardMenu/DashboardMenu';

const Dashboard = () => {
    return (
        <div className="mt-20 container mx-auto">
            <DashboardMenu></DashboardMenu>
        </div>
    );
};

export default Dashboard;

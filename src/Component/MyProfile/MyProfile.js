import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="mt-20 container mx-auto  lg:flex">
            <DashboardMenu></DashboardMenu>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
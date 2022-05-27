import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data:user, isLoading, refetch } = useQuery('MakeAdmin', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="">
            <h2 className="font-bold text-accent text-4xl my-10">All Users Info</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead >
                        <tr >
                            <th className="bg-primary"></th>
                            <th className="bg-primary text-white">Name</th>
                            <th className="bg-primary text-white">Job</th>
                            <th className="bg-primary text-white">Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user?.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MakeAdmin;
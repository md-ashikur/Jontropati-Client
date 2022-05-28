import React from 'react';
import { toast } from 'react-toastify';


const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success('Successfully made an admin');
                
            }
        })
    }
    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' && <button class="btn glass bg-green-500 text-white  hover:text-green-500" onClick={makeAdmin}>Make Admin</button>
                }</td>
            <td><button class="btn glass bg-[red] text-white hover:text-red-600	">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;
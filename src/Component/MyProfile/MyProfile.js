import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    };


    return (


        <div className="mt-20 container mx-auto ">
            <div class="card w-auto bg-base-100 shadow-xl">
               
                <div class="card-body">
                    <h2 class="card-title">
                        <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                    </h2>

                    {/* modal input field */}
                    <label for="my-modal" class="btn modal-button">Edit</label>


                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal ">
                        <div class="modal-box">
                            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>

                            {/* form------------- */}
                            <div className='form-body mx-auto my-5 '>
                              
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-75 mx-auto my-3">
                                    <input type="text"  {...register("education", { required: true })} className="form-input my-2" placeholder="Education" />

                                    <textarea type="text"  {...register("location", { required: true })} className="form-input my-2" placeholder="Location" />

                                    <input type="number" {...register("phone")} className="form-input my-2" placeholder="Phone number" />

                                    <input type="text"  {...register("linkedIn", { required: true })} className="form-input my-2" placeholder="LinkedIn profile link" />

                

                                    <input type="submit" value="Add" className='btn mx-auto py-2 mt-2 px-20' >
                                        
                                    </input>
                                    
                                </form>
                                <div class="modal-action">
                                <label for="my-modal" class="btn">Done</label>
                            </div>
                            </div>


                            
                        </div>
                    </div>
                    {/* modal input field end */}


                    <div class="card-actions flex-col justify-start my-10">
                        <h3 className='font-semibold text-2xl my-5'>Education : </h3>

                        <h3 className='font-semibold text-2xl my-5'>Location : </h3>

                        <h3 className='font-semibold text-2xl my-5'>Phone number: </h3>

                        <h3 className='font-semibold text-2xl my-5'>LinkedIn profile link : </h3>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default MyProfile;
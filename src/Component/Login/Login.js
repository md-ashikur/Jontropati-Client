import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // google--------------
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // email password-----------
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        gError,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError; 

    if(error || gError){
        signInError = <p>{error?.message || gError?.message}</p>
    
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        <Loading></Loading>
    }


    const handleSubmit = event => {
        event.preventDefault();

    }
    return (
        <div className="my-20 flex justify-center ">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title justify-center">LOGIN</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col my-3">
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" className="form-input" placeholder="email" required />


                    <input
                        onBlur={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="form-input my-2" required />

                    <p style={{ color: 'red' }}>{signInError}</p>

                    <input type="submit" value="Login" onClick={() => signInWithEmailAndPassword(email, password)} className='btn submit-btn mx-auto py-2 mt-2' />
                </form>
                <p>Don't have any account? <Link to="/signup" className='font-bold text-[#0a7551]'>Sign Up</Link></p>
                <p>Forget Password? </p>
                {/* ==============
       or
       ===============================  */}
                <div class="divider px-10">OR</div>

                {/* ==============
       other login option
       ===============================  */}
                <div className="">
                    <button class="btn btn-outline btn-black rounded-lg hover:bg-primary hover:text-white" onClick={() => signInWithGoogle()}>
                        Continue with Google
                    </button>

                </div>
                </div>
            </div>
            {/* ==============
       email pass login option
       ===============================  */}
           
        </div>
    );
};

export default Login;
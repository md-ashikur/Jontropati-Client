import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, ] = useSignInWithGoogle(auth);




    if (loading || loading1) {
        <Loading></Loading>
    }

    if (user || user1) {
        navigate('/');
    }

    const handleSignUp = event => {
        event.preventDefault();
        if (password !== confirm) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
    }
    return (
        <div className="my-20 flex justify-center ">
            <div class="card w-96 bg-base-100 shadow-xl my-10">
                <div class="card-body text-center">
                    <h2 class="card-title justify-center">SIGN UP</h2>
                    <form onSubmit={handleSignUp} className="flex flex-col my-3">
                    <input onBlur={(e) => setName(e.target.value)} type="text" name='name' className="form-input my-2" placeholder="Enter Full Name" required />


                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' className="form-input" placeholder="email" required />


                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="form-input my-2" />


                    <input onBlur={(e) => setConfirm(e.target.value)} type="password" name="confirm-password" placeholder="confirm password" className="form-input mb-2" />
                    <p style={{ color: 'red' }}>{error}</p>

                    <input onClick={() => createUserWithEmailAndPassword(email, password, name)} type="submit" value="Sign Up" className='btn submit-btn mx-auto py-2 mt-2' />
                </form>

                <p>Already have an account? <Link to="/login" className='font-bold text-[#0a7551]'>Login</Link></p>

                <div class="divider px-10">OR</div>

                {/* ==============
           other login option
           ===============================  */}
                <div className="">
                    <button onClick={() => signInWithGoogle()} type="submit" class="btn btn-outline btn-black rounded-lg hover:bg-primary hover:text-white">Continue with Google</button>
                </div>
                </div>
            </div>
           
           
        </div>
    );
};

export default Signup;
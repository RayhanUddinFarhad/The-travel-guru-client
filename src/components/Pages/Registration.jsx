import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Registration = () => {
    return (
        <div>

           <Navbar></Navbar>

           <div>




           <div>



              
<div className=" card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto items-center">
    <div className="card-body">

        <h1 className='text-3xl text-left'>LogIn</h1>
        <div className="form-control">
            <label className="label">
                <span className="label-text">First Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Last Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">Email or username</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
        </div>

        


        <div className="form-control">
            <label className="label">
                <span className="label-text">Confirm Password</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-warning">Create Account</button>
        </div>

        <p>Already have an account? <Link to = "/logIn" className='btn-link'>Log In</Link></p>
    </div>
</div>

<div className='mt-10 space-y-3'>



<p>Or</p>

<button className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto'>
    <FaFacebook className='mr-3 text-indigo-500'/>Continue with facebook
</button>
<button className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto'>
    <FaGoogle className='mr-3 '/>Continue with Google
</button>



</div>




</div>
           </div>
            
        </div>
    );
};

export default Registration;
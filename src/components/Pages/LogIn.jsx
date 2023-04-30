import React from 'react';
import Navbar from '../Header/Navbar';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>



              
                        <div className=" card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto items-center">
                            <div className="card-body">

                                <h1 className='text-3xl text-left'>LogIn</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Login</button>
                                </div>

                                <p>Don't have an account? <Link to = "/register" className='btn-link'>Register</Link></p>
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
           
    );
};

export default LogIn;
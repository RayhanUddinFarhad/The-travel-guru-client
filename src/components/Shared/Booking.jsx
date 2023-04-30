import React from 'react';
import Navbar from '../Header/Navbar';
import Category from '../Header/Category/Category';
import Datepicker from "tailwind-datepicker-react"
import { Link, Outlet } from 'react-router-dom';


const Booking = () => {





    


    return (
        <div>

            <Navbar></Navbar>



            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/C8YHkTh/Rectangle-1.png")` }}>

                <div className='hero-overlay bg-black bg-opacity-75'>








                </div>



                <div className="hero-content flex-col lg:flex-row w-full">

                    <div className='flex items-center space-x-10'>

                        <div>

                            <Outlet></Outlet>
                        </div>

                        <div className='card bg-white w-96 h-96'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input type="text" placeholder="From" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input type="text" placeholder="To" className="input input-bordered" />
                                
                            </div>

                            <div>
                           


                            </div>
                            <div className="form-control mt-6">
                                <Link to= '/bookingArea'><button className="btn btn-warning">Start Booking</button></Link>
                            </div>
                        </div>



                    </div>




                </div>





            </div>





        </div>






    );
};

export default Booking;
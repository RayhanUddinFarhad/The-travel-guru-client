import React, { useContext } from 'react';
import logo from '../../assets/icons/Group 1330.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext (AuthContext)


    const handleLogOut = () => {
        
        logOut()
        .then (() => {

        })

        .catch (err => {

            console.log (err)
         })

        
    }







    return (
        <div className=''>

            <div className="navbar ">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-white">
                            <li><Link className='text-white'>News</Link></li>

                            <li><a>Destination</a></li>
                            <li><a>Blog</a></li>

                            <li><a>Contracts</a></li>
                        </ul>
                    </div>
                    <img className='w-28 text-white grayscale' src={logo} alt="" />



                    <div className="form-control ml-10 hidden lg:block">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input bg-transparent outline" />
                            <button className="btn btn-outline text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ml-32 items-center">
                    <ul className="menu menu-horizontal px-6 text-base">
                        <li><Link to = '/'>Home</Link></li>

                        <li><a>Destination</a></li>
                        <li><a>Blog</a></li>

                        <li><a>Contracts</a></li>
                    </ul>
                </div>
                <div className="navbar-center space-x-5 items-center">
                    <p>{user && user.displayName}</p>

                    {

                        user ? <Link onClick={handleLogOut} className='btn btn-warning'>Log Out</Link> :                     <Link to = '/logIn' className="btn btn-warning"> Log In </Link>

                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;
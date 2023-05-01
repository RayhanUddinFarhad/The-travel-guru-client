import React, { useContext } from 'react';
import Navbar from '../Header/Navbar';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {

    const { googleSignIn, logIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate(from, { replace: true });




            })
            .catch(err => {

                console.log(err);
            })



    }

    const handleLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((currentuser) => {


                const logged = currentuser.user
                navigate(from, { replace: true });

            })
            .catch(err => {

                console.log(err);
            })






    }




    return (
        <div>
            <Navbar></Navbar>

            <div>




                <div className=" card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto items-center">
                    <Form onSubmit={handleLogIn} className="card-body">

                        <h1 className='text-3xl text-left'>LogIn</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>

                        <p>Don't have an account? <Link to="/register" className='btn-link'>Register</Link></p>
                    </Form>
                </div>

                <div className='mt-10 space-y-3'>



                    <p>Or</p>

                    <button className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto p-2'>
                        <FaFacebook className='mr-3 text-indigo-500' />Continue with facebook
                    </button>
                    <button onClick={handleGoogleSignIn} className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto p-2'>
                        <FaGoogle className='mr-3 ' />Continue with Google
                    </button>



                </div>




            </div>
        </div>

    );
};

export default LogIn;
import React, { useContext, useState } from 'react';
import { Form, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {


    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState ('')
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";





    const handleSignIn = (e) => {
        e.preventDefault()

        const form = e.target;
        const firstname = form.firstname.value;
        const lastname  = form.secname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;




        if (password !== confirmpassword) { 


            setError ('Your password Is not matching')

            return





        }

        console.log (firstname, lastname, email, password, confirmpassword)

        createUser (email, password)
        .then (res => {

            const created = res.user;


            updateProfile(created, {

                displayName : firstname + ' ' + lastname
                
            })

            console.log (created)


            navigate(from, { replace: true });

        })
        .catch (err => {

            console.log (err)
         })

         form.reset()


    }


    return (
        <div>

           <Navbar></Navbar>

           <div>




           <div>



              
<div className=" card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto items-center">
    <Form onSubmit={handleSignIn} className="card-body">

        <h1 className='text-3xl text-left'>Create an account</h1>


        <p>{error}</p>
        <div className="form-control">
            <label className="label">
                <span className="label-text">First Name</span>
            </label>
            <input required type="text" name='firstname' placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Last Name</span>
            </label>
            <input required name='secname' type="text" placeholder="name" className="input input-bordered" />
        </div>


        <div className="form-control">
            <label className="label">
                <span  className="label-text">Email or username</span>
            </label>
            <input required name='email' type="text" placeholder="Email or username" className="input input-bordered" />
        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input required name='password' type="text" placeholder="password" className="input input-bordered" />
        </div>

        


        <div className="form-control">
            <label className="label">
                <span className="label-text">Confirm Password</span>
            </label>
            <input name='confirmpassword' type="text" placeholder="Confirm Password" className="input input-bordered" />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-warning">Create Account</button>
        </div>

        <p>Already have an account? <Link to = "/logIn" className='btn-link'>Log In</Link></p>
    </Form>
</div>

<div className='mt-10 space-y-3'>



<p>Or</p>

<button className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto p-2'>
    <FaFacebook className='mr-3 text-indigo-500'/>Continue with facebook
</button>
<button className='flex justify-center items-center border border-gray-400 rounded-full w-96 mx-auto p-2'>
    <FaGoogle className='mr-3 '/>Continue with Google
</button>



</div>




</div>
           </div>
            
        </div>
    );
};

export default Registration;
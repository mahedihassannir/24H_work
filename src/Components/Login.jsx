import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contex } from './Contex/Contex';

import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';



const Login = () => {

    let { handleLoigin, popUp } = useContext(contex)

    let loginPage = (e) => {
        e.preventDefault()

        let form = e.target

        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        handleLoigin(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
            })
            .catch(err => {
                console.log(err);
            })

    }


    let popUp1 = () => {
        
        

    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginPage} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className=' text-center w-1/2 mx-auto flex justify-center py-5'>
                            <FaGoogle onClick={popUp1} className='cursor-pointer'></FaGoogle>
                        </div>

                        <div>
                            <Link to="/Register">new to digital work</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
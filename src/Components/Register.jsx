import React, { useContext, useState } from 'react';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { contex } from './Contex/Contex';
import { sendEmailVerification } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    let { Register } = useContext(contex)

    let [visible, setVisible] = useState(false)

    let [err, Seterr] = useState("")

    let handleRegister = (e) => {
        e.preventDefault()
        let form = e.target

        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let confirm = form.confirm.value
        console.log(name, email, password, confirm);

        Register(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
                verify(res.user)
            })
            .catch(err => {
                console.log(err);
            })





        let verify = (user) => {
            sendEmailVerification(user)

            alert("verify your email")
        }



        if (password != confirm) {
            Seterr("password did not match match")
        }
        else if (password.length < 6) {
            alert("password must be 6 charecter")
        }
        else {
            Seterr("")
        }

    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={visible ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />

                                <div onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <Link to="/Login" className='link'>Have an account</Link>
                            </div>
                            <div>
                                <span className='text-red-600'>{err}</span>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
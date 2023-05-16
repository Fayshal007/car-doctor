import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .then( error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-[#FF3811]">Sign Up</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-wide mx-auto bg-[#FF3811] border-[#FF3811] hover:bg-[#cf2f0f] hover:border-[#FF3811]" />
                            </div>
                        </form>
                        <p className='mt-3'>
                            <small>Already have an account? <Link to='/login' className='text-[#FF3811] font-bold'>Log in</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
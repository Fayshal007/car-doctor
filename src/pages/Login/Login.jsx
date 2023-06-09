import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
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
                        <h1 className="text-5xl font-bold text-[#FF3811]">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-wide mx-auto bg-[#FF3811] border-[#FF3811] hover:bg-[#cf2f0f] hover:border-[#FF3811]" />
                            </div>
                        </form>
                        <p className='mt-3'>
                            <small>New to car doctor? <Link to='/signup' className='text-[#FF3811] font-bold'>Sign Up</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
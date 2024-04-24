import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogIn } from '../../services/redux/api/authThunks';

function LogInForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    async function submitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await dispatch(handleLogIn({ email, password }));
        Navigate("/");
    }

    return (
        <div className="w-full relative h-dvh mb-20 pt-20 md:mb-0 bg-[url('/food.avif')]">
            <div className="bg-overlay"></div>
            <div className="relative w-full h-full md:h-auto md:max-w-128 mx-auto py-8 px-10 md:shadow-custom rounded-md bg-white opacity-90">
                <h4 className='text-center text-2xl font-bold'>Log In</h4>
                <form className="w-full *:w-full *:mb-10 *:rounded-lg *:outline-none" onSubmit={submitHandler}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' className="p-2 bg-zinc-300" ref={emailRef} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />
                    <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white py-3" />
                </form>
                <p className='text-center'><Link to="/signup">Create an account? signup</Link></p>
            </div>
        </div>
    )
}

export default LogInForm
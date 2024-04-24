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
        <div className="w-full h-dvh relative md:pt-20 bg-[url('/food.avif')]">
            <div className="bg-overlay"></div>
            <div className="relative w-full h-full md:h-auto md:max-w-128 mx-auto py-8 px-10 md:rounded-md bg-transparent">
                <h4 className='text-center text-2xl font-bold text-white'>Log In</h4>
                <form className="w-full *:w-full md:*:mb-10 *:mb-10 *:rounded-lg *:outline-none" onSubmit={submitHandler}>
                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" id='email' className="p-2" ref={emailRef} />
                    <label htmlFor="password" className='text-white' >Password</label>
                    <input type="password" id='password' className="p-2" ref={passwordRef} />
                    <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600  py-3 text-white" />
                </form>
                <p className='text-center text-white'><Link to="/signup">Create an account? signup</Link></p>
            </div>
        </div>
    )
}

export default LogInForm
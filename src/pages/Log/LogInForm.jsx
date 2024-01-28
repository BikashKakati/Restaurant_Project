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
        <div className="w-full h-dvh mb-20 pt-20 md:mb-0">
            <div className="relative w-full h-full md:max-w-128 md:h-128 mx-auto py-8 px-10 md:shadow-custom bg-white rounded-md">
                <h4 className='text-center text-2xl font-bold'>Log In</h4>
                <form className="w-full *:w-full *:mb-10 *:rounded-lg" onSubmit={submitHandler}>
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
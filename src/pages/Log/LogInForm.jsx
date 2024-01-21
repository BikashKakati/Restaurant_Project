import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogIn } from '../../services/redux/api/authThunks';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../services/firebase-config';

function LogInForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    async function submitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (isLogin) {
            await dispatch(handleLogIn({ email, password }));
            Navigate("/");
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
            changeMode();
        }
    }

    function changeMode() {
        setIsLogin(prev => !prev)
    }

    return (
        <div className="max-w-128 h-128 mx-auto py-8 px-10 shadow-custom bg-white rounded-md">
            <h4 className='text-center text-2xl font-bold'>{isLogin ? "Log In" : "Sign Up"}</h4>
            <form className="w-full *:w-full *:mb-10 *:rounded-lg" onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className="p-2 bg-zinc-300" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />
                <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white py-3" />
            </form>
            <button className='block mx-auto text-zinc-600 font-semibold'
                onClick={changeMode}>{isLogin ? "Create an account" : "Already have an account?"}
            </button>
        </div>
    )
}

export default LogInForm
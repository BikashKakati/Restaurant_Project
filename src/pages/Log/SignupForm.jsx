import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase-config';
import { toast } from 'react-hot-toast';

function SignupForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const Navigate = useNavigate();

    async function signUpHandler(e) {
        e.preventDefault();
        toast.loading("Loading...");
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        try {
            if (password !== confirmPassword) {
                toast.remove();
                toast.error("password didnot match");
                return;
            }
            await createUserWithEmailAndPassword(auth, email, password);
            toast.remove();
            toast.success("sign up successfully")
            Navigate("/login");
        } catch (err) {
            toast.remove();
            toast.error("email/password invalid");
        }
    }

    return (
        <div className="w-full h-dvh pt-0 md:pt-20 bg-[url('/food.avif')]">
            <div className="bg-overlay"></div>
            <div className="relative w-full h-full md:h-auto md:max-w-128 mx-auto py-8 px-10 bg-transparent md:rounded-md">
                <h4 className='text-center text-2xl font-bold text-white'>Sign Up</h4>
                <form className="w-full *:w-full *:mb-7 md:*:mb-10 *:rounded-lg *:outline-none" onSubmit={signUpHandler}>
                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" id='email' className="p-2" ref={emailRef} />
                    <label htmlFor="password" className='text-white'>Password</label>
                    <input type="password" id='password' className="p-2" ref={passwordRef} />
                    <label htmlFor="confirm-password" className='text-white'>Confirm Password</label>
                    <input type="text" id='confirm-password' className="p-2" ref={confirmPasswordRef} />
                    <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white py-3" />
                </form>
                <p className='text-center text-white'><Link to="/login">Already have an account?</Link></p>
            </div>
        </div>
    )
}

export default SignupForm
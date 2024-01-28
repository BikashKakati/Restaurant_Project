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
            toast.success("sign up successfully")
            Navigate("/login");
        } catch (err) {
            toast.remove();
            toast.error("email/password invalid");
        }
    }

    return (
        <div className="w-full min-h-dvh pt-20 md:mb-0">
            <div className="relative w-full h-full mb-20 md:max-w-128 md:h-128 mx-auto py-8 px-10 md:shadow-custom bg-white rounded-md">
                <h4 className='text-center text-2xl font-bold'>Sign Up</h4>
                <form className="w-full *:w-full *:mb-10 *:rounded-lg" onSubmit={signUpHandler}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' className="p-2 bg-zinc-300" ref={emailRef} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef} />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="text" id='confirm-password' className="p-2 bg-zinc-300" ref={confirmPasswordRef} />
                    <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white py-3" />
                </form>
                <p className='text-center'><Link to="/login">Already have an account?</Link></p>
            </div>
        </div>
    )
}

export default SignupForm
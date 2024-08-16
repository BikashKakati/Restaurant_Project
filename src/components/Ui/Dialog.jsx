import React, { useRef } from 'react'
import googleSvg from "../../assets/google.svg"
import { setAuthModel } from '../../services/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export function Dialog() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    return (
        <div id="static-modal" tabIndex="-1" className="backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full">
            <div className="relative p-4 w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-[2rem] font-semibold text-gray-900 dark:text-white">
                            Login
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { dispatch(setAuthModel(false)) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <form className="w-full *:w-full *:mb-5 *:rounded-lg *:outline-none" >
                            <label htmlFor="email" className='sr-only'>Email</label>
                            <input type="email" id='email' placeholder='Email' className="p-2 border" ref={emailRef} />
                            <label htmlFor="password" className='sr-only' >Password</label>
                            <input type="password" id='password' placeholder='*****' className="p-2 border" ref={passwordRef} />
                            <button type="submit" className="bg-red-500 hover:bg-red-600 py-3 text-white" >Submit</button>
                        </form>
                        <div className="h-[1px] w-full bg-zinc-200 relative">
                            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white'>or</span>
                        </div>
                        <button className="w-full mt-[1rem] flex items-center justify-center gap-3 py-3 border rounded-lg">
                            <div className="w-4 h-4">
                                <img src={googleSvg} alt="google image" className='w-full h-full object-contain object-center' />
                            </div>
                            <p className="">
                                Sign in with Google
                            </p>
                        </button>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        New to Foodauto?&nbsp; <span className='text-red-500'>Create account</span>
                        {/* <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

import React, { useRef } from 'react'
import googleSvg from "../../assets/google.svg"
import { setAuthModel } from '../../services/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export function Dialog({headerData, children, footerData}) {
    const dispatch = useDispatch();
    return (
        <div tabIndex="-1" className="backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full">
            <div className="relative p-4 w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-[2rem] font-semibold text-gray-900 dark:text-white">
                            {headerData}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { dispatch(setAuthModel(false)) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        {children}
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t rounded-b dark:border-gray-600">
                        {footerData}
                    </div>
                </div>
            </div>
        </div>

    )
}

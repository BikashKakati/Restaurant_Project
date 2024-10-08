import React from 'react';
import { useDispatch } from 'react-redux';

export function Dialog({headerData, children, footerData, onCloseModel}) {
    return (
        <div tabIndex="-1" className="backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full">
            <div className="relative p-4 w-full max-w-lg h-full max-h-full">
                <div className="relative bg-white rounded-lg shadow h-full">
                    <div className="flex h-[15%] items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-[2rem] font-semibold text-gray-900">
                            {headerData}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={onCloseModel}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="h-[70%]">
                        {children}
                    </div>
                    <div className="flex items-center h-[15%] p-4 md:p-5 border-t rounded-b">
                        {footerData}
                    </div>
                </div>
            </div>
        </div>

    )
}

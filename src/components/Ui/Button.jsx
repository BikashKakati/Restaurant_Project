import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Button = ({ children, className="", onClose, ...props }) => {
    return (
        <button type='button' className={`bg-red-500 hover:bg-red-600 text-sm md:text-base text-nowrap text-white py-2 px-2 md:px-3 flex items-center gap-1 md:gap-3 rounded-lg ${className}`} {...props}>
            {children}
            {onClose && <span onClick={onClose} className='p-[2px] hover:bg-red-700'><XMarkIcon className='h-5 w-5'/></span>}
        </button>
    )
}

export default Button
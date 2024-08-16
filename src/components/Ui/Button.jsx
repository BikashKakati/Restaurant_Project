import React from 'react'

const Button = ({ children, className="", ...props }) => {
    return (
        <button type='button' className={`bg-red-500 px-[2rem] py-[.5rem] rounded-[.8rem] ${className}`} {...props}>{children}
        </button>
    )
}

export default Button
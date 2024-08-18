import React, { useState } from 'react'
import LogInForm from './LogInForm';
import SignupForm from './SignupForm';

const AuthDialog = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    return (
        isLoginMode ?
            <LogInForm setIsLoginMode={setIsLoginMode} />
            :
            <SignupForm setIsLoginMode={setIsLoginMode} />
    )
}

export default AuthDialog
import React, { useContext, useRef, useState } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/ContextProvider';

function Log() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const {setAddToCartPopup} = useContext(CartContext);
  const {signUp, logIn} = useAuthContext();
  const Navigate = useNavigate();

  async function submitHandler(e){
    e.preventDefault();
    try{
      if(isLogin){
        await logIn(emailRef.current.value, passwordRef.current.value);
        setAddToCartPopup({show:true, msg:"Log in successful!"})
        Navigate("/");
      }else{
        await signUp(emailRef.current.value, passwordRef.current.value);
        setAddToCartPopup({show:true, msg:"Sign up successful!"})
        changeMode();
      }
    }catch(err){
      setAddToCartPopup({show:true, msg:"Invalid email/password"})
    }
  }
  function changeMode(){
    setIsLogin(prev => !prev)
  }
  return (
    <div className="w-full h-full pt-20">
      <div className="max-w-128 h-128 mx-auto py-8 px-10 shadow-custom bg-white rounded-md">
        <h4 className='text-center text-2xl font-bold'>{isLogin ? "Log In" : "Sign Up"}</h4>
        <form className="w-full *:w-full *:mb-10 *:rounded-lg" onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className="p-2 bg-zinc-300" ref={emailRef}/>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className="p-2 bg-zinc-300" ref={passwordRef}/>
          <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white py-3" />
        </form>
        <button className='block mx-auto text-zinc-600 font-semibold'
          onClick={changeMode}>{isLogin ? "Create an account":"Already have an account?"}</button>
      </div>
    </div>
  )
}

export default Log
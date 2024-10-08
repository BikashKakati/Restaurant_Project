import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import googleSvg from "../../assets/google.svg";
import { Dialog } from "../../components/Ui/Dialog";
import { auth, provider } from "../../services/firebase-config";
import { handleSignUp } from "../../services/redux/api/authThunks";
import {
  handleAddUser,
  setAuthModel,
} from "../../services/redux/slices/authSlice";

function SignupForm({ setIsLoginMode }) {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setInputData((prev) => ({ ...prev, [key]: value }));
  }

  async function signUpHandler(e) {
    e.preventDefault();
    const { email, password, confirmPassword } = inputData;
    if (password.trim() !== confirmPassword.trim()) {
      toast.error("password didnot match");
      return;
    }

    try {
      await dispatch(
        handleSignUp({ email: email.trim(), password: password.trim() })
      ).unwrap();
      dispatch(setAuthModel(false));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSignUpWithGoogle() {
    try {
      const { user } = await signInWithPopup(auth, provider);
      dispatch(
        handleAddUser({
          email: user?.email,
          isVerified: user?.emailVerified,
          uid: user?.uid,
          photoUrl: user?.photoURL,
          name: user?.displayName,
        })
      );
      dispatch(setAuthModel(false));
    } catch (err) {
      console.log("erro while signin with google", err?.message);
    }
  }

  return (
    <Dialog
      headerData={"Signup"}
      footerData={
        <FooterData
          onClick={() => {
            setIsLoginMode(true);
          }}
        />
      }
      onCloseModel={() => {
        dispatch(setAuthModel(false));
      }}
    >
      <div className="p-4 md:p-6">
        <form
          className="w-full *:w-full *:mb-5 *:rounded-lg *:outline-none"
          onSubmit={signUpHandler}
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="p-2 border"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password" className="sr-only">
            Email
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-2 border"
            value={inputData.password}
            onChange={handleInputChange}
          />
          <label htmlFor="confirmPassword" className="sr-only">
            Email
          </label>
          <input
            type="text"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 border"
            value={inputData.confirmPassword}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 py-3 text-white disabled:bg-zinc-300"
            disabled={
              !inputData.email ||
              !inputData.password ||
              !inputData.confirmPassword
            }
          >
            Create an account
          </button>
        </form>
        <div className="h-[1px] w-full bg-zinc-200 relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white">
            or
          </span>
        </div>
        <button
          className="w-full mt-[1rem] flex items-center justify-center gap-3 py-3 border rounded-lg"
          onClick={handleSignUpWithGoogle}
        >
          <div className="w-4 h-4">
            <img
              src={googleSvg}
              alt="google image"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <p className="">Sign in with Google</p>
        </button>
      </div>
    </Dialog>
  );
}

export default SignupForm;

function FooterData({ onClick }) {
  return (
    <>
      Already have an account?&nbsp;
      <span className="text-red-500 cursor-pointer" onClick={onClick}>
        Login
      </span>
    </>
  );
}

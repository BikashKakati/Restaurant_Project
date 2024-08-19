import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import googleSvg from "../../assets/google.svg";
import { Dialog } from "../../components/Ui/Dialog";
import { handleLogIn } from "../../services/redux/api/authThunks";
import { handleAddUser, setAuthModel } from "../../services/redux/slices/authSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../services/firebase-config";

function LogInForm({ setIsLoginMode }) {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setInputData((prev) => ({ ...prev, [key]: value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    const { email, password } = inputData;
    try {
      await dispatch(handleLogIn({ email:email.trim(), password:password.trim() })).unwrap();
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
      console.log("erro while signin with google",err?.message);
    }
  }

  return (
    <Dialog
      headerData={"Login"}
      footerData={
        <FooterData
          onClick={() => {
            setIsLoginMode(false);
          }}
        />
      }
      onCloseModel={() => { dispatch(setAuthModel(false)) }}
    >
      <form
        className="w-full *:w-full *:mb-5 *:rounded-lg *:outline-none"
        onSubmit={submitHandler}
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
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-2 border"
          value={inputData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 py-3 text-white disabled:bg-zinc-300"
          disabled={!inputData.email || !inputData.password}
        >
          Submit
        </button>
      </form>
      <div className="h-[1px] w-full bg-zinc-200 relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white">
          or
        </span>
      </div>
      <button className="w-full mt-[1rem] flex items-center justify-center gap-3 py-3 border rounded-lg" onClick={handleSignUpWithGoogle}>
        <div className="w-4 h-4">
          <img
            src={googleSvg}
            alt="google image"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <p className="">Sign in with Google</p>
      </button>
    </Dialog>
  );
}

export default LogInForm;

function FooterData({ onClick }) {
  return (
    <>
      New to Foodauto?&nbsp;
      <span className="text-red-500 cursor-pointer" onClick={onClick}>
        Create account
      </span>
    </>
  );
}

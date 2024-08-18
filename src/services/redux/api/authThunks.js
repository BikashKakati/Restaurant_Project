import { createAsyncThunk } from "@reduxjs/toolkit";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const handleLogIn = createAsyncThunk(
    "auth/handleLogIn",
    async function ({email, password}) {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            return { email: user.email, isVerified: user.emailVerified, uid: user.uid };
        }catch(err){
            throw new Error(err.message);
        }
    }
)
export const handleSignUp = createAsyncThunk(
    "auth/handleSignUp",
    async function ({email, password}) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            return { email: user.email, isVerified: user.emailVerified, uid: user.uid };
        }catch(err){
            throw new Error(err.message);
        }
    }
)
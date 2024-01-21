import { createAsyncThunk } from "@reduxjs/toolkit";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export const handleLogIn = createAsyncThunk(
    "auth/handleLogIn",
    async function ({email, password}) {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            return { email: user.email, isVerified: user.emailVerified, id: user.uid };
        }catch(err){
            throw new Error(err.message);
        }
    }
)
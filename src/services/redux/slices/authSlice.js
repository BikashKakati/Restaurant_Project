import { createSlice } from "@reduxjs/toolkit";
import { handleLogIn } from "../api/authThunks";
import { toast } from "react-hot-toast";


const LOCAL_STORAGE_KEY = "AUTH_DATA";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        currentUser:JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null,
        authModelOn:false,
    },
    reducers:{
        handleLogOut:(state)=>{
            state.currentUser = null;
            localStorage.setItem(LOCAL_STORAGE_KEY,null);
        },
        setAuthModel:(state,action)=>{
            state.authModelOn = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(handleLogIn.pending,(state)=>{
            toast.loading("Loading...");
        }).addCase(handleLogIn.fulfilled, (state,action) =>{
            state.currentUser = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
            toast.remove();
            toast.success("login successfully!");
        }).addCase(handleLogIn.rejected,(state)=>{
            toast.remove();
            toast.error("invalid email/password");
        })
    }
})

export default authSlice.reducer
export const {handleLogOut, setAuthModel} = authSlice.actions
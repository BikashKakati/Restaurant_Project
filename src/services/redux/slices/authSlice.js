import { createSlice } from "@reduxjs/toolkit";
import { handleLogIn, handleSignUp } from "../api/authThunks";
import { toast } from "react-hot-toast";


const LOCAL_STORAGE_KEY = "AUTH_DATA";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        currentUser:JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null,
        authModelOn:false,
    },
    reducers:{
        handleAddUser:(state,action)=>{
            state.currentUser = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
        },
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
        }),

        
        builder.addCase(handleSignUp.pending,(state)=>{
            toast.loading("Loading...");
        }).addCase(handleSignUp.fulfilled, (state,action) =>{
            state.currentUser = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
            toast.remove();
            toast.success("login successfully!");
        }).addCase(handleSignUp.rejected,(state)=>{
            toast.remove();
            toast.error("invalid email/password");
        })
        
    }
})

export default authSlice.reducer
export const {handleLogOut, setAuthModel,handleAddUser} = authSlice.actions
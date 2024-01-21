import { createSlice } from "@reduxjs/toolkit";
import { handleLogIn } from "../api/authThunks";


const LOCAL_STORAGE_KEY = "AUTH_DATA";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        currentUser:JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null,
    },
    reducers:{
        handleLogOut:(state)=>{
            state.currentUser = null;
            localStorage.setItem(LOCAL_STORAGE_KEY,null);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(handleLogIn.fulfilled, (state,action) =>{
            state.currentUser = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
        }).addCase(handleLogIn.rejected,(state)=>{
            console.log("invalid email/password");
        })
    }
})

export default authSlice.reducer
export const {handleLogOut} = authSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import { getAllMeals, removeCarts, removeWholeCart, setCarts } from "../api/cartThunks";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartDetails:[],
        totalAmount:0,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(setCarts.fulfilled, (state,action) =>{
            const {updatedMeal,existingMealIdx} = action.payload;
            let existQ = 0;
            if(existingMealIdx >= 0){
                existQ = state.cartDetails[existingMealIdx]?.quantity;
                state.cartDetails[existingMealIdx] = updatedMeal;
            }else{
                state.cartDetails.push(updatedMeal);
            }
            
            state.totalAmount += updatedMeal.price * (updatedMeal.quantity-existQ);
        }).addCase(setCarts.rejected,(state,action)=>{
            toast.error("something went wrong!");
        });

        builder.addCase(removeCarts.fulfilled, (state,action) =>{
            const {updatedMeal,existingMealIdx}= action.payload;
            state.cartDetails[existingMealIdx] = updatedMeal;
            state.totalAmount -= updatedMeal.price;
        })

        builder.addCase(removeWholeCart.pending, (state,action) =>{
            toast.loading("Loading...");
        }).addCase(removeWholeCart.fulfilled, (state,action) =>{
            const existingMeal = state.cartDetails.find(cart => cart.id === action.payload);
            state.cartDetails = state.cartDetails.filter(cart => cart.id !== action.payload);
            state.totalAmount -= existingMeal.price * existingMeal.quantity;
            toast.remove();
            toast.success("remove meal successfully!");
        })
        builder.addCase(getAllMeals.fulfilled,(state, action) =>{
            state.cartDetails = action.payload;
            state.totalAmount = state.cartDetails.reduce((ini,curr) => ini + (curr.quantity * curr.price),0);
        })

    }
})

export default cartSlice.reducer;

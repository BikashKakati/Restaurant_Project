import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const setCarts = createAsyncThunk(
    "cart/setCarts",
    async function (mealDetails,store) {
        const {getState} = store;
        const userId = getState().auth.currentUser?.uid;
        const cartData = getState().cart.cartDetails;
        const existingMealIdx = cartData.findIndex(cart => cart.id === mealDetails.id);
        const updatedMeal = existingMealIdx>=0 ? {...mealDetails, quantity: mealDetails.quantity+cartData[existingMealIdx].quantity} : mealDetails;
        try {
            const docRef = doc(db,`cartDetails/${userId}/carts/${mealDetails.id}`);
            await setDoc(docRef, updatedMeal);
            return {updatedMeal,existingMealIdx};
        } catch (err) {
            throw new Error(err.message);
        }
    }
)
export const removeCarts = createAsyncThunk(
    "cart/removeCarts",
    async function (mealId,{getState}) {
        const userId = getState().auth.currentUser?.uid;
        const cartData = getState().cart.cartDetails;
        const existingMealIdx = cartData.findIndex(cart => cart.id === mealId);
        const existingMeal = cartData[existingMealIdx];
        const updatedMeal = {...existingMeal, quantity:existingMeal.quantity-1};
        try {
            const docRef = doc(db,`cartDetails/${userId}/carts/${mealId}`);
            await setDoc(docRef, updatedMeal);
            return {updatedMeal,existingMealIdx};
        } catch (err) {
            throw new Error(err.message);
        }
    }
)
export const removeWholeCart = createAsyncThunk(
    "cart/removeWholeCart",
    async function (mealId,{getState}) {
        const userId = getState().auth.currentUser?.uid;
        try {
            const docRef = doc(db,`cartDetails/${userId}/carts/${mealId}`);
            await deleteDoc(docRef);
            return mealId;
        } catch (err) {
            throw new Error(err.message);
        }
    }
)
export const getAllMeals = createAsyncThunk(
    "mail/getAllMeals",
    async function (_, { getState }) {
        const userId = getState().auth.currentUser?.uid;
        try {
            const docRef = collection(db, `cartDetails/${userId}/carts`);
            const storageData = await getDocs(docRef);
            const data = storageData.docs?.map((doc) => doc?.data());
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
)
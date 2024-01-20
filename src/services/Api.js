import axios from "axios";
import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";
export async function fetchApiData(endPoint){
    try{
        const {data} = await axios.get(`${BASE_URL + endPoint}`);
        return data;
    }catch(err){
        console.log(err);
    }
}
export async function setCartDetails(userId,expenseData){
    try{
        const docRef = doc(db,`currentUser/${userId}/expense`,expenseData.id);
        await setDoc(docRef, expenseData);
    }catch(err){
        throw new Error(err.message);
    }
}

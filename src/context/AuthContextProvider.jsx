import { createContext, useContext, useEffect, useReducer } from "react";
import { INITIAL_STATE, actionType, authReducer } from "./authReducer";
import {auth} from "../services/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext =  createContext(INITIAL_STATE);
const LOCAL_STORAGE_KEY = "AUTH_DATA";


export function AuthContextProvider(props){
    const [state, dispatch] = useReducer(authReducer,INITIAL_STATE);

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    async function logIn(email,password){
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        dispatch({type:actionType.LOG_IN, payload:user});
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(user));
    }
    function logOut(){
        dispatch({type:actionType.LOG_OUT});
        localStorage.setItem(LOCAL_STORAGE_KEY,null);
    }

    const contextValue = {
        currentUser:state.currentUser,
        signUp,
        logIn,
        logOut,
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

import { createContext, useContext, useEffect, useReducer } from "react";
import { INITIAL_STATE, actionType, authReducer } from "./authReducer";
import {auth} from "../services/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext =  createContext(INITIAL_STATE);
const LOCAL_STORAGE_KEY = "AUTH_DATA";

export function useAuthContext(){
    return useContext(AuthContext);
}


export function AuthContextProvider(props){
    const [state, dispatch] = useReducer(authReducer,INITIAL_STATE);

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    async function logIn(email,password){
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        dispatch({type:actionType.LOG_IN, payload:user});
    }
    function logOut(){
        dispatch({type:actionType.LOG_OUT});
    }

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(state.currentUser))
    },[state.currentUser])

    const contextValue = {
        currentUser:state.currentUser,
        signUp,
        logIn
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

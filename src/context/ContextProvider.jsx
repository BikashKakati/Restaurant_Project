
import { createContext, useContext, useState} from "react";
import { INITIAL_STATE, cartReducer } from "./cartReducer";
import { useReducer } from "react";

export const CartContext = createContext();

function ContextProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    
    // it is a simple state, only for popup logic that is why used direct state.
    const [addToCartPopup, setAddToCartPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    function addToCartHandler(mealDetails){
        dispatch({type:"ADD_TO_CART", payload:mealDetails});
    }
    function removeFromCartHandler(id){
        dispatch({type:"REMOVE_FROM_CART", payload:id});
    }
    function removeWholeMeal(id){
        dispatch({type:"REMOVE_WHOLE_MEAL", payload:id});
    }
    const cartDetails = {
        cartMealsDetails : state.cartMealsDetails,
        totalPrice: state.totalPrice,
        addToCartHandler,
        removeFromCartHandler,
        removeWholeMeal,
        addToCartPopup,
        setAddToCartPopup,
        popupMessage,
        setPopupMessage
    }
    return(
        <CartContext.Provider value={cartDetails}>
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider
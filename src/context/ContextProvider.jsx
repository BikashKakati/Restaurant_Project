
import { createContext, useContext} from "react";
import { INITIAL_STATE, cartReducer } from "./cartReducer";
import { useReducer } from "react";

export const CartContext = createContext();

function ContextProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    function addToCartHandler(mealDetails){
        dispatch({type:"ADD_TO_CART", payload:mealDetails})
    }
    function removeFromCartHandler(id){
        dispatch({type:"REMOVE_FROM_CART", payload:id})
    }
    const cartDetails = {
        cartMealsDetails : state.cartMealsDetails,
        totalPrice: state.totalPrice,
        addToCartHandler,
        removeFromCartHandler
    }
    return(
        <CartContext.Provider value={cartDetails}>
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider
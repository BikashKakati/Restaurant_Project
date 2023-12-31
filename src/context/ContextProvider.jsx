
import { createContext, useContext} from "react";
import { INITIAL_STATE, cartReducer } from "./cartReducer";
import { useReducer } from "react";

export const CartContext = createContext();

function ContextProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    console.log(state);

    function addCartHandler(mealDetails){
        dispatch({type:"ADDTO_CART", payload:mealDetails})
    }
    const cartDetails = {
        cartMealsDetails : state.cartMealsDetails,
        totalPrice: state.totalPrice,
        addCartHandler,
    }
    return(
        <CartContext.Provider value={cartDetails}>
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider
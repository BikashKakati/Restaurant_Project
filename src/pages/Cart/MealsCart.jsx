import { useContext } from "react";
import Wrapper from "../../components/Ui/Wrapper"
import { CartContext } from "../../context/ContextProvider";
import CartMealCard from "./CartMealCard";
import emptyCartFallback from "../../assets/emptyCart.webp";
function MealsCart() {
    const { cartMealsDetails, totalPrice } = useContext(CartContext);
    return (
        <div className="w-full h-full pt-20 mb-10">
            <Wrapper className="h-full">
                <div className="relative h-full cart-container w-full bg-white shadow-custom rounded-md p-3 flex flex-col justify-between">
                    <div className="w-full h-full">
                    {
                        !cartMealsDetails.length &&
                        <>
                            <div className="w-64 mx-auto mt-20">
                                <img src={emptyCartFallback} alt="emptyCartFallback" />
                            </div>
                            <p className="text-center text-xl font-medium mt-4">Your meal basket is empty!</p>
                        </>
                    }
                    {
                        cartMealsDetails.map(cartMeal => {
                            return (
                                <CartMealCard key={cartMeal.id} cartMeal={cartMeal} />
                            )
                        })
                    }
                    </div>
   
                    <p className="my-5 mx-10 text-lg font-medium">Total Price ₹{totalPrice}</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default MealsCart;
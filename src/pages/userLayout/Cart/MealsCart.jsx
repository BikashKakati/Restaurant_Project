import { useSelector } from "react-redux";
import emptyCartFallback from "../../../assets/emptyCart.webp";
import Wrapper from "../../../components/Ui/Wrapper";
import CartMealCard from "./CartMealCard";
import { useEffect } from "react";

function MealsCart() {
    const {cartDetails, totalAmount} = useSelector(state => state.cart);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <div className="relative w-full min-h-dvh pt-20">
            <Wrapper className="h-full mb-32 md:mb-10">
                <div className="relative h-full cart-container w-full bg-white shadow-custom rounded-md p-3 flex flex-col justify-between">
                    <div className="w-full h-full">
                        {
                            !cartDetails.length &&
                            <>
                                <div className="w-64 mx-auto mt-20">
                                    <img src={emptyCartFallback} alt="emptyCartFallback" />
                                </div>
                                <p className="text-center text-xl font-medium mt-4">Your meal basket is empty!</p>
                            </>
                        }
                        {
                            cartDetails.map(cartMeal => {
                                return (
                                    <CartMealCard key={cartMeal?.id} cartMeal={cartMeal} />
                                )
                            })
                        }
                    </div>

                    <p className="my-5 mx-10 text-lg font-medium">Total Price ₹{totalAmount}</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default MealsCart;
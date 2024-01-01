import { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";
import { PlusIcon, MinusIcon} from "@heroicons/react/24/solid";
function CartMealCard({ cartMeal }) {
    const { addToCartHandler, removeFromCartHandler } = useContext(CartContext);
    const handleAddToCart = () => {
        addToCartHandler(cartMeal);
    }
    const handleRemoveFromCart = () => {
        removeFromCartHandler(cartMeal.id);
    }
    return (
        <div className="w-full flex items-center justify-between gap-5 p-4 border-b-2 flex-wrap">
            <div className="flex items-center justify-start">
                <div className="w-20 mr-5">
                    <img src={cartMeal.image} alt={cartMeal.name} className="rounded-lg object-cover object-center" />
                </div>
                <div className="">
                    <p className="text-sm">{cartMeal.name}</p>
                    <span className="text-xl text-center mr-6 font-medium">₹{cartMeal.price}</span>
                    <span className="text-sm text-center">qty × {cartMeal.quantity}</span>
                    <p className="text-zinc-600">{cartMeal.category}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="px-3 py-2 text-xl bg-red-500" onClick={handleAddToCart}>
                    <PlusIcon className="h-6 w-6"/>
                </button>
                <span className="px-3 py-2 text-2xl">{cartMeal.quantity}</span>
                <button className="px-3 py-2 text-xl bg-red-500" onClick={handleRemoveFromCart}>
                    <MinusIcon className="h-6 w-6"/>
                </button>
            </div>
        </div>
    )
}
export default CartMealCard
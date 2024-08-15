import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { removeCarts, removeWholeCart, setCarts } from "../../../services/redux/api/cartThunks";


function CartMealCard({ cartMeal }) {
    const dispatch = useDispatch();

    const handleAddToCart = async() => {
        await dispatch(setCarts({...cartMeal, quantity: 1})).unwrap();
    }

    const handleRemoveFromCart = async(mealId) => {
        if(cartMeal?.quantity > 1){
            await dispatch(removeCarts(mealId)).unwrap();
        }else{
            await dispatch(removeWholeCart(mealId)).unwrap();
        }
    }
    const handleRemoveWholeMeal = async(mealId) =>{
        await dispatch(removeWholeCart(mealId)).unwrap();
    }
    return (
        <div className="w-full flex items-center justify-between gap-5 p-4 border-b-2 flex-wrap">
            <div className="flex items-center justify-start">
                <div className="w-20 mr-5">
                    <img src={cartMeal?.image} alt={cartMeal?.name} className="rounded-lg object-cover object-center" />
                </div>
                <div className="">
                    <p className="text-sm">{cartMeal?.name}</p>
                    <span className="text-xl text-center mr-6 font-medium">₹{cartMeal?.price}</span>
                    <span className="text-base text-center font-bold">qty × {cartMeal?.quantity}</span>
                    <p className="text-zinc-600">{cartMeal?.category}</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="px-4 py-2 bg-zinc-600 text-white rounded-xl" onClick={()=> handleRemoveWholeMeal(cartMeal?.id)}>Remove</button>
                <button className="px-3 py-2 text-xl bg-red-500" onClick={handleAddToCart}>
                    <PlusIcon className="h-6 w-6"/>
                </button>
                <button className="px-3 py-2 text-xl bg-red-500" onClick={()=>handleRemoveFromCart(cartMeal?.id)}>
                    <MinusIcon className="h-6 w-6"/>
                </button>
            </div>
        </div>
    )
}
export default CartMealCard
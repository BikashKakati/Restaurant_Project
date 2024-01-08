import { useContext, useRef } from "react";
import { CartContext } from "../../context/ContextProvider";
import { LazyLoadImg } from "../Ui/LazyLoadImage";
import fallBackImg from "../../assets/NoImageFallback.svg.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Card({ mealData, cat }) {
    const { addToCartHandler,setAddToCartPopup} = useContext(CartContext);
    const quantityRef = useRef();

    const { strMeal: name, strMealThumb: image, strCategory: category, idMeal: id } = mealData;
    const imageLink = mealData?.strMealThumb ? image : fallBackImg;
    const mealPrice = Number(id.slice(2));

    const handleAddToCart = () => {
        const enteredQuantity = Number(quantityRef.current.value);
        if(isNaN(enteredQuantity) || enteredQuantity>10 || !enteredQuantity){
            setAddToCartPopup({show:true, msg:"invalid quantity"});
            return;
        }
        addToCartHandler({
            id,
            name,
            image,
            category,
            quantity:enteredQuantity,
            price: mealPrice,
        })
        setAddToCartPopup({show:true, msg:"Meal added to the cart!"});
        quantityRef.current.value = "";
    }

    return (
        <div className="group relative h-96 w-80 p-4 rounded-2xl hover:shadow-custom transition-all">
            <Link to={`/details/${id}`} className="h-full w-full group-hover:opacity-75">
                <div className="h-72 w-full">
                    <LazyLoadImg src={imageLink} alt={name} className="object-cover object-center rounded-2xl" />
                </div>
                <div className="w-ful flex justify-between items-start gap-2 mx-2">
                    <p className="text-lg font-medium">{name ? name : "name"}</p>
                    <div className="mt-3">
                        <span className="font-medium whitespace-nowrap bg-zinc-500 px-2 py-1 text-white rounded-xl">{`Price ₹${mealPrice}`}</span>
                        <p className="text-m text-zinc-500">{category ? category : cat ? cat : "category"}</p>
                    </div>
                </div>
            </Link>
            <div className="w-44 hidden items-center justify-center gap-6 absolute p-5 bg-zinc-800 rounded-full cart-icon-position cursor-pointer popup-animation group-hover:flex ">
                <ShoppingCartIcon className="h-7 w-7 text-white hover:text-red-500" onClick={handleAddToCart}/>
                <input type="number" defaultValue="1" min="1" max="10" className="w-14 px-2 outline-none rounded-md" ref={quantityRef}/>
            </div>
        </div>
    )
}

export default Card
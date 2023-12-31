import { LazyLoadImg } from "../Ui/LazyLoadImage";
import fallBackImg from "../../assets/NoImageFallback.svg.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/ContextProvider"

function Card({ mealData, cat }) {
    const { addCartHandler } = useContext(CartContext);

    const { strMeal: name, strMealThumb: image, strCategory: category, idMeal: id } = mealData;
    const imageLink = mealData?.strMealThumb ? image : fallBackImg;
    const mealPrice = Number(id.slice(2));

    const handleAddToCart = () => {
        addCartHandler({
            id,
            name,
            image,
            category,
            quantity: 1,
            price: mealPrice,
        })
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
            <div className="hidden absolute p-5 bg-zinc-800 rounded-full cart-icon-position group-hover:block cursor-pointer popup-animation" onClick={handleAddToCart}>
                <ShoppingCartIcon className="h-7 w-7 text-white" />
            </div>
        </div>
    )
}

export default Card
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fallBackImg from "../../assets/NoImageFallback.svg.png";
import { setCarts } from "../../services/redux/api/cartThunks";
import { LazyLoadImg } from "../Ui/LazyLoadImage";

function Card({ mealData, cat }) {
    const quantityRef = useRef();
    const dispatch = useDispatch();

    const { strMeal: name, strMealThumb: image, strCategory: category, idMeal: id } = mealData;
    const realCategory = category? category : cat;
    const imageLink = mealData?.strMealThumb ? image : fallBackImg;
    const mealPrice = Number(id.slice(2));

    const handleAddToCart = async() => {
        const enteredQuantity = Number(quantityRef.current.value);
        if(isNaN(enteredQuantity) || !enteredQuantity){
            toast.error("invalid quantity!");
            return;
        }
        if(enteredQuantity >10){
            toast.error("please reduce the quantity!");
            return;
        }
        toast.loading("Loading...");
        await dispatch(setCarts({
            id,
            name,
            image,
            category:realCategory,
            quantity:enteredQuantity,
            price: mealPrice,
        })).unwrap()
        toast.remove();
        toast.success("meal added to cart");
    }

    return (
        <div className="group relative h-96 w-80 p-4 rounded-2xl border-2 md:border-none md:shadow-none md:hover:shadow-custom transition-all">
            <Link to={`/details/${id}`} className="h-full w-full md:group-hover:opacity-75">
                <div className="h-72 w-full">
                    <LazyLoadImg src={imageLink} alt={name} className="object-cover object-center rounded-2xl" />
                </div>
                <div className="w-ful flex justify-between items-start gap-2 mx-2">
                    <p className="text-base md:text-lg font-medium">{name ? name.slice(0,20) : "name"}{name.length > 20 && "..."}</p>
                    <div className="mt-3">
                        <span className="font-medium whitespace-nowrap bg-zinc-500 px-2 py-1 text-white rounded-xl">{`Price ₹${mealPrice}`}</span>
                        <p className="text-m text-zinc-500">{realCategory ? realCategory : "category"}</p>
                    </div>
                </div>
            </Link>
            <div className="md:w-44 md:hidden items-center justify-center gap-6 absolute top-[-5px] left-[-5px] md:cart-icon-position p-3 md:p-5 bg-zinc-800 rounded-full cursor-pointer md:popup-animation md:group-hover:flex ">
                <ShoppingCartIcon className="h-7 w-7 active:text-red-500 text-white md:hover:text-red-500" onClick={handleAddToCart}/>
                <input type="number" defaultValue="1" min="1" max="10" className="hidden md:block w-14 px-2 outline-none rounded-md" ref={quantityRef}/>
            </div>
        </div>
    )
}

export default Card
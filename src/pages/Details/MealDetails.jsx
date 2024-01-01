import { useParams } from "react-router-dom"
import { useFetch } from "../../hook/useFetch";
import { useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Wrapper from "../../components/Ui/Wrapper";
import { Loader } from "../../components/Ui/loader";
import { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";

function MealDetails() {
    const { addToCartHandler } = useContext(CartContext);
    const { id } = useParams();
    const { data, loading } = useFetch(`lookup.php?i=${id}`);
    const { strArea: place, strCategory: category, strMeal: name, strMealThumb: image, strInstructions: details, strIngredient1: ingre1, strIngredient2: ingre2, strIngredient3: ingre3, } = data?.meals ? data?.meals[0] : {};
    const mealPrice = Number(id.slice(2));

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    function handleAddToCart(){
        addToCartHandler(
            {
                id,
                name,
                image,
                category,
                quantity: 1,
                price: mealPrice,
            }
        )
    }

    return (

        <div className="w-full h-full pt-20">
            {loading && <Loader initial={true} />}
            {
                !loading &&
                <Wrapper className="min-h-96 flex items-start flex-col justify-center gap-10">
                    <div className="max-w-145 w-full my-2 mx-auto basis-full shadow-custom rounded-xl">
                        <img src={image} alt={name} className="h-96 w-full object-cover object-center rounded-xl" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-medium">{name}</p>
                        <div className="mt-5 flex items-center justify-start *:px-4 *:py-3 *:bg-zinc-600 *:rounded-3xl *:text-white *:mr-8">
                            <span >{ingre1}</span>
                            <span >{ingre2}</span>
                            <span >{ingre3}</span>
                        </div>
                        <div className="mt-5 flex items-center justify-start gap-5">
                            <span className="text-xl font-normal text-zinc-700 ">{category}</span>
                            <span className="text-xl font-normal text-zinc-700 italic">{place}</span>
                            <button className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white flex items-center gap-3 rounded-md cursor-pointer" onClick={handleAddToCart}>
                                <ShoppingCartIcon className="h-6 w-6" />
                                Add To Cart
                            </button>
                        </div>
                        <p className="text-lg font-medium text-zinc-900 mt-3">{details}</p>
                    </div>
                </Wrapper>
            }
        </div>
    )
}

export default MealDetails
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Ui/Loader";
import Wrapper from "../../components/Ui/Wrapper";
import { useFetch } from "../../hook/useFetch";
import { setCarts } from "../../services/redux/api/cartThunks";

function MealDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, loading } = useFetch(`lookup.php?i=${id}`);

    const mealData = data?.meals ? data.meals[0] : {};
    const { strArea: place = "place", strCategory: category = "category", strMeal: name = "name", strMealThumb: image = "image", strInstructions: details = "details" } = mealData;
    
    const mealPrice = Number(id.slice(2));

    const ingredients = Object.entries(mealData).filter(ele => {
        // to filter out other data and blank ingredient
        if (ele[0].includes("strIngredient") && ele[1].length) {
            return ele;
        }
    })


    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    function handleAddToCart() {
        dispatch(setCarts({
            id,
            name,
            image,
            category,
            quantity: 1,
            price: mealPrice,
        }))
        toast.success("meal added to cart");
    }

    return (

        <div className="w-full min-h-dvh pt-20">
            {loading && <Loader initial={true} />}
            {
                !loading &&
                <Wrapper className="min-h-96 flex items-start flex-col justify-center gap-10 mb-20">
                    <div className="max-w-145 w-full h-full my-2 mx-auto basis-full shadow-custom rounded-xl">
                        <img src={image} alt={name} className="h-96 w-full object-cover object-center rounded-xl" />
                    </div>
                    <div className="w-full">
                        <p className="text-xl md:text-3xl font-medium">{name}</p>
                        <div className="mt-5 bg-zinc-200 p-4 rounded-md flex flex-wrap items-center justify-start gap-2 md:gap-5 text-nowrap *:px-4 *:py-1 md:*:py-2 *:bg-zinc-600 *:rounded-3xl *:text-white *:text-xs md:*:text-sm">
                            {
                                ingredients?.map(ingred => <span key={ingred[0]}>{ingred[1]}</span>)
                            }
                        </div>
                        <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                            <span className="text-lg md:text-xl font-normal text-zinc-700 ">{category}</span>
                            <span className="text-lg md:text-xl font-normal text-zinc-700 italic">{place}</span>
                            <button className="px-4 py-2 md:py-3 bg-red-500 hover:bg-red-600 text-white flex items-center gap-3 rounded-md cursor-pointer" onClick={handleAddToCart}>
                                <ShoppingCartIcon className="h-6 w-6" />
                                Add To Cart
                            </button>
                        </div>
                        <h5 className="mt-5 mb-1 text-xl md:text-2xl font-semibold text-zinc-800">Recipe</h5>
                        <p className="text-sm md:text-lg font-medium text-zinc-600 ">{details}</p>
                    </div>
                </Wrapper>
            }
        </div>
    )
}

export default MealDetails
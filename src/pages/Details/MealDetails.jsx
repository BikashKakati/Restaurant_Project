import { useParams } from "react-router-dom"
import { useFetch } from "../../hook/useFetch";
import Wrapper from "../../components/Ui/Wrapper";
import { Loader } from "../../components/Ui/loader";
import { useEffect } from "react";

function MealDetails() {
    const { id } = useParams();
    const { data, loading } = useFetch(`lookup.php?i=${id}`);
    const { strArea: place, strCategory: category, strMeal: name, strMealThumb: image, strInstructions: details, strIngredient1: ingre1, strIngredient2: ingre2, strIngredient3: ingre3, } = data?.meals ? data?.meals[0] : {};

    useEffect(()=>{
        window.scroll(0,0);
    },[])

    return (

        <div className="w-full h-full pt-20">
            {loading && <Loader initial={true}/>}
            {
                !loading &&
                <Wrapper className="min-h-96 flex items-start flex-col justify-center gap-10">
                    <div className="max-w-145 w-full my-2 mx-auto basis-full shadow-custom rounded-xl">
                        <img src={image} alt={name} className="h-96 w-full object-cover object-center rounded-xl" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-medium">{name}</p>
                        <div className="mt-3 flex items-center justify-start">
                            <span className="px-4 py-3 bg-zinc-600 rounded-3xl text-white mr-8">{ingre1}</span>
                            <span className="px-4 py-3 bg-zinc-600 rounded-3xl text-white mr-8">{ingre2}</span>
                            <span className="px-4 py-3 bg-zinc-600 rounded-3xl text-white mr-8">{ingre3}</span>
                        </div>
                        <div className="mt-3">
                            <span className="text-xl font-normal text-zinc-700 mr-8">{category}</span>
                            <span className="text-xl font-normal text-zinc-700 italic">{place}</span>
                        </div>
                        <p className="text-lg font-medium text-zinc-900 mt-3">{details}</p>
                    </div>
                </Wrapper>
            }
        </div>
    )
}

export default MealDetails
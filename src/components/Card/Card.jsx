import { LazyLoadImg } from "../Ui/LazyLoadImage";
import fallBackImg from "../../assets/NoImageFallback.svg.png";
import { Link } from "react-router-dom";

function Card({ mealData, cat}) {
    const { strMeal: name, strMealThumb: image, strCategory: category, idMeal: id } = mealData;
    const imageLink = mealData?.strMealThumb ? image : fallBackImg;
    return (
        <Link to={`/details/${id}`}>
            <div className="h-96 w-80 p-4 rounded-2xl hover:shadow-custom">
                <div className="h-72 w-full">
                    <LazyLoadImg src={imageLink} alt={name} className="w-full h-full object-cover object-center rounded-2xl" />
                </div>
                <div className="w-ful">
                    <p className="text-lg font-medium">{name ? name : "name"}</p>
                    <p className="text-m text-zinc-500">{category ? category : cat ? cat : "category"}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
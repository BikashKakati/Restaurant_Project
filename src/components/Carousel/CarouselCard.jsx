import { Link } from "react-router-dom";

function CarouselCard({ cardData }) {
    const { idCategory: id, strCategory: cat, strCategoryThumb: image } = cardData;
    return (
        <Link to={`/categories/${cat}`} className="w-full">
            <div className="w-full flex flex-col justify-start items-center">
                <div className="w-40 h-40 rounded-full shadow-custom m-2">
                    <img src={image} alt={cat} className="w-full h-full object-center object-cover rounded-full" />
                </div>
                <p className="block m-auto text-center text-xl mt-2">{cat}</p>
            </div>
        </Link>
    )
}
export default CarouselCard
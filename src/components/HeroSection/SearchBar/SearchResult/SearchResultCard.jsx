import { Link } from "react-router-dom";
import { LazyLoadImg } from "../../../Ui/LazyLoadImage";
import SearchResultSkeleton from "./SearchResultSkeleton";

function SearchResultCard({ searchResults, searching }) {
    return (
        <div className="absolute bottom-0 left-0 translate-y-full w-full rounded-2xl bg-zinc-200 py-2 px-4 flex flex-wrap items-start justify-center gap-4 shadow-2xl">
            {
                searching &&
                (
                    <>
                        <SearchResultSkeleton />
                        <SearchResultSkeleton />
                        <SearchResultSkeleton />
                        <SearchResultSkeleton />
                    </>
                )
            }
            {
                searchResults?.map((meal) => {
                    const { idMeal: id, strMealThumb: image, strMeal: name } = meal;
                    return (
                        <Link to={`/details/${id}`} key={id}>
                            <div className="h-16 w-36 flex items-center bg-zinc-400 rounded-2xl shadow-custom">
                                <div className="h-16 w-16 mr-2">
                                    <LazyLoadImg src={image} alt={name} className="w-full h-16 object-cover object-center rounded-2xl" />
                                </div>
                                <span className="text-sm text-black whitespace-pre-wrap">{name.slice(0, 15) + ".."}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default SearchResultCard;
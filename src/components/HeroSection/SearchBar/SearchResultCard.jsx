function SearchResultCard({ searchResults }) {
    return (
        <div className="absolute bottom-0 left-0 translate-y-full w-full rounded-2xl bg-slate-300 py-2 px-6 flex flex-wrap items-start justify-center gap-4">
            {
                searchResults?.map((meal) => {
                    const { idMeal:id, strMealThumb: image, strMeal:name } = meal;
                    return (
                        <div key={id} className="h-16 w-36 flex justify-between items-center bg-zinc-400 rounded-2xl">
                            <div className="h-full w-16 ">
                                <img src={image} className="w-full h-full object-cover object-center rounded-2xl"/>
                            </div>
                            <span className="text-sm text-black whitespace-break-spaces">{name.slice(0,10)+"..."}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SearchResultCard;
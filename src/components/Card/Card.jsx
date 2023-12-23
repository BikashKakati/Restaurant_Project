function Card({mealData}){
    const {strMeal:name, strMealThumb:image, strCategory:category, idMeal:id} = mealData
    return (
        <div className="w-80 min-h-72 p-2 rounded-2xl hover:shadow-xl">
            <div className="w-full h-60">
                <img src={image} alt={"meal"+id} className="w-full h-full object-cover object-center rounded-2xl"/>
            </div>
            <div className="w-ful">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-m text-zinc-500">{category}</p>
            </div>
        </div>
    )
}

export default Card
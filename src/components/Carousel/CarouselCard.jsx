function CarouselCard({cardData}){
    const {idCategory: id, strCategory: cat, strCategoryThumb: image} = cardData;
    return(
        <div className="h-42 w-full flex flex-col justify-center align-top">
            <div className="w-40 h-40 rounded-full shadow-custom m-2">
                <img src={image} alt={"cat"+id} className="w-full h-full object-center object-cover rounded-full"/>
            </div>
            <p className="block m-auto text-center text-xl mt-2">{cat}</p>
        </div>
    )
}
export default CarouselCard
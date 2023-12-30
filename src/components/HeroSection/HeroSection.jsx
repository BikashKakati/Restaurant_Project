import heroPoster from "../../assets/heroPoster.jpg"
import SearchSection from "./SearchBar/SearchSection";
function HeroSection() {
    return (
        <header className="h-128 w-full mb-10 relative flex justify-center items-center flex-col text-white">
            <img src={heroPoster} alt="heroPoster" className="h-full w-full object-center object-cover absolute top-0 right-0" />
            <div className="z-10 flex justify-center items-center flex-col gap-y-8 w-full px-3">
                <strong className="text-7xl">FoodAuto</strong>
                <p className="text-4xl font-normal">Discover the best food & drinks All over the World</p>
                <SearchSection/>
            </div>
        </header>
    )
}
export default HeroSection;
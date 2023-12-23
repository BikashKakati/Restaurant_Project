import Carousel from "../../components/Carousel/Carousel";
import HeroSection from "../../components/HeroSection/HeroSection";
import AllMeals from "./AllMeals";

function Home() {
    return (
        <div className="w-full min-h-dvh">
            <HeroSection />
            <Carousel/>
            <AllMeals/>
        </div>
    )
}
export default Home
import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import HeroSection from "../../components/HeroSection/HeroSection";
import UpArrow from "../../components/Ui/UpArrow";
import AllMeals from "./AllMeals";

function Home() {
    return (
        <div className="w-full min-h-dvh">
            <HeroSection />
            <Carousel/>
            <AllMeals/>
            <UpArrow/>
        </div>
    )
}
export default Home
import { useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import HeroSection from "../../../components/HeroSection/HeroSection";
import UpArrow from "../../../components/Ui/UpArrow";
import AllMeals from "./AllMeals";

function Home() {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <div className="w-full h-full">
            <HeroSection />
            <Carousel/>
            <AllMeals/>
            <UpArrow/>
        </div>
    )
}
export default Home
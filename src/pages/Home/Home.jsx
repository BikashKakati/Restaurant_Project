import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import UpArrow from "../../components/Ui/UpArrow";
import AllMeals from "./AllMeals";

function Home() {
    return (
        <div className="w-full h-full">
            <HeroSection />
            <Carousel/>
            <AllMeals/>
            <UpArrow/>
            <Footer/>
        </div>
    )
}
export default Home
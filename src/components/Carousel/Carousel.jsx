import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Wrapper from "../Ui/Wrapper";
import CarouselCard from "./CarouselCard";
import { useFetch } from "../../hook/useFetch";


function Carousel() {
    const {data,loading} = useFetch("categories.php");

    return (
        <section className="text-black bg-zinc-100 min-h-72 w-full py-8">
            <Wrapper className="h-full">
                <p className="text-3xl mb-8 font-normal">Categories for you</p>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={"auto"}
                    loop
                    navigation={{ clickable: true }}
                    spaceBetween={20}>
                    {
                        loading ?
                            (<h1>loading...</h1>)
                            :
                            (
                                <>
                                    {
                                        data?.categories?.map((category) => {
                                            return (
                                                <SwiperSlide className="w-44" key={category?.idCategory} >
                                                    <CarouselCard cardData = {category}/>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </>
                            )
                    }
                </Swiper>
            </Wrapper>
        </section>
    )
}

export default Carousel
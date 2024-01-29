import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Wrapper from "../../components/Ui/Wrapper";
import { fetchApiData } from "../../services/Api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../components/Ui/Loader";

function AllMeals() {
    const [alphabet, setAlphabet] = useState(97);
    const [mealData, setMealData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAlphabet(97);
        fetchInitialData();
    }, [])

    function fetchInitialData() {
        setLoading(true);
        fetchApiData(`search.php?f=${String.fromCharCode(alphabet)}`)
            .then((res) => {
                setMealData(res?.meals);
                setAlphabet((prev) => prev + 1);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function fetchNextData() {
        fetchApiData(`search.php?f=${String.fromCharCode(alphabet)}`)
            .then((res) => {
                if (mealData?.length) {
                    return setMealData((prevData) => [...prevData, ...res?.meals]);
                } else {
                    return setMealData(res.meals);
                }
            })
            .then(() => {
                setAlphabet((prev) => prev + 1);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="text-black w-full mt-16">
            <Wrapper>
                <p className="text-3xl mb-4 font-normal">Find All Meals Here</p>
                <div className="w-full">
                    {loading && <Loader initial={true} />}
                    {
                        !loading &&
                        <InfiniteScroll
                            className="flex pt-4 items-start justify-center flex-row flex-wrap gap-6"
                            dataLength={mealData?.length || 0}
                            next={fetchNextData}
                            hasMore={alphabet <= 111}
                            loader={<Loader />}
                        >
                            {
                                mealData?.map((meal) => {
                                    return <Card key={meal.idMeal} mealData={meal} />
                                })
                            }

                        </InfiniteScroll>
                    }
                </div>
            </Wrapper>
        </section>
    )
}
export default AllMeals;
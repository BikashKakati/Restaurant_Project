import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Wrapper from "../../components/Ui/Wrapper";
import { fetchApiData } from "../../services/Api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../components/Ui/loader";

function AllMeals() {
    const [alphabet, setAlphabet] = useState(65);
    const [mealData, setMealData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAlphabet(65);
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
        setLoading(true);
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
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="w-full mt-10 py-8">
            <Wrapper>
                <p className="text-3xl mb-8 font-normal">Find Here All Meals</p>
                {
                    loading && <Loader />
                }
                {/* <div className="flex items-start justify-center flex-row flex-wrap gap-8"> */}
                {
                    mealData?.length &&
                    <InfiniteScroll
                        className="flex items-start justify-center flex-row flex-wrap gap-8"
                        dataLength={mealData?.length || 0}
                        next={fetchNextData}
                        hasMore={alphabet <= 122}
                        loader={<Loader />}
                    >
                        {
                            mealData?.map((meal) => {
                                return <Card key={meal.idMeal} mealData={meal} />
                            })
                        }

                    </InfiniteScroll>
                }
                {/* </div> */}
            </Wrapper>
        </section>
    )
}
export default AllMeals;
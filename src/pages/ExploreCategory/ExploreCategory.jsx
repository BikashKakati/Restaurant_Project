import { useParams } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"
import Card from "../../components/Card/Card";
import { Loader } from "../../components/Ui/Loader";
import Wrapper from "../../components/Ui/Wrapper";
import Footer from "../../components/Footer/Footer";

function ExploreCategory() {
    const { catvarient } = useParams();
    const { data, loading } = useFetch(`filter.php?c=${catvarient}`);
    return (
        <div className="w-full min-h-dvh pt-20">
            <Wrapper className="mb-20">
                <p className="text-3xl mb-4 font-normal">All {catvarient} items is here</p>
                <div className="flex pt-4 items-start justify-center flex-row flex-wrap gap-4">
                    {loading && <Loader initial={true} />}
                    {!loading &&
                        <>
                            {
                                data?.meals?.map((meal) => {
                                    return <Card key={meal.idMeal} mealData={meal} cat={catvarient}/>
                                })
                            }
                        </>
                    }
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default ExploreCategory
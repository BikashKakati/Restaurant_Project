import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { CardSkeletonMultiple } from "../../components/Card/CardSkeletonMultiple";
import Wrapper from "../../components/Ui/Wrapper";
import { useFetch } from "../../hook/useFetch";

function ExploreCategory() {
    const { catvarient } = useParams();
    const { data, loading } = useFetch(`filter.php?c=${catvarient}`);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <div className="w-full min-h-dvh pt-20">
            <Wrapper className="mb-20">
                <p className="text-3xl mb-4 font-normal">All {catvarient} items is here</p>
                <div className="flex pt-4 items-start justify-center flex-row flex-wrap gap-4">
                    {loading &&
                    <Fragment>
                        <CardSkeletonMultiple/>
                        <CardSkeletonMultiple/>
                    </Fragment>
                    }
                    {!loading &&
                        <>
                            {
                                data?.meals?.map((meal) => {
                                    return <Card key={meal.idMeal} mealData={meal} cat={catvarient} />
                                })
                            }
                        </>
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default ExploreCategory
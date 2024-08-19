import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../../components/Card/Card";
import { CardSkeletonMultiple } from "../../../components/Card/CardSkeletonMultiple";
import FilterBtn from "../../../components/FilterDialog/FilterBtn";
import FilterDialog from "../../../components/FilterDialog/FilterDialog";
import Modal from "../../../components/Ui/Modal";
import Wrapper from "../../../components/Ui/Wrapper";
import { fetchApiData } from "../../../services/Api";
import { sortByOptions } from "../../../../constant";
import SortByForm from "../../../components/FilterDialog/SortByForm";

function AllMeals() {
  const [alphabet, setAlphabet] = useState(97);
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  useEffect(() => {
    setAlphabet(97);
    fetchInitialData();
  }, []);

  const [selectedSortCallback, setSelectedSortCallback] = useState(undefined);
  const [selectedSortOption, setSelectedSortOption] = useState({});

  function getPrice(rawData) {
    return Number(rawData?.slice(2));
  }

  function handleApplySort() {
    switch (selectedSortOption?.value) {
      case "lowToHigh":
        setSelectedSortCallback(
          () => (a, b) => getPrice(a?.idMeal) - getPrice(b?.idMeal)
        );
        break;
      case "highToLow":
        setSelectedSortCallback(
          () => (a, b) => getPrice(b?.idMeal) - getPrice(a?.idMeal)
        );
        break;
      case "atoz":
        setSelectedSortCallback(
          () => (a, b) => a?.strMeal?.localeCompare(b?.strMeal)
        );
        break;
      case "ztoa":
        setSelectedSortCallback(
          () => (a, b) => b?.strMeal?.localeCompare(a?.strMeal)
        );
        break;
      default:
        setSelectedSortCallback(undefined);
    }
    setIsFilterDialogOpen(false);
  }

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
      });
  }
  function fetchNextData() {
    fetchApiData(`search.php?f=${String.fromCharCode(alphabet)}`)
      .then((res) => {
        if (mealData?.length) {
          return setMealData((prevData) => prevData.concat(res?.meals));
        } else {
          return setMealData(res?.meals);
        }
      })
      .then(() => {
        setAlphabet((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {isFilterDialogOpen && (
        <Modal>
          <FilterDialog
            setIsFilterDialogOpen={setIsFilterDialogOpen}
            handleApplySort={handleApplySort}
            clearFilter={() => {
              setSelectedSortOption(null);
              setSelectedSortCallback(undefined);
            }}
          >
            <SortByForm
              selectedSortOption={selectedSortOption}
              setSelectedSortOption={setSelectedSortOption}
            />
          </FilterDialog>
        </Modal>
      )}
      <section className="text-black w-full mt-16">
        <Wrapper>
          {/* filter section */}
          <FilterBtn
            selectedSortCallback={selectedSortCallback}
            selectedSortOption={selectedSortOption}
            setIsFilterDialogOpen={setIsFilterDialogOpen}
            setSelectedSortCallback={setSelectedSortCallback}
            setSelectedSortOption={setSelectedSortOption}
          />

          <p className="text-3xl mb-4 font-normal">Find All Meals Here</p>
          <div className="w-full">
            {loading && <CardSkeletonMultiple />}

            <InfiniteScroll
              className="flex pt-4 items-start justify-center flex-row flex-wrap gap-6"
              dataLength={mealData?.length || 0}
              next={fetchNextData}
              hasMore={alphabet <= 111}
              loader={<CardSkeletonMultiple />}
            >
              {!loading &&
                [...mealData]?.sort(selectedSortCallback)?.map((meal) => {
                  return <Card key={meal?.idMeal} mealData={meal || {}} />;
                })}
            </InfiniteScroll>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
export default AllMeals;

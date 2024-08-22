import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../../components/Card/Card";
import { CardSkeletonMultiple } from "../../../components/Card/CardSkeletonMultiple";
import FilterBtn from "../../../components/FilterDialog/FilterBtn";
import FilterByForm from "../../../components/FilterDialog/FilterByForm";
import FilterDialog from "../../../components/FilterDialog/FilterDialog";
import SortByForm from "../../../components/FilterDialog/SortByForm";
import Modal from "../../../components/Ui/Modal";
import Tabs from "../../../components/Ui/Tabs";
import Wrapper from "../../../components/Ui/Wrapper";
import { fetchApiData } from "../../../services/Api";

function AllMeals() {
  const [alphabet, setAlphabet] = useState(97);
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  useEffect(() => {
    setAlphabet(97);
    fetchInitialData();
  }, []);

  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const [correspondingSortCallback, setCorrespondingSortCallback] =
    useState(undefined);
  const [selectedFilterOption, setSelectedFilterOption] = useState("");
  const [finalAddedFilter, setFinalAddedFilter] = useState("");

  function handleApplySort() {
    !!selectedSortOption &&
      setCorrespondingSortCallback(() => selectedSortOption?.method);
    !!selectedFilterOption && setFinalAddedFilter(selectedFilterOption);
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

  // made an array of objects includes filter by and sort by option
  const tabsData = [
    {
      tabSectionName: "Filter By",
      component: (
        <FilterByForm
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
          referenceData={mealData || []}
        />
      ),
    },
    {
      tabSectionName: "Sort By",
      component: (
        <SortByForm
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={setSelectedSortOption}
        />
      ),
    },
  ];

  return (
    <>
      {isFilterDialogOpen && (
        <Modal>
          <FilterDialog
            setIsFilterDialogOpen={setIsFilterDialogOpen}
            handleApplySort={handleApplySort}
            clearFilter={() => {
              setSelectedSortOption(null);
              setCorrespondingSortCallback(undefined);
              setSelectedFilterOption("");
              setFinalAddedFilter("");
            }}
          >
            <Tabs
              tabsData={tabsData}
              selectedFilterOption={selectedFilterOption}
              selectedSortOption={selectedSortOption}
            />
          </FilterDialog>
        </Modal>
      )}
      <section className="text-black w-full mt-16">
        <Wrapper>
          {/* filter section */}
          <FilterBtn
            correspondingSortCallback={correspondingSortCallback}
            selectedSortOption={selectedSortOption}
            setIsFilterDialogOpen={setIsFilterDialogOpen}
            setCorrespondingSortCallback={setCorrespondingSortCallback}
            setSelectedSortOption={setSelectedSortOption}
            setFinalAddedFilter={setFinalAddedFilter}
            finalAddedFilter={finalAddedFilter}
            setSelectedFilterOption={setSelectedFilterOption}
          />

          <p className="text-3xl mb-4 font-normal">Find All Meals Here</p>
          <div className="w-full">
            {loading && <CardSkeletonMultiple />}

            <InfiniteScroll
              className="flex h-full pt-4 pb-16 items-start justify-center flex-row flex-wrap gap-6"
              dataLength={mealData?.length || 0}
              next={fetchNextData}
              hasMore={alphabet <= 111}
              loader={<CardSkeletonMultiple />}
            >
              {!loading &&
                [...mealData]
                  ?.filter((meal) =>
                    meal?.strCategory?.includes(finalAddedFilter)
                  )
                  .sort(correspondingSortCallback)
                  ?.map((meal) => {
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

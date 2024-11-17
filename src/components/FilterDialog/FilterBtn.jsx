import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "../Ui/Button";
import { sortByOptions } from "../../../constant";
import { getPrice } from "../../utils";

function FilterBtn({
  setIsFilterDialogOpen,
  correspondingSortCallback,
  selectedSortOption,
  setCorrespondingSortCallback,
  setSelectedSortOption,
  setSelectedFilterOption,
  setFinalAddedFilter,
  finalAddedFilter
}) {
  function handleDirectAddSort() {
    setSelectedSortOption(sortByOptions[0]);
    setCorrespondingSortCallback(() => sortByOptions[0].method);
  }
  function handleDirectAddFilter(category){
    setFinalAddedFilter(category);
    setSelectedFilterOption(category);
  }

  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <button
        className="px-3 py-[6px] text-sm md:text-base border border-zinc-300 rounded-lg flex space-x-2 items-center"
        onClick={() => {
          console.log("llllllll");
          setIsFilterDialogOpen(true);
        }}
      >
        {/* to showing the no. of filters otherwise filter icon */}
        {!correspondingSortCallback && !finalAddedFilter ? (
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
        ) : (
          <span className="py-[2px] text-white px-2 bg-red-500 rounded-lg">
            {finalAddedFilter && correspondingSortCallback ? 2 : 1}
          </span>
        )}
        <span>Filters</span>
      </button>

      <div className="flex items-center gap-2 md:gap-5">
      {!!correspondingSortCallback ? (
        <Button
          onClose={(e) => {
            setCorrespondingSortCallback(undefined);
            setSelectedSortOption(null);
            e.stopPropagation();
          }}
        >
          {selectedSortOption?.label}
        </Button>
      ) : (
        //for default sort option
        <button
          onClick={handleDirectAddSort}
          className="px-3 py-[6px] border text-sm md:text-base border-zinc-300 rounded-lg flex space-x-2 items-center"
        >
          {sortByOptions[0].label}
        </button>
      )}

      {!!finalAddedFilter ? (
        <Button
          onClose={(e) => {
            setFinalAddedFilter("");
            setSelectedFilterOption("");
            e.stopPropagation();
          }}
        >
          {finalAddedFilter}
        </Button>
      ) : (
        <button
          onClick={()=>{handleDirectAddFilter("Chicken")}}
          className="px-3 py-[6px] border border-zinc-300 rounded-lg flex space-x-2 items-center"
        >
          Chicken
        </button>
      )}
      </div>
    </div>
  );
}

export default FilterBtn;

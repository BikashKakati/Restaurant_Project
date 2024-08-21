import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "../Ui/Button";
import { sortByOptions } from "../../../constant";
import { getPrice } from "../../utils";

function FilterBtn({
  setIsFilterDialogOpen,
  selectedSortCallback,
  selectedSortOption,
  setSelectedSortCallback,
  setSelectedSortOption,
  setSelectedFilterOption,
  selectedFilterOption,
  setAddFilter,
  addFilter
}) {
  function handleDirectAddSort() {
    setSelectedSortOption(sortByOptions[0]);
    setSelectedSortCallback(() => sortByOptions[0].method);
  }
  function handleDirectAddFilter(){
    setAddFilter("Chicken");
    setSelectedFilterOption("Chicken");
  }

  return (
    <div className="flex items-center gap-3 mb-5">
      <button
        className="px-3 py-[6px] border border-zinc-300 rounded-lg flex space-x-2 items-center"
        onClick={() => {
          setIsFilterDialogOpen(true);
        }}
      >
        {!selectedSortCallback ? (
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
        ) : (
          <span className="py-[2px] text-white px-2 bg-red-500 rounded-lg">
            {addFilter && selectedSortCallback ? 2 : 1}
          </span>
        )}
        <span>Filters</span>
      </button>

      {!!selectedSortCallback ? (
        <Button
          onClose={(e) => {
            setSelectedSortCallback(undefined);
            setSelectedSortOption(null);
            e.stopPropagation();
          }}
        >
          {selectedSortOption?.label}
        </Button>
      ) : (
        <button
          onClick={handleDirectAddSort}
          className="px-3 py-[6px] border border-zinc-300 rounded-lg flex space-x-2 items-center"
        >
          {sortByOptions[0].label}
        </button>
      )}
      {!!addFilter ? (
        <Button
          onClose={(e) => {
            setAddFilter("");
            setSelectedFilterOption("");
            e.stopPropagation();
          }}
        >
          {addFilter}
        </Button>
      ) : (
        <button
          onClick={handleDirectAddFilter}
          className="px-3 py-[6px] border border-zinc-300 rounded-lg flex space-x-2 items-center"
        >
          Chicken
        </button>
      )}
    </div>
  );
}

export default FilterBtn;

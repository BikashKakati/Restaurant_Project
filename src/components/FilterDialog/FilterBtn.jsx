import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "../Ui/Button";

function FilterBtn({
  setIsFilterDialogOpen,
  selectedSortCallback,
  selectedSortOption,
  setSelectedSortCallback,
  setSelectedSortOption,
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <button
        className="px-3 py-2 border border-zinc-300 rounded-lg flex space-x-2 items-center"
        onClick={() => {
          setIsFilterDialogOpen(true);
        }}
      >
        {!selectedSortCallback ? (
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
        ) : (
          <span className="py-[2px] text-white px-2 bg-red-500 rounded-lg">
            1
          </span>
        )}
        <span>Filters</span>
      </button>
      {!!selectedSortCallback && (
        <Button
          onClose={(e) => {
            setSelectedSortCallback(undefined);
            setSelectedSortOption(null);
            e.stopPropagation();
          }}
          key={selectedSortOption?.label}
        >
          {selectedSortOption?.label}
        </Button>
      )}
    </div>
  );
}

export default FilterBtn;

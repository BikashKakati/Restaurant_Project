import React from "react";
import { sortByOptions } from "../../../constant";

const SortByForm = ({setSelectedSortOption,selectedSortOption}) => {
    function handleSortOptionChange(e) {
        const selectedOption = sortByOptions.find(
          (options) => options.value === e.target.value
        );
        setSelectedSortOption(selectedOption);
      }
  return (
    <form>
      {sortByOptions.map((options, id) => (
        <div className="flex items-center space-x-2  p-2" key={id}>
          <input
            checked={options.value === selectedSortOption?.value}
            type="radio"
            id={options.value}
            name="sortOptions"
            value={options.value}
            onChange={handleSortOptionChange}
            className="size-4"
          />
          <label htmlFor={options.value} className="text-nowrap text-sm md:text-base">{options.label}</label>
        </div>
      ))}
    </form>
  );
};

export default SortByForm;

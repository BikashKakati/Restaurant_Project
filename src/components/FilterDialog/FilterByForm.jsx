import React from "react";
import { sortByOptions } from "../../../constant";
import { useFetch } from "../../hook/useFetch";

const FilterByForm = ({
  setSelectedFilterOption,
  selectedFilterOption,
  referenceData,
}) => {
  const filterByOptions = Array.from(
    new Set(referenceData?.map((meal) => meal?.strCategory))
  );

  function handleFilterOptionChange(e) {
    setSelectedFilterOption(e.target.value);
  }

  return (
    <form>
      <p className="text-lg font-semibold">Filter By</p>
      {filterByOptions?.map((options, id) => (
        <div className="flex items-center space-x-2" key={id}>
          <input
            checked={options === selectedFilterOption}
            type="radio"
            id={options}
            name="filterOptions"
            value={options}
            onChange={handleFilterOptionChange}
            className="size-4"
          />
          <label htmlFor={options}>{options}</label>
        </div>
      ))}
    </form>
  );
};

export default FilterByForm;

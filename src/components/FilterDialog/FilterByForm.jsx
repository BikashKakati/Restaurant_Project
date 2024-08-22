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
    <form className="">
      {filterByOptions?.map((options, id) => (
        <div className="flex items-center space-x-3 p-2" key={id}>
          <input
            checked={options === selectedFilterOption}
            type="radio"
            id={options}
            name="filterOptions"
            value={options}
            onChange={handleFilterOptionChange}
            className="size-4 text-base"
          />
          <label htmlFor={options}>{options}</label>
        </div>
      ))}
    </form>
  );
};

export default FilterByForm;

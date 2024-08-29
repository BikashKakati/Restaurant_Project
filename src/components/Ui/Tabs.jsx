import React, { useState } from "react";

const TabsComponent = ({
  tabsData,
  selectedFilterOption,
  selectedSortOption,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(tabIndex) {
    setActiveTab(tabIndex);
  }

  return (
    <div className="flex flex-row h-full w-full">
      <div className="h-full w-[6rem] md:w-[8rem] bg-zinc-100">
        <nav
          className="flex flex-col space-y-2 w-full"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabsData?.map((tab, index) => (
            <button
              type="button"
              className={`py-8 w-full inline-flex flex-col items-center gap-x-2 border-l-4  focus:outline-none ${
                activeTab === index
                  ? "border-red-400 bg-white"
                  : "border-transparent"
              }`}
              onClick={() => handleTabClick(index)}
              aria-selected={activeTab === index}
              role="tab"
              key={index}
            >
              <span
                className={`text-xs md:text-base font-medium text-nowrap`}
              >
                {tab.tabSectionName}
              </span>
              {!!selectedFilterOption && tab.tabSectionName === "Filter By" && (
                <span className="text-red-500 text-xs md:text-sm">{selectedFilterOption}</span>
              )}
              {!!selectedSortOption && tab.tabSectionName === "Sort By" && (
                <span className="text-red-500 text-xs md:text-sm">{selectedSortOption.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-3 md:p-5 h-full flex-1 overflow-y-auto">
        {tabsData?.map((tab, index) => {
          return (
            activeTab === index && (
              <div role="tabpanel" className="" key={index}>
                {tab.component}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default TabsComponent;

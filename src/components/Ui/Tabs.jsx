import React, { useState } from 'react';

const TabsComponent = ({}) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-wrap">
      <div className="border-e border-gray-200">
        <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button
            type="button"
            className={`hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 ${activeTab === 1 ? 'border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabClick(1)}
            aria-selected={activeTab === 1}
            role="tab"
          >
            Tab 1
          </button>
          <button
            type="button"
            className={`hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 ${activeTab === 2 ? 'border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabClick(2)}
            aria-selected={activeTab === 2}
            role="tab"
          >
            Tab 2
          </button>
          <button
            type="button"
            className={`hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 ${activeTab === 3 ? 'border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabClick(3)}
            aria-selected={activeTab === 3}
            role="tab"
          >
            Tab 3
          </button>
        </nav>
      </div>

      <div className="ms-3">
        {activeTab === 1 && (
          <div id="vertical-tab-with-border-1" role="tabpanel">
            <p className="text-gray-500">
              This is the <em className="font-semibold text-gray-800">first</em> item's tab body.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div id="vertical-tab-with-border-2" role="tabpanel">
            <p className="text-gray-500">
              This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div id="vertical-tab-with-border-3" role="tabpanel">
            <p className="text-gray-500">
              This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;

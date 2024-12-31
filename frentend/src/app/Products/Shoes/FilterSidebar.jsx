import React from "react";

const FilterSidebar = ({ filters, onFilterChange, onClearAllFilters }) => {
  const handleChange = (filterType, value, isCheckbox) => {
    onFilterChange(filterType, value, isCheckbox);
  };

  return (
    <aside className="w-80 ml-6 p-4 border-r">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-basier font-medium text-xl">Filters</h1>
        <button
          className="text-sm text-red-500 underline"
          onClick={onClearAllFilters}
        >
          Clear All
        </button>
      </div>

      {/* Render Filter Sections */}
      {Object.keys(filters).map((filterKey) => (
        <div className="mb-6" key={filterKey}>
          {/* Section Header */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold capitalize">{filterKey.replace("_", " ")}</h3>
            <button
              className="text-sm text-gray-400"
              onClick={() => onFilterChange(filterKey, null, false)}
            >
              ×
            </button>
          </div>

          {/* Filter Options */}
          <ul className="mt-2 ml-2">
            {filters[filterKey]?.map((item) => (
              <li key={item} className="mb-1 ml-4">
                <label className="flex items-center space-x-2">
                  <input
                    type={filterKey === "price_range" || filterKey === "colours" ? "checkbox" : "radio"}
                    name={filterKey}
                    value={item}
                    onChange={() =>
                      handleChange(filterKey, item, filterKey === "price_range" || filterKey === "colours")
                    }
                    className="form-checkbox text-red-500"
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Colours Section (Special Case) */}
      {filters["colours"] && (
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Colours</h3>
            <button
              className="text-sm text-gray-400"
              onClick={() => onFilterChange("colours", null, false)}
            >
              ×
            </button>
          </div>
          <div className="flex space-x-2 mt-2">
            {filters["colours"].map((color) => (
              <label
                key={color}
                className={`w-6 h-6 rounded-full border ${color === "black" ? "border-gray-400" : ""}`}
                style={{ backgroundColor: color }}
              >
                <input
                  type="checkbox"
                  value={color}
                  className="hidden"
                  onChange={() => handleChange("colours", color, true)}
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;

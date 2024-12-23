// SearchInput.js
"use client";
import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css"

const SearchInput = ({ placeholder, className, id }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="px-4 py-2 border rounded-full text-sm w-full focus:outline-none"
      />
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

SearchInput.defaultProps = {
  placeholder: "Search",
  className: "",
};

export default SearchInput;
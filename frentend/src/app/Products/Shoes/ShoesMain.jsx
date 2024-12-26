"use client";
import React, { useState, useEffect } from "react";
import FilterSidebar from "./FilterSidebar";

import data from "./data.json";
import Link from "next/link";

export default function ShoesMain() {
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    category: null,
    shoes_category: null,
    price_range: [],
    colours: [],
  });
  const [sortOption, setSortOption] = useState("");

  // Load data on mount
  useEffect(() => {
    setFilters(data.filters);
    setProducts(data.products);
    setFilteredProducts(data.products);
  }, []);

  // Filter products based on active filters and sorting
  useEffect(() => {
    let updatedProducts = [...products];

    if (activeFilters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === activeFilters.category
      );
    }

    if (activeFilters.shoes_category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.shoes_category === activeFilters.shoes_category
      );
    }

    if (activeFilters.price_range.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        activeFilters.price_range.some((range) => {
          if (range === "Below ₹2500") return product.price < 2500;
          if (range === "₹2500-₹7500")
            return product.price >= 2500 && product.price <= 7500;
          if (range === "Above ₹7500") return product.price > 7500;
          return false;
        })
      );
    }

    if (activeFilters.colours.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        activeFilters.colours.includes(product.color)
      );
    }

    if (sortOption) {
      updatedProducts.sort((a, b) =>
        sortOption === "price_asc" ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(updatedProducts);
  }, [activeFilters, products, sortOption]);

  const handleFilterChange = (filterType, value, isCheckbox) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (isCheckbox) {
        const values = new Set(updatedFilters[filterType]);
        if (values.has(value)) {
          values.delete(value);
        } else {
          values.add(value);
        }
        updatedFilters[filterType] = Array.from(values);
      } else {
        updatedFilters[filterType] =
          updatedFilters[filterType] === value ? null : value;
      }

      return updatedFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      category: null,
      shoes_category: null,
      price_range: [],
      colours: [],
    });
  };

  return (
    <div className="flex min-h-screen">
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearAllFilters={clearAllFilters}
      />
      <main className="flex-1 p-6">
        {/* Breadcrumb */}

        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">
            Showing {filteredProducts.length} Results
          </h1>
          <select
            className="border rounded px-3 py-1"
            aria-label="Sort By"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex overflow-hidden flex-col items-center rounded-xl max-w-[430px] border hover:shadow-lg transition relative group"
            >
              <Link href={`/Products/Shoes/${product.id}`} key={product.id}>
                <div className="relative w-full">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full"
                  />
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                  <button
                    className="absolute top-0 right-0  text-gray-500 hover:text-red-500 group-hover:hidden transform transition-all duration-500 delay-300 scale-100 group-hover:scale-110"
                    onClick={() =>
                      alert("Favorite functionality not implemented")
                    }
                  >
                    fav
                  </button>

                  <Link
                    className="absolute right-0 text-gray-500 hover:text-red-500 bg-slate-50 bottom-2 border-r-2 hidden group-hover:block transform opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 rounded-tr-lg rounded-bl-xl "
                    href={`/Products/Shoes/${product.id}`}
                    key={product.id}
                  >
                    page
                  </Link>
                </div>

                <div className="flex flex-col w-full mt-4">
                  <div className="flex-1 shrink gap-2.5 self-stretch w-full text-xl leading-tight text-slate-900">
                    {product.name}
                  </div>
                  <div className="flex gap-10 justify-between items-center mt-3 w-full">
                    <div className="gap-2 self-stretch my-auto text-xl leading-tight text-black">
                      <span>₹{product.price} </span>
                      <span className="text-neutral-400">₹</span>{" "}
                      <span className="line-through text-neutral-400">
                        {product.original_price}
                      </span>
                    </div>
                    {product.discount && (
                      <div className="flex items-start self-stretch my-auto text-lg font-medium leading-loose text-rose-600 whitespace-nowrap">
                        <div className="gap-4 self-stretch px-5  rounded-lg border border-rose-600 border-solid">
                          -{product.discount}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className="flex items-start mt-4 w-full text-xl font-medium leading-tight text-slate-900">
                <button
                  className="flex-1 shrink gap-2.5 self-stretch px-8 py-3 w-full group-hover:bg-red-600 rounded-xl border border-solid border-slate-900 min-w-[240px]"
                  onClick={() =>
                    alert("Favorite functionality not implemented")
                  }
                  aria-label="Add to Cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

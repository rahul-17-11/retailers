import React from "react";
import { useGeoStore } from "../store/useGeoStore";
const categories = ["Pharmacy", "Grocery"];

const SelectCategory = () => {
  const { category, handleCategory } = useGeoStore();
  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-bordered focus:outline-primary"
        value={category}
        onChange={handleCategory}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;

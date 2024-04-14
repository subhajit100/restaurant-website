import React from "react";
import { menuCategories } from "../constants";

const MenuCategories = ({ selectedMenuCategory, handleMenuCategoryChange }) => {
  return (
    <div className="flex justify-center items-center text-center mb-5">
      {menuCategories.map((category) => (
        <div
          key={category}
          className={`py-6 px-10 border-gray-200 border-[0.5px] hover:bg-yellow-400 rounded-3xl font-bold text-md mx-3 cursor-pointer ${
            selectedMenuCategory === category ? "bg-yellow-400" : ""
          }`}
          onClick={() => handleMenuCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;

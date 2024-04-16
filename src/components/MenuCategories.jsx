import React from "react";
import { menuCategories } from "../constants";

const MenuCategories = ({ selectedMenuCategory, handleMenuCategoryChange }) => {
  return (
    <div className=" md:visible md:flex flex-wrap mx-10 justify-center items-center text-center mb-5">
      {menuCategories.map((category) => (
        <div
          key={category}
          className={`py-4 px-6 lg:py-6 lg:px-10 border-gray-200 border-[0.5px] hover:bg-yellow-400 rounded-3xl font-bold text-md lg:mx-3 mx-2 my-2
          cursor-pointer ${
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

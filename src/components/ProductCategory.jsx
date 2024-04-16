import React from "react";
import "./styles.css";
import { productCategoryData } from "../constants";

const ProductCategory = () => {
  return (
    <div >
      {/* visible only for greater than lg */}
      <div className="lg:flex bg-[#00a149] justify-evenly items-center h-36 mt-28 hidden lg:visible">
        {productCategoryData.map((product) => (
          <div
            key={product.name}
            className="flex mx-2 flex-col justify-center items-center cursor-pointer hover:text-yellow-400 food-container"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-20 object-contain transition-transform transform hover:scale-125"
            />
            <div className="mt-1 text-white font-semibold text-md food-name">
              {product.name}
            </div>
            {/* <div className="splash-effect"></div> */}
          </div>
        ))}
      </div>
      {/* only for md range , its visible */}
      <div className="md:grid grid-cols-4 gap-4 gap-y-8 justify-items-center justify-center bg-[#00a149]  p-4 mt-24 hidden md:visible lg:hidden">
        {productCategoryData.map((product) => (
          <div
            key={product.name}
            className="flex mx-2 flex-col justify-center items-center cursor-pointer hover:text-yellow-400 food-container"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-20 object-contain transition-transform transform hover:scale-125"
            />
            <div className="mt-1 text-white font-semibold text-md food-name">
              {product.name}
            </div>
            {/* <div className="splash-effect"></div> */}
          </div>
        ))}
      </div>
      {/* less than md for below div */}
      <div className="grid  grid-cols-2 gap-4 gap-y-8 justify-items-center justify-center bg-[#00a149] mt-24 md:hidden py-2">
        {productCategoryData.map((product) => (
          <div
            key={product.name}
            className="flex mx-2 flex-col justify-center items-center cursor-pointer hover:text-yellow-400 food-container"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-20 object-contain transition-transform transform hover:scale-125"
            />
            <div className="mt-1 text-white font-semibold text-md food-name">
              {product.name}
            </div>
            {/* <div className="splash-effect"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

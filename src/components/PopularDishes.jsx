import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa";
import { dishesData } from "../constants";

const PopularDishes = () => {
  return (
    <div className="flex flex-col mt-10">
      {/* head section */}
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center lg:ml-10 md:ml-5 mb-6">
        <div className="lg:text-5xl md:text-4xl text-3xl font-bold">Popular dishes</div>
        <div className="flex justify-center items-center">
          <div className="text-md">See all</div>
          <div className="bg-green-600 p-0.5 m-2 rounded-md">
            <FaChevronRight size={16} color="white" />
          </div>
        </div>
      </div>
      {/* dishes sections */}
      <div className="lg:flex my-2 lg:justify-around  grid md:grid-cols-3 gap-4 gap-y-8 sm:grid-cols-2 gird-cols-1 justify-items-center justify-center">
        {/* single dish */}
        {dishesData.map((dish) => (
          <div key={dish.name} className="flex flex-col p-2 border-gray-300 border-[1px] rounded-xl border-solid mx-3 w-full">
            {/* image section */}
            <div className="transition duration-300 cursor-pointer flex items-center justify-center hover:bg-yellow-500 bg-[#f7f2e2] rounded-xl">
              <div className="hover:scale-110 transition-transform duration-300">
                <img
                  src={dish.imgUrl}
                  alt={dish.name}
                  className="h-60 w-auto"
                />
              </div>
            </div>
            {/* star rating section */}
            <div className="flex justify-start items-center ml-2 mt-5">
              {/* rating times FaStar, and 5-rating times FaRegStar */}
              {new Array(dish.rating).fill(null).map((_, index) => (
                <FaStar
                  key={index}
                  size={16}
                  color="#ffc222"
                  className="ml-1"
                />
              ))}
              {new Array(5 - dish.rating).fill(null).map((_, index) => (
                <FaRegStar
                  key={index}
                  size={16}
                  color="#D3D3D3"
                  className="ml-1"
                />
              ))}
            </div>
            {/* name of product */}
            <div className="flex justify-start mt-3 ml-2 font-bold text-xl">
              {dish.name}
            </div>
            {/* description of product */}
            <div className="flex justify-start mt-3 text-md ml-2 text-gray-500">
              {dish.description}
            </div>
            {/* price of product */}
            <div className="flex ml-2 justify-start text-yellow-500 text-xl font-bold mt-1 mb-2">
              £{dish.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;

import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { menuOptions } from "../constants";


const MenuOptions = ({ selectedMenuCategory }) => {
  return (
    <div className="mt-8">
      <div className="container mx-auto px-4 py-8">
        {/* <CardGrid cards={cards} /> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {menuOptions[selectedMenuCategory].map((food) => (
            <div key={food.name} className="border-gray-200 border rounded-xl">
              <div className="flex justify-center items-center bg-[#faf6e8] m-3 p-4 rounded-xl">
                {/* food image container */}
                <div className="flex justify-center items-center max-w-[40%]">
                  <img src={food.imgUrl} alt={food.name} className="h-auto w-[90%]"/>
                </div>
                {/* food about */}
                <div className="flex flex-col justify-center">
                  <div className="text-xl font-bold mb-1">{food.name}</div>
                  {/* rating part */}
                  <div className="flex justify-start items-center my-1">
                    {/* rating times FaStar, and 5-rating times FaRegStar */}
                    {/* TODO:- extract this rating section to a component and change all instances */}
                    {new Array(food.rating).fill(null).map((_, index) => (
                      <FaStar
                        key={index}
                        size={14}
                        color="#ffc222"
                      />
                    ))}
                    {new Array(5 - food.rating).fill(null).map((_, index) => (
                      <FaRegStar
                        key={index}
                        size={14}
                        color="#D3D3D3"
                      />
                    ))}
                  </div>
                  {/* description part */}
                  <div className="text-gray-500 text-md mt-2 max-w-[85%]">
                    {food.description}
                  </div>
                  {/* price section */}
                  <div className="text-yellow-500 font-bold text-xl my-2">£{food.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuOptions;

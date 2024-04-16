import React from "react";

const FamousFoods = () => {
  return (
    <div>
      {/* for md and above sizes */}
      <div className="hidden md:visible md:flex justify-start items-start relative md:bottom-28">
        <div className="md:relative m-4">
          <img
            src="/images/famous_food_1.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute md:top-7 md:left-7 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col">
              <div className="text-white lg:text-3xl md:text-2xl text-xl font-semibold lg:mb-2 mb-1">
                american
              </div>
              <div className="text-yellow-400 lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold">
                Burger
              </div>
              <div className="flex flex-col mt-1 ml-2 text-white text-md">
                <div className="lg:my-2 my-1">One phone call away</div>
              </div>
              <div className="flex justify-start ml-2 lg:mt-4 md:mt-2 mt-1">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black lg:py-2 py-1 lg:px-5 md:px-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 lg:text-md font-semibold hover:text-white"
                >
                  HOT & SPICY
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative m-2">
            <img
              src="/images/famous_food_2.png"
              alt="Famous food"
              className="w-full h-auto mx-auto rounded-lg"
            />
            <div className="absolute lg:top-6 lg:left-6 md:top-1 md:left-2 w-full h-full flex flex-col">
              <div className="flex justify-start flex-col">
                <div className="text-white lg:text-3xl md:text-xl font-semibold lg:mb-1 md:mb-0">
                  good
                </div>
                <div className="text-white lg:text-4xl md:text-xl font-bold">
                  Food
                </div>
                <div className="flex flex-col text-white lg:text-md md:text-sm">
                  <div className="lg:my-1 md:my-0">For Online Orders</div>
                  <div className="lg:my-1 md:my-0">in Wendesdays.</div>
                </div>
                <div className="flex justify-start lg:mt-2 md:mt-[1px]">
                  <button
                    type="button"
                    className=" bg-yellow-400 text-black lg:py-2 lg:px-4 md:py-1 md:px-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 lg:text-md md:text-sm font-semibold hover:text-white"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-2 mt-5">
            <img
              src="/images/famous_food_3.png"
              alt="Famous food"
              className="w-full h-auto mx-auto rounded-lg"
            />
            <div className="absolute lg:top-6 lg:left-6 md:top-1 md:left-2 w-full h-full flex flex-col">
              <div className="flex justify-start flex-col">
                <div className="text-yellow-400 lg:text-3xl md:text-xl font-semibold lg:mb-1 md:mb-0">
                  Fastboy
                </div>
                <div className="text-white lg:text-4xl md:text-2xl font-bold">
                  Combo
                </div>
                <div className="flex flex-col text-white lg:text-md md:text-sm">
                  <div className="lg:my-1 md:my-0">For Online Orders</div>
                  <div className="lg:my-1 md:my-0">in Wendesdays.</div>
                </div>
                <div className="flex justify-start lg:mt-2 md:mt-[1px]">
                  <button
                    type="button"
                    className=" bg-yellow-400 text-black lg:py-2 lg:px-4 md:py-1 md:px-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 lg:text-md md:text-sm font-semibold hover:text-white"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative m-2 mr-4">
          <img
            src="/images/famous_food_4.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute lg:top-6 md:top-2 items-center justify-start text-center w-full h-full flex flex-col">
            <div className="flex justify-center flex-col">
              <div className="text-yellow-400 lg:text-3xl md:text-2xl font-semibold mb-1">
                america
              </div>
              <div className="text-white lg:text-4xl md:text-2xl font-bold">
                Hotdog
              </div>
              <div className="flex flex-col text-white lg:text-md md:text-sm">
                <div className="my-1">Double Sauce</div>
              </div>
              <div className="flex justify-start lg:mt-6 md:mt-2">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black lg:py-2 lg:px-4 md:py-1 md:px-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 lg:text-md md:text-sm font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for below md sizes */}
      <div className="md:hidden grid grid-cols-1 gap-4 gap-y-8 justify-items-center justify-center py-2">
        <div className="relative m-4">
          <img
            src="/images/famous_food_1.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute sm:top-7 sm:left-7 top-2 left-2 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col ml-2">
              <div className="text-white  sm:text-2xl text-xl  font-semibold sm:mb-2 mb-1">
                american
              </div>
              <div className="text-yellow-400 sm:text-4xl text-3xl font-bold">
                Burger
              </div>
              <div className="flex flex-col mt-1 text-white text-md">
                <div className="sm:my-2 my-1">One phone call away</div>
              </div>
              <div className="flex justify-start sm:mt-4 mt-1">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2  sm:px-5 px-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  HOT & SPICY
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative m-4">
          <img
            src="/images/famous_food_2.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute sm:top-7 sm:left-7 top-2 left-2 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col ml-2">
              <div className="text-white  sm:text-2xl text-xl  font-semibold sm:mb-2 mb-1">
                good
              </div>
              <div className="text-yellow-400 sm:text-4xl text-3xl font-bold">
                Food
              </div>
              <div className="flex flex-col mt-1 text-white text-md">
                <div className="sm:my-1 my-[2px]">For Online Orders</div>
                <div className="sm:my-1 my-[2px]">in Wendesdays.</div>
              </div>
              <div className="flex justify-start sm:mt-4 mt-1">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2  sm:px-5 px-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative m-4">
          <img
            src="/images/famous_food_3.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute sm:top-7 sm:left-7 top-2 left-2 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col ml-2">
              <div className="text-white  sm:text-2xl text-xl  font-semibold sm:mb-2 mb-1">
                Fastboy
              </div>
              <div className="text-yellow-400 sm:text-4xl text-3xl font-bold">
                Combo
              </div>
              <div className="flex flex-col mt-1 text-white text-md">
                <div className="sm:my-1 my-[1px]">For Online Orders</div>
                <div className="sm:my-1 my-[1px]">in Wendesdays.</div>
              </div>
              <div className="flex justify-start sm:mt-4 mt-1">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2  sm:px-5 px-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative m-4">
          <img
            src="/images/famous_food_4.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute sm:top-7 sm:left-7 top-2 left-2 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col ml-2">
              <div className="text-white  sm:text-2xl text-xl  font-semibold sm:mb-2 mb-1">
                america
              </div>
              <div className="text-yellow-400 sm:text-4xl text-3xl font-bold">
                Hotdog
              </div>
              <div className="flex flex-col mt-1 text-white text-md">
                <div className="sm:my-2 my-1">Double sauce</div>
              </div>
              <div className="flex justify-start sm:mt-4 mt-1">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2  sm:px-5 px-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamousFoods;

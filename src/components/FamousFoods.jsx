import React from "react";

const FamousFoods = () => {
  return (
    <div className="flex justify-start items-start absolute">
      <div className="relative m-4 bottom-28">
        <img
          src="/images/famous_food_1.png"
          alt="Famous food"
          className="w-full h-auto mx-auto rounded-lg"
        />
        <div className="absolute top-7 left-7 w-full h-full flex flex-col">
          <div className="flex justify-start flex-col">
            <div className="text-white text-3xl font-semibold mb-2">
              american
            </div>
            <div className="text-yellow-400 text-6xl font-bold">Burger</div>
            <div className="flex flex-col mt-1 ml-2 text-white text-md">
              <div className="my-2">One phone call away</div>
            </div>
            <div className="flex justify-start ml-2 mt-4">
              <button
                type="button"
                className=" bg-yellow-400 text-black py-2 px-5 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
              >
                HOT & SPICY
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative m-2 bottom-28">
          <img
            src="/images/famous_food_2.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute top-6 left-6 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col">
              <div className="text-white text-3xl font-semibold mb-1">good</div>
              <div className="text-white text-4xl font-bold">Food</div>
              <div className="flex flex-col text-white text-md">
                <div className="my-1">For Online Orders</div>
                <div className="my-1">in Wendesdays.</div>
              </div>
              <div className="flex justify-start mt-2">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative m-2 mt-5 bottom-28">
          <img
            src="/images/famous_food_3.png"
            alt="Famous food"
            className="w-full h-auto mx-auto rounded-lg"
          />
          <div className="absolute top-6 left-6 w-full h-full flex flex-col">
            <div className="flex justify-start flex-col">
              <div className="text-yellow-400 text-3xl font-semibold mb-1">Fastboy</div>
              <div className="text-white text-4xl font-bold">Combo</div>
              <div className="flex flex-col text-white text-md">
                <div className="my-1">For Online Orders</div>
                <div className="my-1">in Wendesdays.</div>
              </div>
              <div className="flex justify-start mt-2">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-2 mr-4 bottom-28">
        <img
          src="/images/famous_food_4.png"
          alt="Famous food"
          className="w-full h-auto mx-auto rounded-lg"
        />
        <div className="absolute top-6 items-center justify-start text-center w-full h-full flex flex-col">
            <div className="flex justify-center flex-col">
              <div className="text-yellow-400 text-3xl font-semibold mb-1">america</div>
              <div className="text-white text-4xl font-bold">Hotdog</div>
              <div className="flex flex-col text-white text-md">
                <div className="my-1">Double Sauce</div>
              </div>
              <div className="flex justify-start mt-6">
                <button
                  type="button"
                  className=" bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FamousFoods;

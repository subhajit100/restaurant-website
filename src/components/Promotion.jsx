import React from "react";

const Promotion = () => {
  return (
    <div className="flex md:justify-start justify-center items-center flex-col">
      <div className="text-white lg:text-5xl sm:text-4xl text-3xl font-semibold mb-4">
        Buy one get one
      </div>
      <div className="text-yellow-400 lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold">PIZZA TIME</div>
      <div className="flex flex-col mt-3 ml-2 text-white sm:text-xl text-md">
        <div className="lg:my-2 md:my-1 my-0">Extra-virgin olive oil, garlic,</div>
        <div className="lg:my-2 md:my-1 my-0">mozzarella cheese, onions,</div>
        <div className="lg:my-2 md:my-1 my-0">mushrooms, green olives, black</div>
        <div className="lg:my-2 md:my-1 my-0">olives, fresh tomatoes.</div>
      </div>
      <div className="flex justify-start ml-3 mt-4">
        <button
          type="button"
          className=" bg-yellow-400 text-black lg:py-3 lg:px-7 md:py-2 md:px-5 py-1 sm:px-3 px-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Promotion;

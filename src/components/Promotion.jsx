import React from "react";

const Promotion = () => {
  return (
    <div className="flex justify-start flex-col">
      <div className="text-white text-5xl font-semibold mb-4">
        Buy one get one
      </div>
      <div className="text-yellow-400 text-8xl font-bold">PIZZA TIME</div>
      <div className="flex flex-col mt-3 ml-2 text-white text-xl">
        <div className="my-2">Extra-virgin olive oil, garlic,</div>
        <div className="my-2">mozzarella cheese, onions,</div>
        <div className="my-2">mushrooms, green olives, black</div>
        <div className="my-2">olives, fresh tomatoes.</div>
      </div>
      <div className="flex justify-start ml-3 mt-4">
        <button
          type="button"
          className=" bg-yellow-400 text-black py-3 px-7 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Promotion;

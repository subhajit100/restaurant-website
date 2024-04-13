import React from "react";

const PromotionBanner = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden relative">
      <img
        src="/images/bottom_banner.png"
        alt="promotion banner"
        className="h-auto w-[130vw] banner-img"
      />
      <div className="absolute z-20 top-20 flex flex-col justify-center items-center max-w-4xl">
        <div className="text-yellow-500 text-4xl font-semibold my-1">
          We guarantee
        </div>
        <div className="font-bold text-6xl mb-2">30 Minutes Delivery!</div>
        <div className="text-gray-600 text-md mt-1 max-w-lg text-center leading-7">
          If you’re having a meeting, working late at night and need an extra
          push. Let us know and we will be there
        </div>
        <div className="flex justify-start mt-7">
          <button
            type="button"
            className=" bg-yellow-400 text-black py-4 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white"
          >
            MAKE AN ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;

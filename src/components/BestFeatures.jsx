import React from "react";
import { featureContents } from "../constants";

const BestFeatures = () => {
  return (
    <div className="flex justify-evenly items-center my-2">
      {/* this is one card structure */}
      {featureContents.map((feature) => (
        <div key={feature.heading} className="flex justify-between items-center border-dashed border-2 border-gray-300 p-4 rounded-lg hover:border-yellow-400 max-w-96">
          <div className="p-1 m-1 flex justify-center hover:scale-110 transition-transform duration-500">{feature.logo}</div>
          <div className="flex flex-col justify-center items-start ml-2">
            <div className="text-xl font-bold my-1">{feature.heading}</div>
            <div className="text-md text-gray-700 my-1">{feature.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestFeatures;

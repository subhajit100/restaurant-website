import React from "react";
import { GiScooter } from "react-icons/gi";
import { RiTimerFlashLine } from "react-icons/ri";
import { CiPizza } from "react-icons/ci";

const featureContents = [
  {
    heading: "Free shipping",
    content: "Sign up for updates and get free shipping",
    logo: <GiScooter color="#ffc222" size={75} />,
  },
  {
    heading: "30 Minutes Delivery",
    content: "Everything you order will be quickly delivered to your door.",
    logo: <RiTimerFlashLine color="#ffc222" size={75} />,
  },
  {
    heading: "Best Quality Guarantee",
    content: "Poco is an international chain of family restaurants.",
    logo: <CiPizza color="#ffc222" size={75} />,
  },
];

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

import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { logo, name, profession, rating, feedback } = testimonial;
  return (
    <div className="flex bg-white mx-5 flex-col items-center p-4 rounded-xl min-h-48 mb-3">
      <div className="flex justify-between items-center">
        {/* personal info part */}
        <div className="flex justify-center items-center">
          <img src={logo} alt={name} className="rounded-full w-16 h-16" />
          <div className="flex flex-col justify-center ml-2">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-md">{profession}</div>
          </div>
        </div>
        {/* rating part */}
        <div className="flex justify-center items-center">
          {/* rating times FaStar, and 5-rating times FaRegStar */}
          {new Array(rating).fill(null).map((_, index) => (
            <FaStar key={index} size={16} color="#ffc222" className="ml-1" />
          ))}
          {new Array(5 - rating).fill(null).map((_, index) => (
            <FaRegStar key={index} size={16} color="#D3D3D3" className="ml-1" />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">{feedback}</div>
    </div>
  );
};

export default TestimonialCard;

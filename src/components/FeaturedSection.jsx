import React, { useEffect, useRef, useState } from "react";

import './styles.css';
import Promotion from "./Promotion";
const backgroundImageUrl = "/images/main_background_pizza.png";

const FeaturedSection = () => {
//   const imageRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     observer.observe(imageRef.current);

//     return () => observer.disconnect();
//   }, []);
  return (
    <div className="relative overflow-hidden">
      {/* Background image */}

      <div
        className="inset-0 overflow-hidden"
        style={{ width: "180vw", height: '180vh' }}
      >
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="h-[180vh] w-auto"
        />
      </div>
      {/* content container */}
      {/* <div className="flex justify-center relative z-10"> */}
        {/* <div className="absolute lg:top-80 lg:left-96 md:top-28 md:left-10 z-10 md:visible hidden">
          <div className="flex items-center justify-between">
            <img
              ref={imageRef}
              src="/images/discount_info.png"
              alt="discount_info"
              className={`mr-4 lg:h-72 md:h-64 h-48 ${isVisible ? "animate-slide" : ""}`}
            />
          </div>
        </div> */}
        <div className="absolute top-20 flex justify-center w-full items-center">
          <Promotion />
        </div>
      {/* </div> */}
    </div>
  );
};

export default FeaturedSection;

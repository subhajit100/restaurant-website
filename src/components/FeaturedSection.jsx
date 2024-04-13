import React, { useEffect, useRef, useState } from "react";

import './styles.css';
import Promotion from "./Promotion";
const backgroundImageUrl = "/images/main_background_pizza.png";

const FeaturedSection = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative overflow-hidden" style={{ height: "150vh" }}>
      {/* Background image */}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: "180vw" }}
      >
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="w-auto h-auto object-cover"
        />
      </div>
      {/* content container */}
      <div className="flex justify-start relative z-10">
        <div className="absolute top-80 left-96 z-10">
          <div className="flex items-center justify-between">
            <img
              ref={imageRef}
              src="/images/discount_info.png"
              alt="discount_info"
              className={`mr-4 h-72 ${isVisible ? "animate-slide" : ""}`}
            />
          </div>
        </div>
        <div className="absolute right-24 top-60">
          <Promotion />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

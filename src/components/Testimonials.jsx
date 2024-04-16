import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const testimonials = [
  {
    logo: "/images/avatar-1.jpg",
    name: "JOHN DOE",
    profession: "Designer",
    rating: 4,
    feedback:
      "I would be lost without this restaurant. I would like to personally thank you for the awesome food",
  },
  {
    logo: "/images/avatar-2.jpg",
    name: "ROSE",
    profession: "Developer",
    rating: 5,
    feedback:
      "Forget the trendy pizza shops. This hidden pizza spot makes the best New York style pizza in naples.",
  },
  {
    logo: "/images/avatar-3.jpg",
    name: "CLARA",
    profession: "Lawyer",
    rating: 3,
    feedback:
      "I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful.",
  },
  {
    logo: "/images/avatar-4.jpg",
    name: "NINA MARGARET",
    profession: "Coach",
    rating: 5,
    feedback:
      "Forget the trendy pizza shops. This hidden pizza spot makes the best New York style pizza in naples",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <LuChevronLeftCircle size={28} color="gray" />,
    nextArrow: <LuChevronRightCircle size={28} color="gray" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f7f2e2] min-h-96">
      <div className="flex justify-center items-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold p-8">
        What our customer says
      </div>
      <div className="w-11/12 md:ml-10 md:pl-0 pl-10">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

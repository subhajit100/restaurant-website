import React from "react";
import './styles.css';

const productCategoryData = [
  { imageSrc: "/images/bread.png", name: "BREAD" },
  { imageSrc: "/images/burger.png", name: "BURGER" },
  { imageSrc: "/images/chicken.png", name: "CHICKEN" },
  { imageSrc: "/images/fries.png", name: "FRIES" },
  { imageSrc: "/images/hot_drinks.png", name: "HOT DRINKS" },
  { imageSrc: "/images/hamburger.png", name: "HAMBURGER" },
  { imageSrc: "/images/pizza.png", name: "PIZZA" },
];

const ProductCategory = () => {
  return (
    <div className="flex bg-[#00a149] justify-evenly items-center h-36 mt-28">
       {productCategoryData.map(product => (<div key={product.name} className="flex mx-2 flex-col justify-center items-center cursor-pointer hover:text-yellow-400 food-container">
            <img src={product.imageSrc} alt={product.name} className="h-20 object-contain transition-transform transform hover:scale-125"/>
            <div className="mt-1 text-white font-semibold text-md food-name">
                {product.name}
            </div>
            {/* <div className="splash-effect"></div> */}
        </div>)) }
    </div>
  );
};

export default ProductCategory;

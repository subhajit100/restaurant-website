import React from "react";
import Navbar from "../components/Navbar";
import ProductCategory from "../components/ProductCategory";
import FeaturedSection from "../components/FeaturedSection";
import FamousFoods from "../components/FamousFoods";
import BestFeatures from "../components/BestFeatures";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";
import PromotionBanner from "../components/PromotionBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductCategory />
      <FeaturedSection />
      <FamousFoods />
      {/* The below is done as above famousfood component is absolute, so to cover the space, we need to have spacing from top */}
      <div className="relative">
        <BestFeatures />
        <PopularDishes />
        <Testimonials />
        <PromotionBanner />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

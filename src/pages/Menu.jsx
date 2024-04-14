import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuHead from "../components/MenuHead";
import MenuContent from "../components/MenuContent";
import BestFeatures from "../components/BestFeatures";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <MenuHead />
      <MenuContent />
      <div className="my-7">
        <BestFeatures />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;

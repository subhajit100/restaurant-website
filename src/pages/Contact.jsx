import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHead from "../components/ContactHead";
import ContactOptions from "../components/ContactOptions";
import MapSection from "../components/MapSection";
import SendMessage from "../components/SendMessage";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHead />
      <ContactOptions />
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
            <MapSection />
            <SendMessage />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

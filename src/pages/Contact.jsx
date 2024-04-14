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
      <div className="flex justify-between items-start">
            <MapSection />
            <SendMessage />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

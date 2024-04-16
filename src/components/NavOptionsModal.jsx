import React from "react";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const NavOptionsModal = ({ handleNavCrossClick }) => {
  const { pathname } = useLocation();
  return (
    <div className="absolute top-0 left-0 bg-black min-w-48 min-h-40">
      <div className="flex justify-end mx-2 my-2">
        {/* Close icon */}
        <button
          onClick={() => {
            handleNavCrossClick();
          }}
          className="cross-button"
        >
          <RxCross2 size={25} color="white" className="cross-button" />
        </button>
      </div>
      {/* list of nav options */}
      <div className="flex flex-col p-2 my-2">
        {navLinks.map((link) => (
          <div
            key={link.href}
            className={`mx-2 my-2 text-[15px] text-white font-bold  hover:text-yellow-500 ${
              pathname === link.href ? "text-yellow-500" : ""
            }`}
          >
            <Link to={link.href}>{link.urlName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavOptionsModal;

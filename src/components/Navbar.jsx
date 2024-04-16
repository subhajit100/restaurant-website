import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { GiScooter } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdAddIcCall } from "react-icons/md";
import LoginModal from "./LoginModal";
import NavOptionsModal from "./NavOptionsModal";

const Navbar = () => {
  // tells us the present selected page link
  const { pathname } = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOptionsModalOpen, setIsNavOptionsModalOpen] = useState(false);
  const loginModalRef = useRef(null);
  const navOptionsModalRef = useRef(null);

  useEffect(() => {
    // this is the way to check if we have clicked outside of the loginmodal form and then close it
    const handleOutsideClick = (event) => {
      if (
        loginModalRef.current &&
        !loginModalRef.current.contains(event.target)
      ) {
        // Clicked outside the login modal, so close it
        setIsLoginModalOpen(false);
      }

      if (
        navOptionsModalRef.current &&
        (!navOptionsModalRef.current.contains(event.target) || event.target.classList.contains('cross-button'))
      ) {
        // Clicked outside the login modal, so close it
        setIsNavOptionsModalOpen(false);
      }
      
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleNavCrossClick = () => {
    setIsNavOptionsModalOpen(false);
  }
  return (
    <div className="bg-gray-900 fixed z-40 w-full top-0 left-0">
      {/* below divs for lg size of screen */}
      <div className="lg:flex justify-between items-center hidden lg:visible h-28">
        <div className="p-2 m-2 flex ">
          <div className="mx-4 flex justify-center items-center">
            <Link to="/">
              <img
                src="/images/logo.svg"
                alt="Logo"
                width="100vw"
                height="100vh"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center m-2">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className={`mx-3 text-[18px] text-white font-bold  hover:text-yellow-500 ${
                  pathname === link.href ? "text-yellow-500" : ""
                }`}
              >
                <Link to={link.href}>{link.urlName}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mx-2">
            <GiScooter color="#03C03C" size={55} />
          </div>
          <div className="flex flex-col mx-1 p-1">
            <div className="text-white text-sm">Call and order in</div>
            <div className="text-yellow-500 text-2xl font-bold">
              +1 718-904-4450
            </div>
          </div>
          <div className="relative" ref={loginModalRef}>
            <div
              className="w-10 h-10 flex justify-center items-center mx-4 rounded-full border-2 border-white hover:bg-yellow-500 cursor-pointer"
              onClick={() => setIsLoginModalOpen((prevVal) => !prevVal)}
            >
              <FaUser size={20} color="white" />
            </div>
            {isLoginModalOpen && <LoginModal />}
          </div>
        </div>
      </div>
      {/* below divs for less than lg size of screens */}
      <div className="flex justify-between items-center lg:hidden h-24">
        {/* three bars icon part */}
        <div className="flex justify-center items-center mx-2 p-3 relative" onClick={()=> setIsNavOptionsModalOpen(true)} ref={navOptionsModalRef}>
          <HiBars3CenterLeft color="white" size={40} />
          {isNavOptionsModalOpen && <NavOptionsModal handleNavCrossClick={handleNavCrossClick}/>}
        </div>
        <div className="mx-4 flex justify-center items-center p-2">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              width="120vw"
              height="120vh"
            />
          </Link>
        </div>
        <div className="flex flex-col mx-1 p-1">
            <div className="text-white text-xs md:text-sm">Call and order in</div>
            <div className="text-yellow-500 text-md md:text-2xl font-bold">
              +1 718-904-4450
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;

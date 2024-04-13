import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialMediaInfo = [
  {
    socialLink: "https://www.facebook.com/webdevsubhajit",
    logo: <FaFacebook size={20} />,
  },
  {
    socialLink: "https://twitter.com/WebDevSubhajit",
    logo: <FaXTwitter size={20} />,
  },
  {
    socialLink: "https://www.instagram.com/webdevsubhajit/",
    logo: <FaInstagramSquare size={20} />,
  },
  {
    socialLink: "https://www.linkedin.com/in/subhajit-adhikary/",
    logo: <FaLinkedin size={20} />,
  },
  {
    socialLink: "https://www.youtube.com/@subhajitadhikary-99",
    logo: <FaYoutube size={20} />,
  },
];

const Footer = () => {
  return (
    <>
    <div className="bg-[#181818] pt-24">
      <div className="mx-4 flex justify-center items-center relative pb-20">
        <img
          src="/images/logo.svg"
          alt="Logo"
          height="140vh"
          width="140vw"
          className="z-10"
        />
        <hr class="block w-[100%] border-solid border-gray-700 border-b-0 border-t absolute"></hr>
      </div>
      <div className="flex mt-5 justify-around items-start pb-28">
        {/* each of below cards are div structures */}
        <div className="flex flex-col justify-center items-center ml-10">
          <div className="text-xl text-white font-bold mb-2">ADDRESS</div>
          <div className="flex flex-col justify-center text-gray-400 text-sm max-w-36 text-center">
            <div>570 8th Ave,</div>
            <div>New York, NY 10018</div>
            <div>United States</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl text-white font-bold mb-2">BOOK A TABLE</div>
          <div className="flex flex-col justify-center text-gray-400 text-sm max-w-48 text-center mt-2">
            <div>Please call us on the below</div>
            <div>number to book a table</div>
          </div>
          <div className="text-yellow-500 font-bold text-xl mt-2">
            (850) 435-4155
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl text-white font-bold mb-4">OPENING HOURS</div>
          <div className="text-gray-400 text-sm mb-2">
            Monday – Friday: <span className="text-white"> 8am – 4pm</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            {" "}
            Saturday: <span className="text-white">9am – 5pm</span>{" "}
          </div>
          <div className="flex justify-center items-center mt-3">
            {/* icons go here, using <Link to /> */}
            {socialMediaInfo.map((socialAccount) => (
              <div
                key={socialAccount.socialLink}
                className="mx-1 p-2 rounded-full bg-white hover:bg-yellow-400"
              >
                <Link target="blank" to={socialAccount.socialLink}>
                  {socialAccount.logo}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl text-white font-bold mb-2">NEWSLETTER</div>
          <div className="text-gray-400 text-sm text-center flex flex-col">
            <div className="my-1">Subscribe to the weekly newsletter</div>
            <div className="my-1">for all the latest updates</div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <input
              type="text"
              className="bg-black text-white border-white border rounded-md p-2 focus:outline-none focus:border-gray-300 w-40"
              placeholder="Enter email..."
            />
            <button
              type="button"
              className=" bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 text-md font-semibold hover:text-white ml-1"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
     <div className="bg-[#00a850] min-h-24 flex justify-between items-center px-4">
        <div className="text-white text-md">
        Copyright © 2022 <span className="text-yellow-500">pocofood</span>. All Rights Reserved.
        </div>
        <div>
            <img src="/images/footer_cards.png" alt="Footer cards" width={300} className="h-auto"/>
        </div>
     </div>
    </>
  );
};

export default Footer;

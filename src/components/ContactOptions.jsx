import React from "react";
import { contactOptions } from "../constants";

const ContactOptions = () => {
  return (
    <div className="md:flex md:flex-row flex-col justify-evenly items-center mt-4 mb-8">
      {/* each card item for contact */}
      {contactOptions.map(contact => <div className="flex flex-col lg:items-start items-center justify-center my-3 md:my-1">
        <div className="my-3">
          {contact.logo}
        </div>
        <div className="text-xl font-bold my-3">{contact.title}:</div>
        <div className="text-gray-500 text-md leading-7">
          {contact.content.map((singleLine) => (
            <div>{singleLine}</div>
          ))}
        </div>
      </div>)}
    </div>
  );
};

export default ContactOptions;

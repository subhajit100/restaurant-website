import React, { useState } from "react";

const initialFormData = {
    name: "",
    email: "",
    subject: "",
    comment: "",
  }

const SendMessage = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    setFormData(initialFormData);
  };
  return (
    <div className="w-[48%]  border-gray-300 border rounded-lg p-2 mr-6 ml-1 mb-16">
      <div className="text-4xl font-bold mt-6 mb-8 text-center">
        Send us a message
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 w-[80%] mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border rounded-xl px-3 py-2 focus:border-gray-400 text-gray-600"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-xl px-3 py-2 focus:border-gray-400 text-gray-600"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border rounded-xl px-3 py-2 focus:border-gray-400 text-gray-600"
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
          className="w-full border rounded-xl px-3 py-2 focus:border-gray-200 text-gray-600"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 text-md hover:text-white"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

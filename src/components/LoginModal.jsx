import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here, for example, sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="absolute top-16 right-5 bg-gray-900 border-t-2 border-yellow-500 flex flex-col h-[380px] w-[330px] p-3 z-20">
      <div className="flex text-md text-gray-400 mt-2">
        Sign in below or
        <span className="text-yellow-400 mx-2">
          <Link to="/">Create an account</Link>
        </span>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 mx-2">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-400 font-semibold mb-2"
          >
            Email{email ? '' : <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-400 font-bold mb-2"
          >
            Password{password ? '' : <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 hover:text-white"
        >
          Login
        </button>
      </form>
      <div className="mt-8 mx-3 text-yellow-400 cursor-pointer">
        <Link to='/'>
        Lost your password?
        </Link></div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from "react";
import axios from "axios";
export default function FormContact() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:4005/send-message", formdata);
      setStatus(response.data.message || "Message send successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Fail to send the message , Please try again");
      console.error("Failed to send the message:", error.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={hadleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          value={formdata.name}
          onChange={handleChange}
          id="name"
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={formdata.email}
          onChange={handleChange}
          id="email"
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          value={formdata.message}
          onChange={handleChange}
          rows={4}
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

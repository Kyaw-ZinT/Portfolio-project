import React, { useState } from "react";
import axios from "axios";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const data = {
        name,
        email,
        message,
      };
      const response = await axios.post("http://localhost:4005/api/contact", data);
      if (response.status === 200) {
        setSuccess(response.data.msg);
      }
    } catch (e) {
      setError("Error sending message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows={4}
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
        ></textarea>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        {isLoading ? "Sending..." : "Send Message"}{" "}
      </button>
    </form>
  );
}

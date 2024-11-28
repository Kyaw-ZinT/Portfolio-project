import React from "react";

export default function FormContact() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
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
          id="message"
          rows={4}
          className="rounded-md w-full mt-1 block shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-2"
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

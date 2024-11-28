import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">~ Kyaw Zin Tun ~</h3>
            <p className="text-gray-400">Building the web, one component at a time</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Kyaw-ZinT"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/kyaw-zin-tun-8225a0265"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a href="kyawtun023212@gmail.com" className="hover:text-indigo-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

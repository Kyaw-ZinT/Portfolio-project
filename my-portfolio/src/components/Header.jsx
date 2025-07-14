import React, { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 fixed w-full z-50 shadow-sm backdrop-blur-sm">
      <nav className="px-4 sm:px-6  lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Kyaw-Zintun
          </a>

          {/* {Desktop Navigation} */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Kyaw-ZinT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kyaw-zin-tun-a450b4251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600
                hover:text-gray-900"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* {Mobile menu} */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}{" "}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="text-gray-600 block hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 block hover:text-gray-900">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 block hover:text-gray-900">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 block hover:text-gray-900">
              Contact
            </a>
            <div className="flex  space-x-4 pt-4">
              <a
                href="https://github.com/Kyaw-ZinT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kyaw-zin-tun-8225a0265"
                target="_blank"
                rel="noopener noreferrer"
                text-gray-600
                hover:text-gray-900
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

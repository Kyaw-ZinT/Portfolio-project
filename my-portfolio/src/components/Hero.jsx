import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm KyawZinTun <span className="block text-indigo-600">Full-stack Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I craft beautiful and functional web experiences using modern technologies.
            <span className="block">Passionate about creating user-friendly interfaces and writing clean code.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-transparent text-base  px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
            >
              View My Work <ArrowRight className="ml-2  w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center  px-6 py-3 rounded-md bg-white hover:bg-gray-50 text-base text-gray-700 font-medium"
            >
              {" "}
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

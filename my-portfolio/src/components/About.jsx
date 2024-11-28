import React from "react";
import MyImage from "../assets/images/photo4.jpg";
import { Code2, Cpu, Palette } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">About me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="ml-2 sm:ml-24  md:ml-20 ">
            <img src={MyImage} alt="Developer working" className="rounded-lg shadow-lg object-contain h-[400px]" />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              "I'm a full-stack developer passionate about building efficient and user-friendly web applications.
              Skilled in creating responsive frontends and scalable backends, I focus on delivering clean, maintainable
              code and seamless digital experiences. Constantly learning and evolving, I strive to craft solutions that
              combine functionality and aesthetics."
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Code2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Clean Code</h3>
                  <p className="mt-1 text-gray-600">Writing maintainable and scalable code is my priority.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <Palette className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Modern Design</h3>
                  <p className="mt-1 text-gray-600">Creating beautiful and responsive user interfaces.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Cpu className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Problem Solving</h3>
                  <p className="mt-1 text-gray-600">Finding elegant solutions to complex problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

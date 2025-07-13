import React from "react";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImage from "../images/ecommerce.jpg";
import nextMovie from "../images/nextMovie.png";
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and Node.js",
    image: ecommerceImage,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "Multer", "JWT Authentication"],
    liveLink: "https://e-commerce-iota-beryl-83.vercel.app",
    githubFrontend: "https://github.com/Kyaw-ZinT/ecomerce-frontend.git",
    githubBackend: "https://github.com/Kyaw-ZinT/ecommerce-backend",
  },
  {
    title: "Next Movie App",
    description: "A movie discovery app built with Next.js and TMDB API",
    image: nextMovie,
    tech: ["Next.js", "JavaScript", "TMDB API"],
    liveLink: "https://next-movies-navy.vercel.app",
    githubLink: "https://github.com/Kyaw-ZinT/Next-Movies",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80",
    tech: ["React", "OpenWeather API", "Chart.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-700 mr-2"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Frontend Code
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Backend Code
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

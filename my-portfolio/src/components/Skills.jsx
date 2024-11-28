import React from "react";
const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  Backend: ["Node.js", "Express", "MongoDB", "SQLite", "Prisma ORM", "Firebase"],
  Tools: ["Git", "VS Code"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
};
export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="containers mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

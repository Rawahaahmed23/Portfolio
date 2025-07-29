"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // import icons

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=300&width=400&text=E-commerce+Platform",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://ecommerce-demo.example.com",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "/placeholder.svg?height=300&width=400&text=Task+Management+App",
    tech: ["React", "TypeScript", "PostgreSQL"],
    url: "https://taskapp-demo.example.com",
    github: "https://github.com/username/task-management-app",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    image: "/weather.png",
    tech: ["React.js", "Javascript", "API Integration"],
    url: "https://mern-projects-xvgc.vercel.app/",
    github: "https://github.com/Rawahaahmed23/mern-projects/tree/main/weather",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Portfolio() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
              Portfolio
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
          </header>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

          
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
const projects = [
  {
    title: "Project Bin",
    description:
      "A platform designed for developers, students, and tech enthusiasts to share, discover, and explore innovative project ideas. Whether you're a beginner looking for inspiration or an experienced developer searching for your next big project, Project Bin is your go-to destination.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Sanity",
      "Auth",
    ],
    liveUrl: "https://project-bin.vercel.app/",
    githubUrl: "https://github.com/surajjaiswal-cmd/project-bin",
    featured: true,
  },
  {
    title: "Hammer E-commerce",
    description:
      "An e-commerce website made only with HTML, CSS, and JavaScript. It doesn't have any backend functionality; it is purely front-end with a modern design and responsive layout.",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Responsive Design",
    ],
    liveUrl: "https://surajjaiswal-cmd.github.io/hammer-project/",
    githubUrl: "https://github.com/surajjaiswal-cmd/hammer-project",
    featured: true,
  },
  {
    title: "Sell Trust - Home Service Booking App",
    description:
      "A home service booking web application built using Next.js, TypeScript, Tailwind CSS, Node.js, and Bootstrap. Users can book services easily with a clean and modern interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Bootstrap",
    ],
    liveUrl: "https://sell-trust.vercel.app/",
    githubUrl: "https://github.com/surajjaiswal-cmd/sell-trust",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "A weather app where you can view detailed weather forecasts and conditions, built with React. This app provides real-time updates, allowing you to stay informed about the latest weather changes, including temperature, humidity, wind speed, and more.",
    technologies: [
      "React.js",
      "Weather API",
      "CSS3",
      "Bootstrap",
      "JavaScript",
    ],
    liveUrl: "https://surajjaiswal-cmd.github.io/weather-react-apk/",
    githubUrl: "https://github.com/surajjaiswal-cmd/weather-react-apk",
    featured: false,
  },

  {
    title: "Currency Converter",
    description:
      "A currency converter developed with React that showcases price variations worldwide. This distinctive online tool offers real-time exchange rates for multiple currencies, simplifying the process of converting and comparing values effectively.",
    technologies: [
      "React.js",
      "Currency API",
      "CSS3",
      "Bootstrap",
      "JavaScript",
    ],
    liveUrl: "https://surajjaiswal-cmd.github.io/currency-convertor-react/",
    githubUrl: "https://github.com/surajjaiswal-cmd/currency-convertor-react",
    featured: false,
  },
];


  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group">
              <motion.div
                variants={cardHoverVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400">
                {project.featured && (
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full mb-4 group-hover:animate-pulse">
                    Featured
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:animate-bounce" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group/btn">
                    <Github className="w-4 h-4 group-hover/btn:animate-bounce" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mx-auto group">
            {showAll ? (
              <>
                <EyeOff className="w-5 h-5 group-hover:animate-bounce" />
                Show Less
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 group-hover:animate-bounce" />
                View More Projects
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
}

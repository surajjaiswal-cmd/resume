"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Smartphone,
  Cloud,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript (ES6+)", "TypeScript"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Next.js",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "Nest.js (Basics)"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Database & ORM",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Prisma", "Drizzle"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Full-Stack",
      icon: Smartphone,
      skills: ["MERN Stack"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "Tools & Deployment",
      icon: Cloud,
      skills: ["Postman", "Vercel"],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.5 },
              }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-500 h-full border border-gray-200 dark:border-gray-600">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

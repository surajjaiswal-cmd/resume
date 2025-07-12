"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function Education() {
const education = [
  {
    degree: "MBA (Financial Management)",
    school: "Swami Vivekanand Subharti University",
    location: "Meerut, UP",
    period: "July 2023 - Present",
    status: "In Progress",
    achievements: [],
  },
  {
    degree: "BSC (Bachelor of Computer Science)",
    school: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya",
    location: "Katni, MP",
    period: "July 2020 - June 2023",
    status: "Completed",
    achievements: [],
  },
  {
    degree: "Diploma in Computer Application",
    school: "Makhanlal Chaturvedi National University",
    location: "Bhopal, MP",
    period: "May 2019 - January 2020",
    status: "Completed",
    achievements: [],
  },
  {
    degree: "12th Standard",
    school: "Innovative Public H. S. School",
    location: "Dewas, MP",
    period: "2018",
    status: "Completed",
    achievements: [
      "Passed with 75% aggregate",
      "Focus on commerce and mathematics",
    ],
  },
  {
    degree: "10th Standard",
    school: "Innovative Public H. S. School",
    location: "Dewas, MP",
    period: "2016",
    status: "Completed",
    achievements: [
      "Passed with 79% aggregate",
      "Strong foundation in core subjects",
    ],
  },
];


  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Code Better",
      period: "January 2024 - July 2024",
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
    },
  ];

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
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education & Certifications
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group">
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {edu.school}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>

                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0 group-hover:animate-pulse"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Certifications
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-purple-600 mt-1 group-hover:animate-bounce" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {cert.period}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Internship",
      company: "Inventurs Cube",
      location: "Indore, MP",
      period: "March 2025 - July 2025",
      description: [
        "Supported dashboard development using Next.js and React.js",
        "Worked on APIs with Express/NestJS and did unit testing",
        "Collaborated with senior developers on full-stack projects",
        "Gained hands-on experience with modern web development practices",
      ],
    },
    {
      title: "Internship",
      company: "Code Better",
      location: "Indore, MP",
      period: "August 2024 - January 2025",
      description: [
        "Assisted in the development and implementation of training programs for new employees",
        "Provided support to existing staff on various tasks and duties",
        "Completed Full Stack Web Development certification",
        "Worked on real-world projects using MERN stack",
      ],
    },
    {
      title: "Trainee",
      company: "Kirloskar Brothers Limited",
      location: "Dewas, MP",
      period: "December 2022 - November 2023",
      description: [
        "Assisted in pump assembly and basic maintenance tasks",
        "Helped in testing and quality inspections of components",
        "Handled HPML Line operations",
        "Gained experience in quality control and manufacturing processes",
      ],
    },
    {
      title: "Financial Advisor",
      company: "Angel Broking Firms",
      location: "Indore, MP",
      period: "November 2019 - November 2022",
      description: [
        "Created plans and communicated deadlines to complete projects on time",
        "Conducted detailed analysis of clients' financial situations, including risk assessment, cash flow management, and retirement planning",
        "Worked as Stock Broker at Angel One",
        "Developed expertise in banking and financial services",
      ],
    },
    {
      title: "Sales Executive",
      company: "Big Box",
      location: "Dewas, MP",
      period: "May 2018 - February 2019",
      description: [
        "Analyzed past sales data and team performance to develop realistic sales goals",
        "Managed customer relationships and sales processes",
        "Achieved sales targets consistently",
        "Developed strong communication and negotiation skills",
      ],
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

const cardHoverVariants = {
  hover: {
    scale: 1.01,
    transition: { duration: 0.5 },
  },
};

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group">
              <motion.div
                variants={cardHoverVariants}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 group-hover:border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-600 dark:text-gray-300 flex items-start group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

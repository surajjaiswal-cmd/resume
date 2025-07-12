"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Download,
  MapPin,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Suraj Jaiswal 12725.pdf";
    link.download = "Suraj_Jaiswal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full">
              <Image
                src="/profile.jpg"
                alt="Suraj Jaiswal"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Suraj Jaiswal
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Full Stack Web Developer
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Dewas, MP</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9165076563</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:surajjaiswal0963@gmail.com"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            Email Me
          </motion.a>

          <motion.a
            href="https://wa.me/919165076563"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            WhatsApp
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/suraj-jaiswal-1518a5275/"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
            <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/surajjaiswal-cmd"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
            <Github className="w-5 h-5 group-hover:animate-bounce" />
            GitHub
          </motion.a>

          <motion.button
            onClick={handleDownloadResume}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

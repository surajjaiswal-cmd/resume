"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
  Phone,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "surajjaiswal0963@gmail.com",
      href: "mailto:surajjaiswal0963@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9165076563",
      href: "tel:+919165076563",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/919165076563",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dewas, Madhya Pradesh",
      href: "https://www.google.com/maps/place/Dewas,+Madhya+Pradesh",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suraj-jaiswal-1518a5275/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/surajjaiswal-cmd",
      color: "hover:bg-gray-800",
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology. Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  variants={itemVariants}
                  whileHover="hover"
                  className="group block">
                  <motion.div
                    variants={cardHoverVariants}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Follow Me
            </h3>

            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 ${social.color}`}>
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-bold mb-3">Let's Work Together</h4>
              <p className="mb-4 opacity-90">
                I'm currently available for freelance work and full-time
                opportunities.
              </p>
              <motion.a
                href="mailto:surajjaiswal0963@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Start a Conversation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

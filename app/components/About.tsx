"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>

          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              A detail-oriented and hard-working web developer with a strong
              problem-solving mindset, aiming to leverage technical expertise to
              build efficient and user-friendly web applications. Passionate
              about financial advisory concepts and dedicated to delivering
              solutions that enhance user experience and business performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>
              Currently pursuing MBA in Financial Management from Swami
              Vivekanand Subharti University, Meerut, while actively working as
              a Full Stack Developer. My journey combines technical expertise
              with business acumen, making me uniquely positioned to understand
              both the technical and business aspects of software development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}>
              Punctual, adaptable, and eager to contribute to a dynamic team in
              a growth-driven IT environment. When I'm not coding, you can find
              me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through mentoring fellow
              developers.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "APIs", level: 88 },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            About <span className="text-[#9ECAD6]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] mx-auto rounded-full" />
        </motion.div>

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#9ECAD6]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#84D9E4]/20 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                <span className="text-white font-medium">I&apos;m a passionate Full-Stack Developer</span> dedicated to creating 
                exceptional digital experiences that combine cutting-edge technology with intuitive design. 
                With expertise in modern web technologies, I specialize in building scalable applications 
                that solve real-world problems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My journey in software development is driven by curiosity and a commitment to continuous 
                learning. I thrive on transforming complex ideas into elegant, user-friendly solutions 
                using <span className="text-[#9ECAD6] font-medium">JavaScript, React, Node.js,</span> and modern web APIs.
              </p>
            </motion.div>

            {/* Skill Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-white mb-6">Core Technologies</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[#9ECAD6] text-sm">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 1 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
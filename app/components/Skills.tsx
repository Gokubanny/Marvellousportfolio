"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  delay: number;
  gradient: string;
}

function SkillCard({ title, skills, icon, delay, gradient }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative perspective-1000"
    >
      <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6 h-full transform-style-preserve-3d transition-all duration-300 group-hover:border-white/20">
        {/* Background Gradient */}
        <div className={`absolute inset-0 ${gradient} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        >
          <div className={`absolute inset-0 ${gradient} rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
          <Icon 
            icon={icon} 
            className="w-8 h-8 text-white relative z-10" 
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-medium text-white text-center mb-4 relative z-10">
          {title}
        </h3>

        {/* Skills List */}
        <div className="space-y-2 relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.1 * index }}
              className="relative"
            >
              <div className="text-white/80 text-sm py-2 px-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span>{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 ${gradient} opacity-5 rounded-2xl`} />
          <div className="absolute inset-0 border-2 border-white/10 rounded-2xl" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      icon: "material-symbols:code",
      gradient: "bg-gradient-to-br from-[#9ECAD6] to-[#84D9E4]",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
      icon: "material-symbols:server-gen1",
      gradient: "bg-gradient-to-br from-[#ABDFE8] to-[#AADCD4]",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "REST APIs", "Cloud basics"],
      icon: "material-symbols:settings",
      gradient: "bg-gradient-to-br from-[#84D9E4] to-[#9ECAD6]",
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Technical <span className="text-[#9ECAD6]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and best practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={0.2 + index * 0.1}
              gradient={category.gradient}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-[#9ECAD6]/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#84D9E4]/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
}
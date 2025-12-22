"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string[];
  icon: string;
  isLeft: boolean;
  delay: number;
}

function TimelineItem({ title, organization, date, description, icon, isLeft, delay }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          whileHover={{ 
            y: -5, 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="group relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9ECAD6]/10 to-[#84D9E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          
          <div className="relative z-10">
            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.2 }}
              className="text-[#9ECAD6] font-medium text-sm mb-2"
            >
              {date}
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.3 }}
              className="text-xl font-medium text-white mb-1 group-hover:text-[#9ECAD6] transition-colors duration-300"
            >
              {title}
            </motion.h3>

            {/* Organization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.4 }}
              className="text-white/60 font-medium mb-4"
            >
              {organization}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.5 }}
              className="space-y-2"
            >
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#9ECAD6] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 border-2 border-[#9ECAD6]/20 rounded-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Timeline Line and Icon */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        {/* Timeline Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#9ECAD6] to-[#84D9E4] rounded-full flex items-center justify-center border-4 border-black shadow-xl group-hover:scale-110 transition-transform duration-300"
        >
          <Icon icon={icon} className="w-7 h-7 text-black" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9ECAD6] to-[#84D9E4] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute top-16 bottom-0 w-1 bg-gradient-to-b from-[#9ECAD6] to-transparent opacity-30" />
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      organization: "TechCorp Solutions",
      date: "2024 - Present",
      description: [
        "Developed responsive web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver scalable solutions",
        "Implemented REST APIs and database optimization techniques"
      ],
      icon: "material-symbols:work",
      isLeft: true,
    },
    {
      title: "React Developer",
      organization: "StartupXYZ",
      date: "2023 - 2024",
      description: [
        "Built interactive user interfaces with React and TypeScript",
        "Optimized application performance and user experience",
        "Participated in code reviews and maintained clean coding standards"
      ],
      icon: "material-symbols:code",
      isLeft: false,
    },
    {
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      date: "October 2023",
      description: [
        "Led a team to develop an innovative productivity application",
        "Implemented real-time collaboration features using WebSocket",
        "Won first place among 50+ competing teams"
      ],
      icon: "material-symbols:trophy",
      isLeft: true,
    },
    {
      title: "Open Source Contributor",
      organization: "Various Projects",
      date: "2022 - Present",
      description: [
        "Contributed to multiple open-source JavaScript libraries",
        "Fixed bugs and implemented new features for community projects",
        "Maintained high code quality and documentation standards"
      ],
      icon: "mdi:github",
      isLeft: false,
    },
    {
      title: "Web Development Bootcamp",
      organization: "CodeAcademy Pro",
      date: "2022",
      description: [
        "Completed intensive full-stack development program",
        "Mastered modern web technologies and frameworks",
        "Built 10+ projects showcasing various skills and technologies"
      ],
      icon: "material-symbols:school",
      isLeft: true,
    },
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Professional <span className="text-[#9ECAD6]">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A timeline of growth, learning, and achievements in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#9ECAD6] via-[#84D9E4] to-[#AADCD4] opacity-20 origin-top"
          />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              date={exp.date}
              description={exp.description}
              icon={exp.icon}
              isLeft={exp.isLeft}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>

        {/* Bottom Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#9ECAD6]/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
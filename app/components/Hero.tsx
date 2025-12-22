"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    "Full-Stack Developer",
    "Building scalable web applications",
    "Creating interactive digital experiences"
  ], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4">
            <span className="block">Omatule</span>
            <span className="block text-[#9ECAD6] glow-text">Marvellous</span>
          </h1>
        </motion.div>

        {/* Typewriter Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-20 md:h-16 mb-8"
        >
          <h2 className="text-lg md:text-2xl lg:text-3xl font-light text-white/90">
            <span>{currentText}</span>
            <span className="animate-pulse text-[#9ECAD6]">|</span>
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="/cv.pdf"
            download="Omatule_Marvellous_CV.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] text-black font-medium rounded-full overflow-hidden transition-all duration-300 flex items-center gap-2"
          >
            <span className="relative z-10">Download CV</span>
            <Icon 
              icon="material-symbols:download-rounded" 
              className="w-5 h-5 relative z-10 group-hover:animate-bounce"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ABDFE8] to-[#AADCD4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-transparent text-white font-medium rounded-full border-2 border-[#9ECAD6] overflow-hidden transition-all duration-300 flex items-center gap-2"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">View My Work</span>
            <Icon 
              icon="material-symbols:arrow-outward-rounded" 
              className="w-5 h-5 relative z-10 group-hover:text-black group-hover:rotate-45 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#9ECAD6] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 20px #9ECAD6, 0 0 40px #9ECAD6, 0 0 60px #9ECAD6;
        }
      `}</style>
    </section>
  );
}
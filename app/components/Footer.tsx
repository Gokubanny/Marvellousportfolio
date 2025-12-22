"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const socialLinks = [
    { icon: "mdi:github", href: "https://github.com", label: "GitHub" },
    { icon: "mdi:linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "ic:baseline-email", href: "mailto:omatule.marvellous@email.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative backdrop-blur-xl bg-black/20 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 left-1/4 w-32 h-32 bg-[#9ECAD6]/5 rounded-full blur-2xl" />
        <div className="absolute -top-4 right-1/4 w-32 h-32 bg-[#84D9E4]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-light text-white mb-2">
              <span className="text-[#9ECAD6]">Omatule</span> Marvellous
            </h3>
            <p className="text-white/60 text-sm">
              Full-Stack Developer crafting digital experiences
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-white/70 text-sm">
              © 2025 Omatule Marvellous. All Rights Reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#9ECAD6]/20 border border-white/20 hover:border-[#9ECAD6]/40 rounded-full transition-all duration-300 group"
            >
              <Icon 
                icon="material-symbols:keyboard-arrow-up" 
                className="w-5 h-5 text-white/70 group-hover:text-[#9ECAD6] transition-colors duration-300" 
              />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#9ECAD6]/40 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden"
                aria-label={social.label}
              >
                <Icon 
                  icon={social.icon} 
                  className="w-5 h-5 text-white/70 group-hover:text-[#9ECAD6] transition-colors duration-300 relative z-10" 
                />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#9ECAD6]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Decorative Elements */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-4 left-8 w-8 h-8 bg-[#9ECAD6]/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-4 right-8 w-6 h-6 bg-[#84D9E4]/10 rounded-full blur-xl"
        />
      </div>
    </footer>
  );
}
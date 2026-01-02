"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand with Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 text-xl font-light text-white focus:outline-none focus:ring-2 focus:ring-[#9ECAD6] rounded-full"
          >
            <motion.div
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 12px rgba(171,223,232,0.8))" }}
              transition={{ duration: 0.25 }}
              className="relative w-8 h-8 rounded-full overflow-hidden bg-white/5 border border-white/10"
            >
              <Image
                src="/logo.png"
                alt="Omatule Marvellous logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 24px 6px rgba(171,223,232,0.55)" }}
              />
            </motion.div>
            <span><span className="text-[#9ECAD6]">Omatule</span> Marvellous</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="relative text-white/80 hover:text-[#9ECAD6] transition-colors duration-300 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#9ECAD6] rounded"
                whileHover={{ y: -2 }}
              >
                <span>{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9ECAD6] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#9ECAD6] rounded"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon
              icon={isMobileMenuOpen ? "material-symbols:close" : "material-symbols:menu"}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/40 backdrop-blur-xl rounded-b-xl"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white/80 hover:text-[#9ECAD6] transition-colors duration-300 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9ECAD6] rounded"
                whileHover={{ x: 10 }}
              >
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
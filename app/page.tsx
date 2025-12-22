"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

// Dynamically import the 3D background to avoid SSR issues
const ThreeBackground = dynamic(() => import("@/app/components/ThreeBackground"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />
  ),
});

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-[#9ECAD6] border-t-transparent rounded-full"
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div data-editor-id="app/page.tsx:5:5" className="relative min-h-screen">
        {/* 3D Animated Background */}
        <ThreeBackground />
        
        {/* Main Background with the cosmic background image */}
        <div 
          className="fixed inset-0 -z-20"
          style={{
            backgroundImage: 'url("https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2m4tagmk1g.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Page Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Skills />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Projects />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Experience />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Contact />
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] transform-origin-left z-50"
          style={{
            scaleX: 0,
          }}
          animate={{
            scaleX: typeof window !== "undefined" ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </div>
    </Suspense>
  );
}
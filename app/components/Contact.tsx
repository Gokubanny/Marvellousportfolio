"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "mdi:github",
      color: "hover:text-[#9ECAD6]",
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com",
      icon: "mdi:linkedin",
      color: "hover:text-[#84D9E4]",
    },
    {
      name: "Email",
      url: "mailto:omatule.marvellous@email.com",
      icon: "ic:baseline-email",
      color: "hover:text-[#AADCD4]",
    },
  ];

  const inputFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "subject", label: "Subject", type: "text", required: true },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Let&apos;s <span className="text-[#9ECAD6]">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium text-white mb-6">Get in Touch</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  I&apos;m always excited to discuss new opportunities, innovative projects, 
                  and potential collaborations. Whether you have a specific project in mind 
                  or just want to connect, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${link.color}`}
                  >
                    <div className="relative">
                      <Icon 
                        icon={link.icon} 
                        className="w-6 h-6 text-white/70 group-hover:text-current transition-colors duration-300" 
                      />
                      <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300" />
                    </div>
                    <div>
                      <span className="text-white font-medium group-hover:text-current transition-colors duration-300">
                        {link.name}
                      </span>
                      <p className="text-white/50 text-sm">
                        {link.name === "Email" ? "omatule.marvellous@email.com" : `@omatule${link.name.toLowerCase()}`}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#9ECAD6]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#84D9E4]/10 rounded-full blur-2xl" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Input Fields */}
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#9ECAD6] focus:bg-white/10 transition-all duration-300"
                      placeholder=" "
                    />
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === field.name || formData[field.name as keyof typeof formData]
                          ? 'top-1 text-xs text-[#9ECAD6]'
                          : 'top-3 text-white/70'
                      }`}
                    >
                      {field.label} {field.required && <span className="text-[#9ECAD6]">*</span>}
                    </label>
                  </motion.div>
                ))}

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#9ECAD6] focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder=" "
                  />
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? 'top-1 text-xs text-[#9ECAD6]'
                        : 'top-3 text-white/70'
                    }`}
                  >
                    Message <span className="text-[#9ECAD6]">*</span>
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] text-black font-medium rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Send Message</span>
                    <Icon 
                      icon="material-symbols:send" 
                      className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ABDFE8] to-[#AADCD4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
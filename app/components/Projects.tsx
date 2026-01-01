"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    liveDemo: string;
    github: string;
    image: string;
    gradient: string;
}

interface ProjectCardProps {
    project: Project;
    delay: number;
    onClick: () => void;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

function ProjectCard({ project, delay, onClick }: ProjectCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60, rotateY: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay }}
            whileHover={{
                y: -20,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            onClick={onClick}
            className="group relative cursor-pointer perspective-1000"
        >
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden transform-style-preserve-3d transition-all duration-300 group-hover:border-white/20">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#9ECAD6] transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded-full border border-white/10">
                                +{project.techStack.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-2 bg-[#9ECAD6]/20 text-[#9ECAD6] rounded-lg text-sm hover:bg-[#9ECAD6]/30 transition-colors duration-300"
                        >
                            <Icon icon="material-symbols:open-in-new" className="w-4 h-4" />
                            <span>Live Demo</span>
                        </motion.a>

                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-2 bg-white/10 text-white/80 rounded-lg text-sm hover:bg-white/20 transition-colors duration-300"
                        >
                            <Icon icon="mdi:github" className="w-4 h-4" />
                            <span>GitHub</span>
                        </motion.a>
                    </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-[#9ECAD6]/20 rounded-2xl" />
                </div>
            </div>
        </motion.div>
    );
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/60"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
                        >
                            <Icon icon="material-symbols:close" className="w-5 h-5 text-white" />
                        </button>

                        <div className="p-8">
                            {/* Project Image */}
                            <div className="relative h-66 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className={`absolute inset-0 ${project.gradient} opacity-20 rounded-2xl`} />
                            </div>

                            {/* Project Details */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-3xl font-medium text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed mb-6">
                                        {project.longDescription}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] text-black font-medium rounded-full hover:from-[#ABDFE8] hover:to-[#AADCD4] transition-all duration-300"
                                        >
                                            <Icon icon="material-symbols:open-in-new" className="w-5 h-5" />
                                            <span>Live Demo</span>
                                        </motion.a>

                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Icon icon="mdi:github" className="w-5 h-5" />
                                            <span>GitHub</span>
                                        </motion.a>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-medium text-white mb-4">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-2 bg-white/10 text-white/80 rounded-lg border border-white/10 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects: Project[] = [
        {
            id: 1,
            title: "HR Management System",
            description: "Comprehensive HR platform for employee management, payroll, and performance tracking.",
            longDescription: "A full-stack HR Management System built with React and Node.js, featuring employee onboarding, payroll management, performance tracking, and real-time analytics. The system includes role-based access control, automated workflows, and integration with external APIs for seamless operations.",
            techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
            liveDemo: "https://staff-hive.onrender.com",
            github: "https://github.com/Gokubanny/Staff-Hive.git",
            image: "https://res.cloudinary.com/dxpquojo2/image/upload/v1766412165/staffhive_ys0n8e.png",
            gradient: "bg-gradient-to-br from-[#9ECAD6] to-[#84D9E4]",
        },
        {
            id: 2,
            title: "Anonymous Advice Platform",
            description: "Social platform for sharing and receiving anonymous advice with community moderation.",
            longDescription: "An innovative social platform that allows users to seek and provide anonymous advice on various topics. Features include real-time messaging, community voting, content moderation, and personalized recommendation algorithms. Built with modern web technologies for optimal performance and user experience.",
            techStack: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TailwindCSS"],
            liveDemo: "https://example.com",
            github: "https://github.com/example",
            image: "",
            gradient: "bg-gradient-to-br from-[#ABDFE8] to-[#AADCD4]",
        },
        {
            id: 3,
            title: "Restaurant Website",
            description: "Modern restaurant website with online ordering, reservation system, and menu management.",
            longDescription: "A sophisticated restaurant website featuring an intuitive online ordering system, table reservation management, dynamic menu display, and customer review system. Includes admin dashboard for inventory management, order tracking, and analytics with seamless payment integration.",
            techStack: ["React", "Firebase", "Stripe", "Framer Motion", "Responsive Design"],
            liveDemo: "https://example.com",
            github: "https://github.com/example",
            image: "",
            gradient: "bg-gradient-to-br from-[#84D9E4] to-[#9ECAD6]",
        },
        {
            id: 4,
            title: "E-commerce Store",
            description: "Full-featured e-commerce platform with shopping cart, payment processing, and admin panel.",
            longDescription: "A comprehensive e-commerce solution with advanced product catalog, shopping cart functionality, secure payment processing, order management, and customer support system. Features include inventory tracking, sales analytics, customer management, and mobile-responsive design.",
            techStack: ["Next.js", "Shopify API", "Redux", "Styled Components", "PayPal"],
            liveDemo: "https://example.com",
            github: "https://github.com/example",
            image: "",
            gradient: "bg-gradient-to-br from-[#AADCD4] to-[#84D9E4]",
        },
        {
            id: 5,
            title: "PrintBlink",
            description: "Modern printer showcase website with interactive product displays and specifications.",
            longDescription: "A sleek printer showcase website featuring interactive 3D product displays, detailed specifications comparison, customer reviews, and seamless shopping experience. Built with performance optimization and accessibility in mind, showcasing the latest printer technologies and innovations.",
            techStack: ["Three.js", "React", "GSAP", "Sass", "Webpack"],
            liveDemo: "https://example.com",
            github: "https://github.com/example",
            image: "",
            gradient: "bg-gradient-to-br from-[#9ECAD6] to-[#AADCD4]",
        },
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                        Featured <span className="text-[#9ECAD6]">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#9ECAD6] to-[#84D9E4] mx-auto rounded-full mb-6" />
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Showcasing innovative solutions and creative implementations across various domains
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            delay={0.2 + index * 0.1}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </div>

                {/* Project Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </section>
    );
}
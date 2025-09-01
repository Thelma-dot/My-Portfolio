import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.',
            image: '/api/placeholder/400/300',
            category: 'fullstack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            liveUrl: 'https://ecommerce-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/ecommerce',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/api/placeholder/400/300',
            category: 'frontend',
            technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
            liveUrl: 'https://taskmanager-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/taskmanager',
            featured: true
        },
        {
            id: 3,
            title: 'REST API Service',
            description: 'A scalable REST API service built with Node.js, Express, and PostgreSQL. Includes authentication, rate limiting, and comprehensive documentation.',
            image: '/api/placeholder/400/300',
            category: 'backend',
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
            liveUrl: 'https://api-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/rest-api',
            featured: false
        },
        {
            id: 4,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark mode, and optimized performance.',
            image: '/api/placeholder/400/300',
            category: 'frontend',
            technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS3'],
            liveUrl: 'https://portfolio-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/portfolio',
            featured: false
        },
        {
            id: 5,
            title: 'Mobile Banking App',
            description: 'A cross-platform mobile banking application built with React Native. Secure authentication, transaction history, and real-time notifications.',
            image: '/api/placeholder/400/300',
            category: 'mobile',
            technologies: ['React Native', 'Redux', 'Firebase', 'Biometrics'],
            liveUrl: 'https://mobilebanking-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/mobilebanking',
            featured: true
        },
        {
            id: 6,
            title: 'Data Analytics Dashboard',
            description: 'An interactive data visualization dashboard built with React and D3.js. Real-time data updates, customizable charts, and export functionality.',
            image: '/api/placeholder/400/300',
            category: 'fullstack',
            technologies: ['React', 'D3.js', 'Node.js', 'Chart.js', 'Socket.io'],
            liveUrl: 'https://dashboard-demo.com',
            githubUrl: 'https://github.com/thelmabuabeng/dashboard',
            featured: false
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'mobile', label: 'Mobile' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'fullstack': return <FaCode />;
            case 'frontend': return <FaGlobe />;
            case 'backend': return <FaCode />;
            case 'mobile': return <FaMobile />;
            default: return <FaCode />;
        }
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my recent work and technical expertise across different domains
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={`project-card ${project.featured ? 'featured' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="project-image">
                                    <div className="image-placeholder">
                                        <div className="placeholder-content">
                                            <FaCode className="placeholder-icon" />
                                            <span>{project.title}</span>
                                        </div>
                                    </div>
                                    {project.featured && (
                                        <div className="featured-badge">
                                            <span>Featured</span>
                                        </div>
                                    )}
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaExternalLinkAlt />
                                                <span>Live Demo</span>
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaGithub />
                                                <span>Source Code</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-header">
                                        <div className="project-category">
                                            {getCategoryIcon(project.category)}
                                            <span>{project.category}</span>
                                        </div>
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h3>Interested in working together?</h3>
                    <p>Let's discuss your project and bring your ideas to life</p>
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a Project
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

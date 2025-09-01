import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket } from 'react-icons/fa';
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
            title: 'Coming Soon',
            description: 'Exciting projects are in development. Stay tuned for amazing full-stack applications, innovative web solutions, and cutting-edge mobile apps.',
            image: '/api/placeholder/400/300',
            category: 'coming-soon',
            technologies: ['React', 'Node.js', 'TypeScript', 'Modern Tech Stack'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Coming Soon',
            description: 'More innovative projects are on the horizon. I\'m working on creating exceptional digital experiences that solve real-world problems.',
            image: '/api/placeholder/400/300',
            category: 'coming-soon',
            technologies: ['Full-Stack', 'Mobile', 'Cloud', 'AI/ML'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Coming Soon',
            description: 'Building the future, one project at a time. These applications will showcase the latest technologies and best practices in software development.',
            image: '/api/placeholder/400/300',
            category: 'coming-soon',
            technologies: ['Next.js', 'Python', 'AWS', 'Docker'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'coming-soon', label: 'Coming Soon' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'coming-soon': return <FaRocket />;
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
                        Exciting projects are in development - stay tuned for amazing digital solutions
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
                                data-category={project.category}
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
                                            <motion.div
                                                className="project-link coming-soon"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <FaRocket />
                                                <span>Coming Soon</span>
                                            </motion.div>
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

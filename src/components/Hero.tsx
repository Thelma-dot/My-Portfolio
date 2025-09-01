import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';
import './Hero.css';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const words = ['Full-Stack Engineer', 'Problem Solver', 'Innovation Driver', 'Code Craftsman'];

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="hero-shapes">
                    <motion.div
                        className="shape shape-1"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="shape shape-2"
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="shape shape-3"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 3, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Hero Logo */}
                        <motion.div
                            className="hero-logo"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <Logo size="large" />
                        </motion.div>

                        <motion.p
                            className="hero-greeting"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Thelma Buabeng
                        </motion.h1>

                        <motion.div
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <span className="static-text">I'm a </span>
                            <span className="dynamic-text">
                                {words.map((word, index) => (
                                    <motion.span
                                        key={word}
                                        className="word"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1 + index * 0.2,
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.div>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            Passionate about creating innovative digital solutions that drive business growth and enhance user experiences.
                            Specializing in modern web technologies and scalable architectures.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <motion.button
                                className="btn btn-primary hero-cta"
                                onClick={scrollToAbout}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore My Work
                                <FaArrowDown className="btn-icon" />
                            </motion.button>

                            <motion.a
                                href="#contact"
                                className="btn btn-secondary hero-cta-secondary"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="hero-avatar">
                            <div className="avatar-placeholder">
                                <span className="avatar-initials">TB</span>
                            </div>
                            <div className="avatar-ring"></div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <motion.a
                        href="https://github.com/Thelma-dot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/thelma-buabeng-2144aa251"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </motion.a>

                    <motion.a
                        href="mailto:thelmabuabeng4@gmail.com"
                        className="social-link"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaEnvelope />
                        <span>Email</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    <motion.button
                        onClick={scrollToAbout}
                        className="scroll-btn"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FaArrowDown />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

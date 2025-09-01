import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#hero" onClick={() => scrollToSection('hero')}>
                            <span className="logo-text">TB</span>
                            <span className="logo-full">Thelma Buabeng</span>
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <motion.button
                                        className="nav-link"
                                        onClick={() => scrollToSection(item.id)}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="social-links">
                        <motion.a
                            href="https://github.com/thelmabuabeng"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/thelmabuabeng"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/thelmabuabeng"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className="nav-mobile"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="nav-mobile-list">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            className="nav-mobile-link"
                                            onClick={() => scrollToSection(item.id)}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mobile-social-links">
                                <a href="https://github.com/thelmabuabeng" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/thelmabuabeng" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://twitter.com/thelmabuabeng" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const features = [
        {
            icon: <FaCode />,
            title: 'Full-Stack Development',
            description: 'Expert in both frontend and backend technologies, creating seamless user experiences with robust server-side logic.'
        },
        {
            icon: <FaRocket />,
            title: 'Scalable Solutions',
            description: 'Building applications that grow with your business, using modern architectures and best practices.'
        },
        {
            icon: <FaUsers />,
            title: 'User-Centric Design',
            description: 'Focusing on intuitive interfaces and smooth user journeys that keep your customers engaged and satisfied.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation First',
            description: 'Always exploring cutting-edge technologies and creative solutions to solve complex business challenges.'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Passionate about technology and its power to transform businesses
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="about-intro">
                            <h3>Hello! I'm Thelma Buabeng</h3>
                            <p>
                                I'm a passionate Full-Stack Engineer with a deep love for creating innovative digital solutions.
                                With over 2 years of experience in web development, I specialize in building scalable, user-friendly
                                applications that drive business growth and enhance user experiences.
                            </p>
                            <p>
                                My journey in technology began with a curiosity about how things work on the web, which evolved
                                into a passion for building robust, efficient, and beautiful applications. I believe that great
                                software is not just about functionality—it's about creating experiences that users love and
                                solutions that businesses can rely on.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">2+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">6+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                        </div>

                        <div className="about-cta">
                            <motion.a
                                href="#contact"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Work Together
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="about-image">
                            <div className="image-placeholder">
                                <div className="placeholder-content">
                                    <FaCode className="placeholder-icon" />
                                    <span>Full-Stack Engineer</span>
                                </div>
                            </div>
                            <div className="image-decoration">
                                <div className="decoration-dot"></div>
                                <div className="decoration-line"></div>
                                <div className="decoration-dot"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="about-features"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h4 className="feature-title">{feature.title}</h4>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-values"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h3>My Core Values</h3>
                    <div className="values-list">
                        <div className="value-item">
                            <span className="value-bullet"></span>
                            <span>Quality over quantity - Every line of code matters</span>
                        </div>
                        <div className="value-item">
                            <span className="value-bullet"></span>
                            <span>Continuous learning and staying updated with latest technologies</span>
                        </div>
                        <div className="value-item">
                            <span className="value-bullet"></span>
                            <span>Transparent communication and collaboration</span>
                        </div>
                        <div className="value-item">
                            <span className="value-bullet"></span>
                            <span>Delivering solutions that exceed expectations</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('your_public_key'); // Replace with your actual public key
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                'service_your_service_id', // Replace with your EmailJS service ID
                'template_your_template_id', // Replace with your EmailJS template ID
                e.currentTarget as HTMLFormElement,
                'your_public_key' // Replace with your EmailJS public key
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Reset status after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Email error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'thelmabuabeng4@gmail.com',
            link: 'mailto:thelmabuabeng4@gmail.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+233 0595634868',
            link: 'tel:+2330595634868'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Remote / Worldwide',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            name: 'GitHub',
            url: 'https://github.com/Thelma-dot',
            color: '#333'
        },
        {
            icon: <FaLinkedin />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/thelma-buabeng-2144aa251',
            color: '#0077b5'
        },
        {
            icon: <FaTwitter />,
            name: 'Twitter',
            url: 'https://x.com/BuabengThelma',
            color: '#1da1f2'
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to start your next project? Let's discuss how I can help bring your ideas to life
                    </p>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always excited to hear about new projects and opportunities.
                            Whether you have a specific project in mind or just want to chat about
                            technology, feel free to reach out!
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="contact-icon">
                                        {info.icon}
                                    </div>
                                    <div className="contact-text">
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} target={info.link.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span>{info.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        style={{ '--social-color': social.color } as React.CSSProperties}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                        <span>{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project or inquiry..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    className="form-message success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    className="form-message error"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Oops! Something went wrong. Please try again or contact me directly via email.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="contact-cta"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h3>Ready to Start Your Project?</h3>
                    <p>
                        Let's discuss your requirements and create something amazing together.
                        I'm committed to delivering high-quality solutions that exceed your expectations.
                    </p>
                    <div className="cta-buttons">
                        <motion.a
                            href="mailto:thelmabuabeng4@gmail.com"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Direct Email
                        </motion.a>
                        <motion.a
                            href="#hero"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Back to Top
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

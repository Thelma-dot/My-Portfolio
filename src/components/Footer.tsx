import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#hero', external: false },
        { name: 'About', href: '#about', external: false },
        { name: 'Skills', href: '#skills', external: false },
        { name: 'Projects', href: '#projects', external: false },
        { name: 'Experience', href: '#experience', external: false },
        { name: 'Contact', href: '#contact', external: false }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#skills', external: false },
        { name: 'Mobile Apps', href: '#skills', external: false },
        { name: 'API Development', href: '#skills', external: false },
        { name: 'Consulting', href: '#contact', external: false },
        { name: 'UI/UX Design', href: '#skills', external: false }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'GitHub', href: 'https://github.com/thelmabuabeng', external: true },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/thelmabuabeng', external: true },
        { name: 'Blog', href: '#', external: false },
        { name: 'Resume', href: '#', external: false }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/thelmabuabeng',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/thelmabuabeng',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/thelmabuabeng',
      color: '#1da1f2'
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:thelma@example.com',
      color: '#ea4335'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <span className="logo-text">TB</span>
              <span className="logo-full">Thelma Buabeng</span>
            </div>
            <p className="brand-description">
              Passionate Full-Stack Engineer creating innovative digital solutions
              that drive business growth and enhance user experiences.
            </p>
            <div className="brand-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((section, sectionIndex) => (
              <div key={sectionIndex} className="footer-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href.replace('#', ''))}
                          className="footer-link"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Thelma Buabeng. All rights reserved.
                Made with <FaHeart className="heart-icon" /> and lots of ☕
              </p>
            </div>
            <div className="footer-cta">
              <motion.a
                href="#contact"
                className="btn btn-primary btn-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

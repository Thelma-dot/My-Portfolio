import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const experiences = [
        {
            id: 1,
            type: 'work',
            title: 'Senior Full-Stack Engineer',
            company: 'TechCorp Solutions',
            period: '2022 - Present',
            description: 'Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
            achievements: [
                'Reduced application load time by 40% through optimization',
                'Led a team of 5 developers on a major project',
                'Implemented CI/CD pipeline reducing deployment time by 60%'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
        },
        {
            id: 2,
            type: 'work',
            title: 'Full-Stack Developer',
            company: 'Digital Innovations Inc.',
            period: '2020 - 2022',
            description: 'Developed and maintained multiple client projects, specializing in e-commerce solutions and custom web applications.',
            achievements: [
                'Delivered 15+ client projects on time and budget',
                'Increased client satisfaction score to 95%',
                'Developed reusable component library'
            ],
            technologies: ['React', 'Express.js', 'PostgreSQL', 'Stripe', 'Redis']
        },
        {
            id: 3,
            type: 'work',
            title: 'Frontend Developer',
            company: 'WebCraft Studios',
            period: '2018 - 2020',
            description: 'Focused on creating responsive and user-friendly interfaces for various web applications and mobile apps.',
            achievements: [
                'Built 20+ responsive websites',
                'Improved user engagement by 35%',
                'Collaborated with design team on UX improvements'
            ],
            technologies: ['React', 'Vue.js', 'CSS3', 'JavaScript', 'Responsive Design']
        }
    ];

    const education = [
        {
            id: 1,
            type: 'education',
            title: 'Bachelor of Computer Science',
            company: 'University of Technology',
            period: '2014 - 2018',
            description: 'Graduated with honors, specialized in software engineering and web development.',
            achievements: [
                'First Class Honours',
                'Dean\'s List for 3 consecutive years',
                'Final year project: E-commerce platform'
            ],
            technologies: ['Java', 'Python', 'Web Development', 'Database Systems']
        }
    ];

    const certifications = [
        {
            id: 1,
            type: 'certification',
            title: 'AWS Certified Developer',
            company: 'Amazon Web Services',
            period: '2023',
            description: 'Certified in developing and maintaining applications on the AWS platform.',
            achievements: ['Cloud architecture design', 'Serverless development', 'Security best practices'],
            technologies: ['AWS', 'Lambda', 'DynamoDB', 'API Gateway']
        },
        {
            id: 2,
            type: 'certification',
            title: 'React Developer Certification',
            company: 'Meta',
            period: '2022',
            description: 'Advanced React development certification covering hooks, context, and performance optimization.',
            achievements: ['Advanced React patterns', 'Performance optimization', 'State management'],
            technologies: ['React', 'Hooks', 'Context API', 'Performance']
        }
    ];

    const allItems = [...experiences, ...education, ...certifications].sort((a, b) => {
        const getYear = (period: string) => parseInt(period.split(' ')[period.split(' ').length - 1]);
        return getYear(b.period) - getYear(a.period);
    });

    const getIcon = (type: string) => {
        switch (type) {
            case 'work': return <FaBriefcase />;
            case 'education': return <FaGraduationCap />;
            case 'certification': return <FaCertificate />;
            default: return <FaBriefcase />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'work': return 'var(--primary-color)';
            case 'education': return 'var(--secondary-color)';
            case 'certification': return 'var(--accent-color)';
            default: return 'var(--primary-color)';
        }
    };

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        My journey in technology and the milestones that shaped my career
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="experience-timeline">
                    {allItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`timeline-item ${item.type}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div
                                    className="marker-icon"
                                    style={{ backgroundColor: getTypeColor(item.type) }}
                                >
                                    {getIcon(item.type)}
                                </div>
                                <div className="timeline-line"></div>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <div className="timeline-company">{item.company}</div>
                                    <div className="timeline-period">{item.period}</div>
                                </div>

                                <p className="timeline-description">{item.description}</p>

                                <div className="timeline-achievements">
                                    <h4>Key Achievements:</h4>
                                    <ul>
                                        {item.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex}>
                                                <FaTrophy className="achievement-icon" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="timeline-technologies">
                                    {item.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Summary */}
                <motion.div
                    className="experience-summary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="summary-content">
                        <h3>What I Bring to Your Project</h3>
                        <div className="summary-grid">
                            <div className="summary-item">
                                <div className="summary-icon">
                                    <FaBriefcase />
                                </div>
                                <h4>5+ Years Experience</h4>
                                <p>Proven track record in delivering successful projects across various industries</p>
                            </div>
                            <div className="summary-item">
                                <div className="summary-icon">
                                    <FaTrophy />
                                </div>
                                <h4>50+ Projects Completed</h4>
                                <p>Diverse portfolio showcasing expertise in different technologies and domains</p>
                            </div>
                            <div className="summary-item">
                                <div className="summary-icon">
                                    <FaCertificate />
                                </div>
                                <h4>Continuous Learning</h4>
                                <p>Always staying updated with latest technologies and industry best practices</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaReact, FaNodeJs, FaDatabase, FaCloud,
    FaMobile, FaCode, FaTools, FaServer
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiDocker, SiKubernetes } from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <FaReact />,
            skills: [
                { name: 'React.js', level: 95, icon: <FaReact /> },
                { name: 'TypeScript', level: 90, icon: <SiTypescript /> },
                { name: 'JavaScript', level: 95, icon: <SiJavascript /> },
                { name: 'HTML/CSS', level: 90, icon: <FaCode /> },
                { name: 'Next.js', level: 85, icon: <FaReact /> },
                { name: 'Tailwind CSS', level: 88, icon: <FaCode /> }
            ]
        },
        {
            title: 'Backend Development',
            icon: <FaServer />,
            skills: [
                { name: 'Node.js', level: 92, icon: <FaNodeJs /> },
                { name: 'Express.js', level: 90, icon: <FaNodeJs /> },
                { name: 'Python', level: 85, icon: <SiPython /> },
                { name: 'REST APIs', level: 93, icon: <FaServer /> },
                { name: 'GraphQL', level: 80, icon: <FaServer /> },
                { name: 'Microservices', level: 85, icon: <FaServer /> }
            ]
        },
        {
            title: 'Database & Cloud',
            icon: <FaDatabase />,
            skills: [
                { name: 'MongoDB', level: 88, icon: <SiMongodb /> },
                { name: 'PostgreSQL', level: 85, icon: <SiPostgresql /> },
                { name: 'Redis', level: 80, icon: <FaDatabase /> },
                { name: 'AWS', level: 82, icon: <FaCloud /> },
                { name: 'Docker', level: 85, icon: <SiDocker /> },
                { name: 'Kubernetes', level: 75, icon: <SiKubernetes /> }
            ]
        },
        {
            title: 'Tools & Others',
            icon: <FaTools />,
            skills: [
                { name: 'Git/GitHub', level: 95, icon: <FaTools /> },
                { name: 'CI/CD', level: 85, icon: <FaTools /> },
                { name: 'Testing', level: 80, icon: <FaTools /> },
                { name: 'Agile/Scrum', level: 90, icon: <FaTools /> },
                { name: 'Mobile Development', level: 75, icon: <FaMobile /> },
                { name: 'DevOps', level: 80, icon: <FaTools /> }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="skills-content">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-category"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                        >
                            <div className="category-header">
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-icon">
                                                {skill.icon}
                                            </div>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>

                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="skills-summary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="summary-content">
                        <h3>Always Learning, Always Growing</h3>
                        <p>
                            Technology evolves rapidly, and I'm committed to staying at the forefront.
                            I regularly explore new frameworks, tools, and methodologies to ensure I'm
                            delivering the most effective solutions for my clients.
                        </p>
                        <div className="learning-focus">
                            <div className="focus-item">
                                <span className="focus-dot"></span>
                                <span>Currently exploring AI/ML integration</span>
                            </div>
                            <div className="focus-item">
                                <span className="focus-dot"></span>
                                <span>Advanced cloud architecture patterns</span>
                            </div>
                            <div className="focus-item">
                                <span className="focus-dot"></span>
                                <span>Performance optimization techniques</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

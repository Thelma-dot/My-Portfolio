import React from 'react';
import './Logo.css';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
    return (
        <div className={`logo logo-${size} ${className}`}>
            <svg 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
            >
                {/* Background Circle */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="url(#gradient)" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="2"
                />
                
                {/* Code Brackets */}
                <path 
                    d="M30 35 L25 50 L30 65 M70 35 L75 50 L70 65" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="logo-brackets"
                />
                
                {/* Code Elements */}
                <rect x="35" y="40" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                <rect x="42" y="40" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                <rect x="49" y="40" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                
                <rect x="35" y="50" width="6" height="4" rx="1" fill="currentColor" className="logo-dot" />
                <rect x="44" y="50" width="6" height="4" rx="1" fill="currentColor" className="logo-dot" />
                
                <rect x="35" y="60" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                <rect x="42" y="60" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                <rect x="49" y="60" width="4" height="4" rx="1" fill="currentColor" className="logo-dot" />
                
                {/* Gradients */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary-color)" />
                        <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary-color)" />
                        <stop offset="100%" stopColor="var(--secondary-color)" />
                    </linearGradient>
                </defs>
            </svg>
            
            {/* Text Logo */}
            <div className="logo-text">
                <span className="logo-initial">T</span>
                <span className="logo-name">B</span>
            </div>
        </div>
    );
};

export default Logo;

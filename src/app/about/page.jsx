'use client';

import React from 'react';
import Navbar from "../../components/Navbar.jsx";
import '../../../public/styles/page.css';
import {FaFacebook, FaGithub, FaGlobe, FaLinkedin, FaTwitter} from 'react-icons/fa';

const About = () => {
    const teamMembers = [
        {
            name: 'François Pelletier',
            role: 'Volunteer Data Scientist and Software Developer',
            image: '/images/Francois.png',
            bio: 'Passionate about leveraging technology to make a positive impact in education and language accessibility.',
            social: {
                linkedin: 'https://www.linkedin.com/in/francoispelletier-jevalideca/',
                github: 'https://github.com/yourgithub' // Add actual GitHub URL
            }
        },
        // Add more team members here in the same format
    ];

    return (
        <div className="about-page">
            <Navbar/>

            <div className="about-header">
                <div className="image-container">
                    <div className="header-about-title">Making Education Accessible</div>
                    <img src='/images/child.png' className="child" alt="Child learning in classroom"/>
                </div>
            </div>

            <div className="about-container">
                <h1 className="about-title">Our Mission</h1>
                <span className="rectangle"/>
                <p className="section-subtitle">
                    We are dedicated to breaking down language barriers in education,
                    ensuring that quality learning materials are accessible to students
                    and educators worldwide through innovative translation solutions.
                </p>

                <h2 className="about-title">Meet Our Team</h2>
                <span className="rectangle"/>
                <p className="section-subtitle">
                    Our diverse team of volunteers brings together expertise in technology,
                    education, and language to create impactful solutions for global learning.
                </p>

                <div className="team-section">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={`${member.name} profile`}/>
                            <h3 className="name">{member.name}</h3>
                            <p className="job-title">{member.role}</p>
                            <p>{member.bio}</p>
                            <div className="social-links">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin/>
                                    </a>
                                )}
                                {member.social.github && (
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub/>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <div className="social-media-icons">
                    <a href="https://www.grey-box.ca/" target="_blank" rel="noopener noreferrer">
                        <FaGlobe/>
                    </a>
                    <a href="https://twitter.com/greyboxproject" target="_blank" rel="noopener noreferrer">
                        <FaTwitter/>
                    </a>
                    <a href="https://www.facebook.com/greyboxORG/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook/>
                    </a>
                    <a href="https://www.linkedin.com/company/greyboxproject/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default About;
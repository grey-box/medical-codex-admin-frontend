'use client';

import React from 'react';
import Navbar from "../../components/Navbar.jsx"
import '../../../public/styles/about.css';
import { FaTwitter, FaFacebook, FaGlobe, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
        <Navbar />
      <div className="about-header">
        <div className="image-container">
        <div className="header-about-title">About Us</div>
        <img src='images/child.png' className="child" alt="child in classroom" />
        </div>
      </div>

      <div className='about-container'>
        <h1 className='about-title'>Meet <br/> Our Team</h1>
        <span className='rectangle'/>
        <div className='team-section'>


          <div className='team-member'>
            <img src='/images/Francois.png' alt='team-member4' />
            <h3 className="name">François Pelletier</h3>
            <p className="job-title">Volunteer Data Scientist and Software Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <a href='https://www.linkedin.com/in/francoispelletier-jevalideca/' target="_blank"><FaLinkedin /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer">
        <div className="icons">
          <div className="social-media-icons">
            <a href="https://www.grey-box.ca/" target="_blank"><FaGlobe /></a>
            <a href="https://twitter.com/greyboxproject" target="_blank"><FaTwitter /></a>
            <a href="https://www.facebook.com/greyboxORG/" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/greyboxproject/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;

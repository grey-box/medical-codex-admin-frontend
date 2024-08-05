import React from 'react';
import './SocialMediaIcons.css';
import { FaTwitter, FaFacebook, FaGlobe, FaLinkedin } from 'react-icons/fa';

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <a href="https://www.grey-box.ca/" target="_blank"><FaGlobe /></a>
      <a href="https://twitter.com/greyboxproject" target="_blank"><FaTwitter /></a>
      <a href="https://www.facebook.com/greyboxORG/" target="_blank"><FaFacebook /></a>
      <a href="https://www.linkedin.com/company/greyboxproject/" target="_blank"><FaLinkedin /></a>
    </div>
  );
}


export default SocialMediaIcons;
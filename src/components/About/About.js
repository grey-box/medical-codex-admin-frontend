import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FaTwitter, FaFacebook, FaGlobe, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="image-container">
        <div className="header-about-title">About Us</div>
        <img src={`${process.env.PUBLIC_URL}/child.png`} className="child" alt="child in classroom" />
        </div>
      </div>

      <div className='about-container'>
        <h1 className='about-title'>Meet <br/> Our Team</h1>
        <span className='rectangle'/>
        <div className='team-section'>

          <div className='team-member'>
            <img src='../Abhishek.jpg' alt='team-member1' />
            <h3 className="name">Abhishek Nair</h3>
            <p className="job-title">Backend Developer, API Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/abhisheknair34005/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Sahil.png' alt='team-member2' />
            <h3 className="name">Sahil Jambhulkar</h3>
            <p className="job-title">Backend Developer, Test Engineer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/sahil-jambhulkar/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Shyam.jpg' alt='team-member3' />
            <h3 className="name">Shyam Prasad</h3>
            <p className="job-title">Web Designer, Frontend Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../KonarkBhad.jpg' alt='team-member4' />
            <h3 className="name">Konark Bhad</h3>
            <p className="job-title">Frontend Developer, Database Administrator</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/konark-bhad/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          
          <div className='team-member'>
            <img src='../Bianca.png' alt='team-member4' />
            <h3 className="name">Bianca Scoropan</h3>
            <p className="job-title">Volunteer Frontend Developer, Web Designer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/bianca-scoropan-576233220/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Ravneet.png' alt='team-member4' />
            <h3 className="name">Ravneet Singh</h3>
            <p className="job-title">Volunteer Backend Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Dominique.png' alt='team-member4' />
            <h3 className="name">Dominique Dupont-Jillings</h3>
            <p className="job-title">Intern Backend Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/dominique-dupont-jillings-71303789/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Safwan.png' alt='team-member4' />
            <h3 className="name">Safwan Haque</h3>
            <p className="job-title">Intern Backend Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/safwanhaque/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Arielle.png' alt='team-member4' />
            <h3 className="name">Arielle Kozin</h3>
            <p className="job-title">Scrum Master Project Management</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/rel-kozfam-362205113/' target="_blank"><FaLinkedin /></Link>
            </div>
          </div>

          <div className='team-member'>
            <img src='../Francois.png' alt='team-member4' />
            <h3 className="name">François Pelletier</h3>
            <p className="job-title">Volunteer Data Scientist and Software Developer</p>
            <p>
            </p>
            <div className='social-links'>
              <Link to='https://www.linkedin.com/in/francoispelletier-jevalideca/' target="_blank"><FaLinkedin /></Link>
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


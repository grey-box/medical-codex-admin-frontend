import styles from './about.module.css';
import React from 'react'

const PersonTile = ({ image, name, role }) => {
  return (
    <div className={styles.tile}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

const About = () => {
  const people = [
    { image: 'Sean.png', name: 'Sean Clifford', role: 'Intern Developer'},
    { image: 'Alem.png', name: 'Alem Beskovic', role: 'Intern Developer'},
    { image: 'Kobby.png', name: 'Kobby Asante-Ansong', role: 'Intern Developer'},
    { image: 'Farhana.png', name: 'Farhana Yasmin', role: 'Intern Developer'},
    { image: 'Abhishek.jpg', name: 'Abhishek Nair', role: 'Backend Developer, API Developer'},
    { image: 'Sahil.JPG', name: 'Sahil Jambhulkar', role: 'Backend Developer, Test Engineer'},
    { image: 'Shyam.jpg', name: 'Shyam Prasad', role: 'Web Designer, Frontend Developer'},
    { image: 'KonarkBhad.jpg', name: 'Konark Bhad', role: 'Frontend Developer, Database Administrator'},
    { image: 'Bianca.png', name: 'Bianca Scoropan', role: 'Volunteer Frontend Developer, Web Designer'},
    { image: 'Ravneet.png', name: 'Ravneet Singh', role: 'Volunteer Backend Developer'},
    { image: 'Dominique.png', name: 'Dominique Dupont-Jillings', role: 'Intern Backend Developer'},
    { image: 'Safwan.png', name: 'Safwan Haque', role: 'Intern Backend Developer'},
    { image: 'Arielle.png', name: 'Arielle Kozin', role: 'Scrum Master Project Management'},
    { image: 'Francois.png', name: 'François Pelletier', role: 'Volunteer Data Scientist and Software Developer'},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {people.map((person, index) => (
          <PersonTile key={index} image={person.image} name={person.name} role={person.role} />
        ))}
      </div>
    </div>
  )
}

export default About

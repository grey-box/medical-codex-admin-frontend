import React, { FC } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  img: string;
  link: string;
}

const About: FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Abhishek Nair",
      title: "Backend Developer, API Developer",
      img: "/images/people/Abhishek.jpg",
      link: "https://www.linkedin.com/in/abhisheknair34005/",
    },
    {
      name: "Sahil Jambhulkar",
      title: "Backend Developer, Test Engineer",
      img: "/images/people/Sahil.png",
      link: "https://www.linkedin.com/in/sahil-jambhulkar/",
    },
    {
      name: "Shyam Prasad",
      title: "Web Designer, Frontend Developer",
      img: "/images/people/Shyam.jpg",
      link: "https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/",
    },
    {
      name: "Konark Bhad",
      title: "Frontend Developer, Database Administrator",
      img: "/images/people/KonarkBhad.jpg",
      link: "https://www.linkedin.com/in/konark-bhad/",
    },
    {
      name: "Bianca Scoropan",
      title: "Volunteer Frontend Developer, Web Designer",
      img: "/images/people/Bianca.png",
      link: "https://www.linkedin.com/in/bianca-scoropan-576233220/",
    },
    {
      name: "Ravneet Singh",
      title: "Volunteer Backend Developer",
      img: "/images/people/Ravneet.png",
      link: "",
    },
    {
      name: "Dominique Dupont-Jillings",
      title: "Intern Backend Developer",
      img: "/images/people/Dominique.png",
      link: "https://www.linkedin.com/in/dominique-dupont-jillings-71303789/",
    },
    {
      name: "Safwan Haque",
      title: "Intern Backend Developer",
      img: "/images/people/Safwan.png",
      link: "https://www.linkedin.com/in/safwanhaque/",
    },
    {
      name: "Arielle Kozin",
      title: "Scrum Master Project Management",
      img: "/images/people/Arielle.png",
      link: "https://www.linkedin.com/in/rel-kozfam-362205113/",
    },
    {
      name: "François Pelletier",
      title: "Volunteer Data Scientist and Software Developer",
      img: "/images/people/Francois.png",
      link: "https://www.linkedin.com/in/francoispelletier-jevalideca/",
    },
  ];

  return (
    <div className="bg-[#808080]">
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto">
          <div className="absolute text-4xl font-extrabold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            About Us
          </div>
          <img
            src="/images/assets/child.png"
            className="block w-full h-auto"
            alt="child in classroom"
          />
        </div>
      </div>

      <div className="flex flex-col mt-12 bg-[#808080]">
        <div className="text-4xl font-extrabold mb-12 text-left pl-10 text-[#ffffff]">
          Meet <br /> Our Team
        </div>

        <div className="flex flex-wrap items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[376px] h-[384px] m-5 p-5 bg-white shadow-md text-center transition-transform duration-300 ease-in-out rounded-2xl hover:translate-y-[-5px]"
            >
              <img
                className="w-[349px] h-[195px] mb-5 object-cover"
                src={member.img}
                alt={`team-member${index + 1}`}
              />
              <h3 className="mb-2 text-xl font-extrabold">{member.name}</h3>
              <p className="mb-5 text-lg font-light">{member.title}</p>
              <div className="flex justify-center">
                {member.link ? (
                  <Link
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mx-2 text-2xl text-blue-500 transition-colors duration-300 ease-in-out" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

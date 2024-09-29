import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaGlobe, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#B6E7FF]">
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold text-center">
            About Us
          </div>
          <img
            src="/images/assets/child.png"
            className="w-full h-auto block"
            alt="child in classroom"
          />
        </div>
      </div>

      <div className="flex flex-col mt-12 bg-[#B6E7FF]">
        <div className="text-4xl font-extrabold mb-12 text-left pl-10 text-[#555555]">
          Meet <br /> Our Team
        </div>

        <div className="flex justify-center flex-wrap items-center">
          {[
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
          ].map((member, index) => (
            <div
              key={index}
              className="w-[376px] h-[384px] m-5 p-5 bg-white shadow-md text-center transition-transform duration-300 ease-in-out rounded-2xl hover:translate-y-[-5px]"
            >
              <img
                className="w-[349px] h-[195px] mb-5 object-cover"
                src={member.img}
                alt={`team-member${index + 1}`}
              />
              <h3 className="font-extrabold text-xl mb-2">{member.name}</h3>
              <p className="font-light text-lg mb-5">{member.title}</p>
              <div className="flex justify-center">
                {member.link ? (
                  <Link href={member.link} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-500 text-2xl mx-2 transition-colors duration-300 ease-in-out" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[#044677] p-5 text-center h-[60px] w-full">
        <div className="flex justify-center">
          <Link
            href="https://www.grey-box.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaGlobe />
          </Link>
          <Link
            href="https://twitter.com/greyboxproject"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.facebook.com/greyboxORG/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.linkedin.com/company/greyboxproject/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

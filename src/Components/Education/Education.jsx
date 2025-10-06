import React, { useEffect, useRef } from "react";
import "./Education.css";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import college from "../../Assets/college.jpg";

const educationData = [
  {
    degree: "B.Sc",
    field: "Computer Science",
    level: "UG",
    cgpa: 8.7,
    year: "2018 - 2021",
    university: "Bharathidasan University",
    location: "Tiruchirappalli, Tamil Nadu",
    mode: "Full-time",
    highlights:
      "During my Bachelor's in Computer Science, I built a strong foundation in programming languages like C, C++ and Java. I explored data structures, algorithms, and database management systems, and completed projects such as a Library Management System and a Personal Finance Tracker. This course laid the groundwork for my interest in full-stack web development and problem-solving.",
    icon: <FaSchool size={50} />,
    img: college,
  },
  {
    degree: "MCA",
    field: "Computer Applications",
    level: "PG",
    cgpa: 8.6,
    year: "2021 - 2023",
    university: "Bharathidasan University",
    location: "Tiruchirappalli, Tamil Nadu",
    mode: "Full-time",
    highlights:
      "My Master's in Computer Applications allowed me to specialize in modern web technologies, cloud computing, and software engineering principles. I worked on collaborative projects like an AI-based job recommendation platform and an e-commerce system. Participating in hackathons and seminars improved my teamwork, research, and leadership skills, preparing me for professional development roles.",
    icon: <FaGraduationCap size={50} />,
    img: college,
  },
];

const Education = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hide");
          } else {
            entry.target.classList.add("hide");
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="education-container">
      <div className="container">
        <h3 className="education-title">EDUCATIONAL BACKGROUND</h3>
        <div className="row g-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`col-md-6 education-animate ${
                index % 2 === 0 ? "left" : "right"
              } hide`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="education-card">
                <div className="education-header">
                  <img
                    src={edu.img}
                    alt={edu.degree}
                    className="education-img"
                  />
                  <div>
                    <h3>{edu.degree}</h3>
                    <p className="field">({edu.field})</p>
                    <h5 className="university">{edu.university}</h5>
                  </div>
                </div>

                <p className="highlights">{edu.highlights}</p>

                <div className="education-details d-flex ">
                  <p className="education-p">{edu.level}</p>
                  <p className="education-p">CGPA: {edu.cgpa}</p>
                  <p className="education-p">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

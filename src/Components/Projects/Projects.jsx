import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import boat from "../../Assets/boat.jpeg";

// import video from "../../Assets/Videos/hastinVideo.mp4";
import loan from "../../Assets/bank2.jpg";
import LA1 from "../../Assets-Videos/Lending/LA1.png";
import LA2 from "../../Assets-Videos/Lending/LA2.png";
import LA3 from "../../Assets-Videos/Lending/LA3.png";
import LA4 from "../../Assets-Videos/Lending/LA4.png";
import LA5 from "../../Assets-Videos/Lending/LA5.png";
import LA6 from "../../Assets-Videos/Lending/LA6.png";
import LA7 from "../../Assets-Videos/Lending/LA7.png";
import LA8 from "../../Assets-Videos/Lending/LA8.png";
// import LA9 from "../../Assets-Videos/Lending/LA9.png";
import LA10 from "../../Assets-Videos/Lending/LA10.png";
// import LA11 from "../../Assets-Videos/Lending/LA11.png";
import LA12 from "../../Assets-Videos/Lending/LA12.png";

import HC from "../../Assets-Videos/Hastin/HC.png";
import HC1 from "../../Assets-Videos/Hastin/HC1.png";
import HC2 from "../../Assets-Videos/Hastin/HC2.png";
import HC3 from "../../Assets-Videos/Hastin/HC3.png";
// import HC4 from "../../Assets-Videos/Hastin/HC4.png";
import HC5 from "../../Assets-Videos/Hastin/HC5.png";
import HC6 from "../../Assets-Videos/Hastin/HC6.png";
import HC7 from "../../Assets-Videos/Hastin/HC7.png";
import HC8 from "../../Assets-Videos/Hastin/HC8.png";
import HC9 from "../../Assets-Videos/Hastin/HC9.png";
import HC10 from "../../Assets-Videos/Hastin/HC10.png";

const projectsOne = [
  {
    title: "HASTIN CONTAINERLINE",
    company: "Ebrain Technology",
    summary: "Developed a Hastin Containerline Application with:",
    techStack: "ReactJS, CSS, SCSS, MUI, Bootstrap, Formik,PrimeReact",
    description: [
      "Logistics-based web platform.",
      "Supports import/export container tracking.",
      "Secure login with user-based access.",
      "Real-time shipment updates.",
      "Clean UI with React and Bootstrap.",
    ],
  },
];
const projectsTwo = [
  {
    title: "LENDWISE",
    company: "Ebrain Technology",
    summary:
      "Built a responsive lending platform for loan applications and user management:",
    techStack: "ReactJS, CSS, SCSS, MUI, Bootstrap, Formik,PrimeReact",
    description: [
      "User-friendly loan application form with validation (Formik).",
      "Dashboard for tracking loan status and history.",
      "Role-based login for admin and users.",
      // "Seamless integration of form handling and UI design.",
      "Modern, clean UI with reusable React components.",
    ],
  },
];

const ImageCard = ({ thumbnail, screenshots, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <div className="col-lg-6 col-md-12   ">
      {/* Thumbnail preview */}
      <div className="project-card text-center">
        <img src={thumbnail} alt={title} className="preview-img" />
        <button
          className="btn  connect-btn my-2"
          onClick={() => setShowModal(true)}
        >
          <b>View Project</b>
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="slider">
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>

              <button className="btn-nav left" onClick={prevSlide}>
                ◀
              </button>
              <img
                src={screenshots[currentIndex]}
                alt={`${title} screenshot`}
                className="slider-img"
              />
              <button className="btn-nav right" onClick={nextSlide}>
                ▶
              </button>
            </div>

            <div className="dots">
              {screenshots.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
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
    <div className="container">
      <h3 className="text-center my-3" style={{ color: "#003366" }}>
        <b>MY WORKSTREAMS</b>
      </h3>
      <div className="row g-5">
        {projectsOne.map((project, index) => (
          <div
            className="col-md-12 col-lg-6 card-animate"
            key={index}
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="row">
              <div className="col-12 col-md-4 zero-one">
                <span className="animated-project-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="col-12 col-md-8 hastin-card">
                <h5 className="text-center m-3">
                  <b>{project.title}</b>
                </h5>
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="col-12 my-3 py-4 hastin-tech">
                <b>
                  <span>Tech:</span>
                </b>
                <div className="tech-tags d-flex mx-auto">
                  {project.techStack.split(",").map((tech, i) => (
                    <span className="tech" key={i}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="col-lg-6 card"> */}

        <ImageCard
          ref={(el) => (cardsRef.current[1] = el)}
          thumbnail={boat}
          screenshots={[HC, HC1, HC2, HC3, HC5, HC6, HC7, HC8, HC9, HC10]}
          title="HASTIN CONTAINERLINE"
        />

        {/* </div> */}

        {/* <div className="col-lg-6 card"> */}

        <ImageCard
          ref={(el) => (cardsRef.current[2] = el)}
          thumbnail={loan}
          screenshots={[LA1, LA2, LA3, LA4, LA5, LA6, LA7, LA8, LA10, LA12]}
          title="LENDWISE"
        />
        {/* </div> */}

        {projectsTwo.map((project, index) => (
          <div
            className="col-md-12 col-lg-6 card-animate"
            key={index + 3}
            ref={(el) => (cardsRef.current[index + 3] = el)}
          >
            <div className="row">
              <div className="col-12 col-md-4 zero-one">
                <span className="animated-project-text">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="col-12 col-md-8 hastin-card">
                <h5 className="text-center m-3">
                  <b>{project.title}</b>
                </h5>
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="col-12 my-3 py-4 hastin-tech">
                <b>
                  <span>Tech:</span>
                </b>
                <div className="tech-tags d-flex mx-auto">
                  {project.techStack.split(",").map((tech, i) => (
                    <span className="tech" key={i}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

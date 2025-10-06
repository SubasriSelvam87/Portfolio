import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { FaChrome, FaJava, FaNpm, FaPython, FaReact } from "react-icons/fa";
import {
  TbBrandAngular,
  TbBrandCss3,
  TbBrandFramerMotion,
  TbBrandHtml5,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiJavascriptLine, RiNpmjsFill } from "react-icons/ri";
import {
  SiChromecast,
  SiFormik,
  SiJsonwebtokens,
  SiMui,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReactrouter,
  SiSpringboot,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { PiFileSqlDuotone } from "react-icons/pi";
import { DiScrum } from "react-icons/di";
import { LiaJira } from "react-icons/lia";
import { VscSettingsGear, VscVscodeInsiders } from "react-icons/vsc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FrontEndSvg from "./FrontendSvg/FrontEndSvg";
import BackendSvg from "./BackendSvg/BackendSvg";
import PercentageCircle from "./CirclePercentage";
// import PercentageCircle from "./NewSkill";
// import FrontEndSvg from "./FrontendSvg/FrontEndSvg";
// import BackendSvg from "./BackendSvg/BackendSvg";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
// inside Skillpro.js
const [isSpecialScreen, setIsSpecialScreen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    const shouldShow = (width >= 768 && width <= 1200) || width <= 430;
    console.log("Width:", width, "Show PercentageCircle?", shouldShow);
    setIsSpecialScreen(shouldShow);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



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
    <section className="Skillpro">
      <div className=" p-4 ">
        <h3 className="text-center" style={{ color: "#003366" }}>
          <b>TECHNICAL KNOWLEDGE</b>
        </h3>

        <h5
          className="Skillpro-navbar-links container text-center mb-3"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          Client-Side Development
        </h5>
        <section className="Skill-section">
          <div className="container">
            <div className="row g-3">
              <div
                className="col-md-4"
                ref={(el) => (cardsRef.current[1] = el)}
              >
                <div className="card Skillpro-svg-box mx-auto text-center p-3 h-100">
{isSpecialScreen ? (
  <div className="mx-auto my-auto d-flex">
    <PercentageCircle percentage={85} />
  </div>
) : (
  <FrontEndSvg />
)}


                </div>
              </div>

              <div
                className="col-md-8 d-flex flex-column gap-3"
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>LANGUAGES</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <RiJavascriptLine size={20} /> Javascript (ES6+),
                    </span>
                    <span>
                      <TbBrandHtml5 size={20} /> HTML5,
                    </span>
                    <span>
                      <TbBrandCss3 size={20} /> CSS3,
                    </span>
                    <span>
                      <TbBrandTypescript size={20} /> Typescript (Basic)
                    </span>
                  </p>
                </div>

                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>FRAMEWORKS & LIBRARIES</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <FaReact size={20} /> React
                    </span>
                    <span>
                      <TbBrandAngular size={20} /> Angular (Basic)
                    </span>
                    <span>
                      <SiMui size={20} /> MaterialUI (MUI)
                    </span>
                    <span>
                      <SiFormik size={20} /> Formik
                    </span>
                    <span>
                      <TbBrandFramerMotion size={20} /> Framer Motion
                    </span>
                  </p>
                </div>
              </div>

              {/* UI/UX DESIGN */}
              <div
                className="col-md-8 mb-3"
                ref={(el) => (cardsRef.current[3] = el)}
              >
                <div className="card Skillpro-box text-center p-3">
                  <h5>
                    <b>UI/UX DESIGN</b>
                  </h5>
                  <p>
                    Designed and developed mobile-first interfaces with full
                    cross-browser compatibility
                  </p>
                  <p>Applied CSS Grid, Flexbox, and media queries</p>
                  <p>Component-driven development for reusable UI</p>
                  <p>Focused on usability & accessibility</p>
                </div>
              </div>

              <div
                className="col-md-4 mb-3"
                ref={(el) => (cardsRef.current[4] = el)}
              >
                <div className="card Skillpro-box text-center p-3 h-100">
                  <h5>
                    <b>ROUTING & STATE MANAGEMENT</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <SiReactrouter size={20} /> React Router,
                    </span>
                    <span>
                      <MdApi size={20} /> Context API
                    </span>
                    <span>
                      <SiReactrouter size={20} /> Angular Router
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h5
          className="Skillpro-navbar-links container text-center mb-3"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          Server-Side Development
        </h5>

        <section className="skill-section">
          <div className="container">
            <div className="row g-3 align-items-stretch">
              {/* Left column */}

              <div
                className="col-md-4"
                ref={(el) => (cardsRef.current[1] = el)}
              >
                <div className="card Skillpro-svg-box mx-auto text-center p-3 h-100">
                  {isSpecialScreen ? (
                    <div className="mx-auto my-auto d-flex">
                      <PercentageCircle percentage={60} />
                    </div>
                  ) : (

                    <BackendSvg />
                  )}
                </div>
              </div>
              {/* <div className="col-md-4" ref={(el) => (cardsRef.current[1] = el)}>
                  <div className="card Skillpro-svg-box text-center p-3 h-100">
                    <BackendSvg />
                  </div>
                </div> */}
              <div
                className="col-md-8 d-flex flex-column gap-3"
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>Languages</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <FaJava size={20} />
                      Java(Learning, hands-on practice),
                    </span>{" "}
                    <span>
                      {" "}
                      <PiFileSqlDuotone size={20} />
                      SQL(Basic knowledge),{" "}
                    </span>
                    <span>
                      <FaPython size={20} />
                      Python (Beginner, currently learning)
                    </span>
                  </p>
                </div>

                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>Tools</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <SiPostman size={20} />
                      Postman,
                    </span>{" "}
                    <span>
                      <PiFileSqlDuotone size={20} />
                      MySQL Workbench
                    </span>
                  </p>
                </div>
              </div>

              {/* Right column (taller card) */}
              <div
                className="col-md-12 mb-3"
                ref={(el) => (cardsRef.current[3] = el)}
              >
                <div className="card Skillpro-box text-center p-3 h-100">
                  <h5>
                    <b>Frameworks</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <SiSpringboot size={20} /> Spring Boot (REST APIs),{" "}
                    </span>{" "}
                    <span>
                      <GrMysql size={20} /> MySQL
                    </span>
                    <span>
                      <FaPython size={20} /> Django (Backend Framework),{" "}
                    </span>{" "}
                    <span>
                      <SiNodedotjs size={20} /> Express.js (Backend Framework)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h5
          className="Skillpro-navbar-links container text-center mb-3"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          Additional Competencies
        </h5>

        <section className="skill-section">
          <div className="container">
            <div className="row g-3 align-items-stretch">
              {/* Left column (taller card) */}
              <div
                className="col-md-6"
                ref={(el) => (cardsRef.current[1] = el)}
              >
                <div className="card Skillpro-box text-center p-3 h-100">
                  <h5>
                    <b>Development Tools</b>
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <span style={{ color: "#1b29c0ff" }}>Git & GitHub:</span>
                      <br />
                      Skilled in version control, branching, and managing pull
                      requests for collaborative development.
                    </li>
                    <li>
                      <span style={{ color: "#1b29c0ff" }}>VS Code:</span>
                      <br />
                      Main coding environment with useful extensions for
                      debugging, linting, and productivity.
                    </li>
                    <li>
                      <span style={{ color: "#1b29c0ff" }}>
                        Chrome DevTools:
                      </span>
                      <br />
                      Used for debugging, inspecting layouts, monitoring network
                      activity, and performance optimization.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right column */}
              <div
                className="col-md-6 d-flex flex-column gap-3"
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>API & Authentication</b>
                  </h5>
                  <p className="skill-items">
                    <span>
                      <MdApi size={20} /> API Integration
                    </span>
                    <span>
                      <SiJsonwebtokens size={20} />
                      RESTful API Consumption
                    </span>
                    <span>
                      <AiOutlineLoading3Quarters size={20} />
                      JWT-Based Authentication
                    </span>
                    <span>
                      <SiPostman size={20} />
                      Handling async API states (Loading, Error, Success)
                    </span>
                  </p>
                </div>

                <div className="card Skillpro-box text-center p-3 flex-fill">
                  <h5>
                    <b>Workflow & Methodologies</b>
                  </h5>
                  {/* <ul className="list-unstyled mb-0"> */}
                  <p className="skill-items">
                    <span>
                      {" "}
                      <DiScrum size={20} />
                      Agile (Scrum)
                    </span>
                    <span>
                      <LiaJira size={20} />
                      Jira / Trello
                    </span>
                    <span>
                      <VscSettingsGear size={20} />
                      CI/CD Awareness
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
      <nav className="Skill-navbar">
        <ul className="Skill-navbar-links">
          {sections.map((section, index) => (
            <li
              key={section}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{section}</span>
            </li>
          ))}
        </ul>
      </nav> */}

        {/* <div className="skills-wrapper">{renderContent()}</div> */}
      </div>
    </section>
  );
};

export default Skills;

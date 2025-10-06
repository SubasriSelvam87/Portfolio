import React, { useEffect, useRef, useState } from "react";
import { Element, scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./Navbar.css";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Credits from "./Credits/Credits";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const sectionRefs = useRef([]); // 🔹 store refs for all sections
const [isLastSection, setIsLastSection] = useState(false);

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.toUpperCase();
          setActiveLink(id);

          // check if last section
          if (id === "EXPERIENCE") {
            setIsLastSection(true);
          } else {
            setIsLastSection(false);
          }
        }
      });
    },
    {
      threshold: 0.2,            // 🔹 smaller threshold works for tall Skillpro
      rootMargin: "-20% 0px -20% 0px", // 🔹 triggers around center of viewport
    }
  );

  sections.forEach((section) => observer.observe(section));
  return () => sections.forEach((section) => observer.unobserve(section));
}, []);


const handleArrowClick = () => {
  if (isLastSection) {
    // scroll back to top
    scroller.scrollTo("HOME", {
      smooth: true,
      duration: 500,
      offset: 0,
    });
  } else {
    // find the current active section index
    const sections = document.querySelectorAll("section[id]");
    const currentIndex = Array.from(sections).findIndex(
      (sec) => sec.id.toUpperCase() === activeLink
    );
    const nextSection = sections[currentIndex + 1];
    if (nextSection) {
      scroller.scrollTo(nextSection.id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  }
};
  const handleLinkClick = (to) => {
    if (to === "ABOUT ME") {
      setShowModal(true);
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: to === "HOME" ? 0 : -80,
      });
      setActiveLink(to);
    }
    setMenuOpen(false);
  };

  // 🔹 Highlight active link
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id.toUpperCase());
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 🔹 Animate hide/show on scroll
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("show");
  //           entry.target.classList.remove("hide");
  //         } else {
  //           entry.target.classList.add("hide");
  //           entry.target.classList.remove("show");
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }
  //   );

  //   sectionRefs.current.forEach((section) => {
  //     if (section) observer.observe(section);
  //   });

  //   return () => {
  //     sectionRefs.current.forEach((section) => {
  //       if (section) observer.unobserve(section);
  //     });
  //   };
  // }, []);

  const goToAboutPage = () => {
    setShowModal(false);
    navigate("/about");
  };
  const closeModal = () => setShowModal(false);
    useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <div style={{ background: "white" }}>
      <nav className="navbar mx-auto">
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <ul className={`navbar-links ${menuOpen ? "open" : ""} mx-auto`}>
          {["HOME", "SKILLS", "PROJECTS", "EDUCATION", "EXPERIENCE", "ABOUT ME"].map((to) => (
            <li key={to}>
              <span
                onClick={() => handleLinkClick(to)}
                className={activeLink === to ? "active-link" : ""}
              >
                {to}
              </span>
            </li>
          ))}
        </ul>
      </nav>


      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close when clicking background
          >
            <motion.div
              className="about-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent overlay close
            >
<h2>Hey, curious about me?</h2>
<p>I’ve got a story to share. Hit the button and let’s dive in!</p>
              <div className="modal-buttons d-flex">
                <button
                  onClick={goToAboutPage}
                  className="primary-btn"
                  onMouseEnter={(e) =>
                    (e.currentTarget.querySelector("span").textContent = "😃")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.querySelector("span").textContent = "🙂")
                  }
                >
                  <span className="emoji">🙂</span> Check Me Out
                </button>
&nbsp; &nbsp;
                <button
                  onClick={closeModal}
                  className="secondary-btn"
                  onMouseEnter={(e) =>
                    (e.currentTarget.querySelector("span").textContent = "😢")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.querySelector("span").textContent = "😐")
                  }
                >
                  <span className="emoji">😐</span> Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sections with refs */}
      <Element name="HOME">
        <section id="HOME" ref={(el) => (sectionRefs.current[0] = el)} className=" home-section"           style={{
            padding: "8%",
            //  background: `
            //       radial-gradient(circle at bottom left, white 10%, transparent 40%),
            //       radial-gradient(circle at bottom right, white 10%, transparent 40%),
            //       #6faef1dd
            //     `,
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}>
          <Home />
        </section>
      </Element>


      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="white" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(145, 192, 214, 1)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z;
              M0,50 C480,100 960,20 1440,50 L1440,100 L0,100 Z;
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z
            "
            />
          </path>
        </g>
      </svg>


      <Element name="SKILLS">
        <section id="SKILLS" ref={(el) => (sectionRefs.current[1] = el)} className=" skills-section">
          {/* <Skills /> */}
          {/* <Newskill/> */}
          <Skills/>
        </section>
      </Element>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="#C0DEED" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="white">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z;
              M0,50 C480,100 960,20 1440,50 L1440,100 L0,100 Z;
              M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z
            "
            />
          </path>
        </g>
      </svg>
      <Element name="PROJECTS">
        <section id="PROJECTS" ref={(el) => (sectionRefs.current[2] = el)} className=" projects-section">
          <Projects />
        </section>
      </Element>

            <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "120px" }}
      >
        {/* Background */}
        <path fill="white" d="M0,0 H1440 V120 H0 Z" />

        {/* Slower background wave */}
        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(112, 178, 198, 1)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,70 C480,130 960,10 1440,70 L1440,120 L0,120 Z;
              M0,50 C480,90 960,30 1440,50 L1440,120 L0,120 Z;
              M0,70 C480,130 960,10 1440,70 L1440,120 L0,120 Z
            "
            />
          </path>
        </g>

        {/* Faster foreground wave */}
        <g transform="scale(-1,1) translate(-1440,0)">
          <path fill="rgba(112, 178, 198, 1)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z;
              M0,40 C480,100 960,0 1440,40 L1440,120 L0,120 Z;
              M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z
            "
            />
          </path>
        </g>
      </svg>

      <Element name="EDUCATION">
        <section id="EDUCATION" ref={(el) => (sectionRefs.current[3] = el)} className=" education-section">
          <Education />
        </section>
      </Element>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path fill="rgba(112, 178, 198, 1)" d="M0,0 H1440 V100 H0 Z" />

        <g transform="scale(-1,1) translate(-1440,0)">
          <path
            fill=" white"
            d="M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
          />
        </g>
      </svg>
      <Element name="EXPERIENCE">
        <section id="EXPERIENCE" ref={(el) => (sectionRefs.current[4] = el)} className=" experience-section ">
          <Experience />
          
        </section>
      </Element>
<Credits/>
      <div
  className="scroll-arrow"
  onClick={handleArrowClick}
>
  {isLastSection ? <FaArrowUp size={28} /> : <FaArrowDown size={28} />}
</div>

    </div>
  );
};

export default Navbar;

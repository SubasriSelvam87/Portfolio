import React, { useEffect, useState } from "react";
import "./Home.css";
import resumePdf from "../../Assets/ResumePdf.pdf"
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import Contact from "../Contact/Contact"; // import your Contact component
import ResumeModal from "../Resume/Resume";
import { SiIndeed } from "react-icons/si";
import Resume from "../Resume/ResumeModal";

const greetings = [
  "Hi", "Hola", "Bonjour", "வணக்கம் (Vanakkam)", "こんにちは (Konnichiwa)",
  "안녕하세요 (Annyeonghaseyo)", "Olá", "Привет (Privet)", "Merhaba", "Kamusta",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showContact, setShowContact] = useState(false); // modal state
const [showResume, setShowResume] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % greetings.length), 6000);
    return () => clearInterval(interval);
  }, []);

  // Show modal handler
  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <div className="home-wrapper">
      <div className="greeting" key={index} style={{ fontSize: "3rem" }}>
        {greetings[index]}
      </div>

      <p className="title" style={{ fontSize: "3.5rem" }}>
        <b>I'm <span className="animated-text">Subasri Selvam,</span></b>
      </p>

      <h4 className="subTitle2" style={{ fontSize: "4rem" }}>
        <b>a </b>
        <strong style={{ fontSize: "larger" }}>
          <span className="animated-text">Front-End Developer</span>
        </strong>
      </h4>

      <div className="home-btn d-flex mx-auto m-3">
        <button className="btn connect-btn" onClick={handleOpenContact}>
          <b>Let's Connect</b>
        </button>
<button className="btn connect-btn" onClick={() => setShowResume(true)}>
  <b>View My Resume</b>
</button>
      </div>

<div className="connect-icons">
  <a 
    href="https://github.com/SubasriSelvam87" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <LuGithub className="connect-icon" />
  </a>
  &nbsp;&nbsp;
  <a 
    href="https://www.linkedin.com/in/subasri-selvam-9abb88351" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedinIn className="connect-icon" />
  </a>

</div>


      {/* Contact Modal */}
      {showContact && <Contact onClose={handleCloseContact} />}
      {/* {showResume && <ResumeModal pdfUrl={resumePdf} onClose={() => setShowResume(false)} />} */}
      {showResume && <Resume pdfUrl={resumePdf} onClose={() => setShowResume(false)} />}
    
    </div>
  );
};

export default Home;

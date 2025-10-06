import React from "react";
// import resume1 from "../../Assets/1.jpg";
// import resume2 from "../../Assets/2.jpg";
import resume1 from "../../Assets/resume1.jpg";
import resume2 from "../../Assets/resume2.jpg";

import "./ResumeModal.css";

const Resume = ({ onClose }) => {
  return (
    <div className="resume-overlay">
      <div className="resume-modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <div className="resume-pages">
          <div className="resume-card">
            <img src={resume1} alt="Resume Page 1" />
          </div>
          <div className="resume-card">
            <img src={resume2} alt="Resume Page 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

import { FaArrowLeft } from "react-icons/fa";
// import { useMediaQuery } from "react-responsive";
// Example: import your logo image
import logo from "../../About-Assets/girly.jpg";
// import Gallery from "./Gallery/Gallery";
// import MobileGallery from "./MobileGallery/MobileGallery";
import { useMediaQuery } from "react-responsive";
import MobileGallery from "./MobileGallery/MobileGallery";
import Gallery from "./Gallery/Gallery";

const About = () => {
  const navigate = useNavigate();
const isMobile = useMediaQuery({ maxWidth: 500 });
  const goToPortfolio = () => {
    navigate("/");
  };

  return (
    <div
      className="about-card container p-4 m-3 mx-auto d-block"
      aria-labelledby="about-heading"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        position: "relative", // needed for absolute children
      }}
    >
      {/* Back Button (Top Left) */}
      <button className="btn-back-top-left" onClick={goToPortfolio}>
        <FaArrowLeft className="icon" />
        <span className="text">Back to Portfolio</span>
      </button>

      {/* Logo Circle (Top Right) */}
      <div className="logo-circle">
        <img src={logo} alt="Logo" />
      </div>

      <div className="about-inner">
        <div className="about-content">
          <h3 id="about-heading" className="about-title text-center">
            <b> Who I Am <br/>(Beyond the Code)</b>
          </h3>

          <p className="about-lead text-center">
            I may be a front-end developer today, but I don’t stop at the
            screen.
          </p>

          <p className="about-text text-center">
            Fresh in my twenties, fueled by curiosity and creativity. Even
            without writing a single line of code. <br />
            I love exploring, experimenting, and finding new ways to express
            ideas. I see myself as a designer of concepts, a curious learner,
            and someone who finds joy in the art of creating. <br />
            Whether it’s sketching, painting, sewing, or simply reimagining
            perspectives, I thrive on experimentation and the pursuit of
            meaningful impact. <br />
            To me, creativity in any form is the spark that fuels innovation and
            brings every project to life.
          </p>
        </div>

        <div className="about-cta text-center">
          <span className="about-cta-text">
            I’ve shared a few of my sketches.
          </span>
        </div>

   <div className="p-4 about-gallery-wrapper">
          {isMobile ? <MobileGallery /> : <Gallery />}
        </div>


        <div className="about-cta text-center">
          <span className="about-cta-text">
            Always moving forward, always creating
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;


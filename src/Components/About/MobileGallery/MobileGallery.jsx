import React, { useState, useEffect } from "react";
import "./MobileGallery.css";
import img2 from "../../../About-Assets/moth.jpg";
import img3 from "../../../About-Assets/girl.jpg";
import img4 from "../../../About-Assets/Man.jpg";
import img5 from "../../../About-Assets/eye.jpg";

const images = [img5, img3, img2, img4];

export default function MobileGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mobile-gallery-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="mobile-slide" />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

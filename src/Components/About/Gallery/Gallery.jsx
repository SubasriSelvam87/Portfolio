import React, { useEffect, useRef, useState } from "react";

import "./Gallery.css"; // Add your original CSS here
import img2 from "../../../About-Assets/moth.jpg";
import img3 from "../../../About-Assets/girl.jpg";
import img4 from "../../../About-Assets/Man.jpg";
import img5 from "../../../About-Assets/eye.jpg";


const images = [ img5,img3,img2, img4];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="mysketch-slider slider">
      {images.map((src, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`slide${index}`}
            name="slide"
            checked={activeIndex === index}
            onChange={() => setActiveIndex(index)}
          />
          <label htmlFor={`slide${index}`}></label>
          <img src={src} alt={`Panel ${index + 1}`} />
        </li>
      ))}
    </ul>
  );
}
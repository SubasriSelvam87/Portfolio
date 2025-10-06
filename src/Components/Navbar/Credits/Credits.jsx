
import React from "react";
import "./Credits.css";
import Wave from "./Wave/Wave";

const Credits = () => {
 return (
    <div className="end-section">
      {/* Wave background */}
      <Wave />

      {/* Animated text */}
      <div className="end-text">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          {/* Subtitle */}
          <text x="50%" y="15%" textAnchor="middle" className="subtitle">
            Designed & Developed by
          </text>

          {/* Main text */}
          <symbol id="s-text">
            <text className="name-text" textAnchor="middle" x="50%" y="30%" dy=".35em">
              Subasri Selvam
            </text>
          </symbol>

          {/* Duplicate for stroke animation */}
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
        </svg>
      </div>
    </div>
  );
};

export default Credits;
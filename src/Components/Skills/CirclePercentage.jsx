import React, { useEffect, useState } from "react";

const PercentageCircle = ({ percentage, size = 120, strokeWidth = 12, color = "#0d8ca2" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  // Animate the percentage (count-up effect)
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percentage) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    step();
  }, [percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />

<text
  x="50%"
  y="50%"
  dominantBaseline="middle"
  textAnchor="middle"
  style={{
    fontSize: `${size * 0.13}px`,   // locked inline
    fontWeight: 600,
    fill: "#003366",
    pointerEvents: "none",          // makes it non-clickable
    userSelect: "none"              // prevents accidental text selection
  }}
>
  {progress}%
</text>

      </svg>
    </div>
  );
};

export default PercentageCircle;

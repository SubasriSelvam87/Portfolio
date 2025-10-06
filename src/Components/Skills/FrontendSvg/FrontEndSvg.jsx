import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./FrontEndSvg.css";

const FrontEndSvg = ({ redSegments = 13 }) => {
  const segments = 15;

  // make sure red doesn’t exceed total
  const filled = Math.min(redSegments, segments);

  // build colors
  const segmentColors = [
    ...Array(filled).fill("#13aec9ea"), // red
    ...Array(segments - filled).fill("#eaf1f7aa") // gray
  ];

  return (
    <div style={{ background: "transparent", padding: "20px"}} >
      <ReactSpeedometer
        value={0} // value doesn’t matter since we color manually
        minValue={0}
        maxValue={100}
        segments={segments}
        needleColor="transparent"
        segmentColors={segmentColors}
        customSegmentStops={[...Array(segments + 1).keys()].map(
          (i) => (i * 100) / segments
        )}
        // currentValueText={`85%`}
        textColor="#fff"
        height="auto"
        maxSegmentLabels={0}
      className="frontend-svg"
      />
      <div style={{ textAlign: "center", marginTop: "-20px", color: "#545151ff" }}>
        <b>85%</b>
      </div>
    </div>
  );
};

export default FrontEndSvg;


// import React from "react";



// export default function FrontEndSvg({ width = 400, height = 300 }) {
//   const centerX = 200;
//   const centerY = 150;
//   const radiusX = 120; // horizontal radius
//   const radiusY = 60;  // vertical radius

//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox="0 0 400 300"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Background */}
//       <rect width="100%" height="100%" fill="#0f172a" />

//       {/* Ball 1 - red */}
//       <circle r="20" fill="#fb92d3ff">
//         {/* Circular/oval motion - slower */}
//         <animateMotion
//           dur="8s"  // doubled duration for slower loop
//           repeatCount="indefinite"
//           rotate="auto"
//           path={`
//             M ${centerX + radiusX},${centerY}
//             a ${radiusX},${radiusY} 0 1,1 ${-2 * radiusX},0
//             a ${radiusX},${radiusY} 0 1,1 ${2 * radiusX},0
//           `}
//         />
//         {/* Bounce - slower */}
//         <animate attributeName="r" values="20;16;20" dur="1.6s" repeatCount="indefinite" />
//       </circle>

//       {/* Ball 2 - blue */}
//       <circle r="18" fill="#a0c3fcff">
//         <animateMotion
//           dur="8s"   // slower
//           begin="4s" // offset by half duration
//           repeatCount="indefinite"
//           rotate="auto"
//           path={`
//             M ${centerX + radiusX},${centerY}
//             a ${radiusX},${radiusY} 0 1,1 ${-2 * radiusX},0
//             a ${radiusX},${radiusY} 0 1,1 ${2 * radiusX},0
//           `}
//         />
//         <animate attributeName="r" values="18;14;18" dur="1.6s" repeatCount="indefinite" />
//       </circle>
//     </svg>
//   );
// }
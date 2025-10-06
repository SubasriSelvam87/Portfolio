import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const BackendSvg = ({ redSegments = 10 }) => {
  const segments = 15;

  // make sure red doesn’t exceed total
  const filled = Math.min(redSegments, segments);

  // build colors
  const segmentColors = [
    // ...Array(filled).fill("#77b2f5ff"),
    ...Array(filled).fill("#13aec9ea"),

    ...Array(segments - filled).fill("#eaf1f7aa") // gray
  ];

  return (
    <div style={{ background: "transparent", padding: "20px", borderRadius: "10px" }}>
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
      
      />
      <div style={{ textAlign: "center", marginTop: "-20px", color: "#545151ff" }}>
        <b>60%</b>
      </div>
    </div>
  );
};

export default BackendSvg;
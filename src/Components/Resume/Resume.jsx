import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./Resume.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

const ResumeModal = ({ pdfUrl, onClose }) => {
  return (
    <div className="resume-overlay">
      <div className="resume-modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <Worker workerUrl={pdfjsWorker}>
          <div className="pdf-container">
            <Viewer fileUrl={pdfUrl} defaultScale={1.0} />
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default ResumeModal;

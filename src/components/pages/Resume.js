import React from "react";
import DownloadLink from "react-download-link";
import ResumeDoc from "../../images/resume.docx";

export default function Resume() {
  return (
    <div className="home">
      <h1>My Resume</h1>
      <DownloadLink
        label="Resume"
        filename="resume.docx"
        exportFile={() => ResumeDoc}
      />
      <p></p>
    </div>
  );
}

import React from "react";

import ResumeDoc from "../../images/resume.docx";

export default function Resume() {
  return (
    <div className="home container text-center">
      <h1>My Resume</h1>
      <a href={ResumeDoc} className="link-dark pb-4" download>
        Resumé
      </a>
      <h1 className="pb-2 pt-2">Skills</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>API's</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>React</li>
      </ul>
    </div>
  );
}

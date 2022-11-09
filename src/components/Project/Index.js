import React from "react";
import HoriseonImg from "../../images/refactor.JPG";
import BeatsImg from "../../images/beats.JPG";
import CalendarImg from "../../images/calendar.JPG";
import JavascriptImg from "../../images/quiz.JPG";
const HoriseonUrl = "https://github.com/SteveWeed79/herison-code-refactor";
const BeatsUrl = "https://github.com/SteveWeed79/project-1-beats-on-the-street";
const CalendarUrl = "https://github.com/SteveWeed79/calendar-keeper-work-day";
const QuizUrl = "https://github.com/SteveWeed79/Javascript-quiz-project";

const Project = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-center">
        <a href={HoriseonUrl}>
          <img src={HoriseonImg} className="projectimg" />
        </a>
        <a href={BeatsUrl}>
          <img src={BeatsImg} className="projectimg" />
        </a>
        <a href={CalendarUrl}>
          <img src={CalendarImg} className="projectimg" />
        </a>
        <a href={QuizUrl}>
          <img src={JavascriptImg} className="projectimg" />
        </a>
      </div>
    </div>
  );
};

export default Project;

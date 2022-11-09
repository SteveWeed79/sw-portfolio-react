import React from "react";
import Project from "../Project/Index";
import styles from "../../styles/style.css";

export default function Portfolio() {
  return (
    <div className="home container text-center">
      <div>
        <h1 className="m-2">My Portfolio</h1>

        <Project />
      </div>
    </div>
  );
}

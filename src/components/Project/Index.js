import React from "react";
// import linkInImg from "../../images/LI-In-Bug.png";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="row justify-center">
        <GoMarkGithub size={36} className="col-2 p-1" />
        <BsLinkedin size={36} className="col-2 p-1" />
        <HiOutlineMail size={36} className="col-2 p-1" />
      </div>
    </footer>
  );
};

export default Project;

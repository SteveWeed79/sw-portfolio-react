import React from "react";
// import linkInImg from "../../images/LI-In-Bug.png";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const GitHub = "https://github.com/SteveWeed79";
const LinkIn = "https://www.linkedin.com/in/steve-weed-773607165/";
const Email = "mailto:steveweed1979@gmail.com";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <div className="row text-center align-center">
          <a href={GitHub} className="col link-dark">
            <GoMarkGithub size={36} />
          </a>
          <a href={LinkIn} className="col link-dark">
            <BsLinkedin size={36} />
          </a>
          <a href={Email} className="col link-dark">
            <HiOutlineMail size={36} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

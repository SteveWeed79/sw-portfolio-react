import React from "react";
// import linkInImg from "../../images/LI-In-Bug.png";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row justify-center">
        <GoMarkGithub size={36} className="col-2 p-1" />
        <BsLinkedin size={36} className="col-2 p-1" />
        <HiOutlineMail size={36} className="col-2 p-1" />
      </div>
    </footer>
  );
};

export default Footer;

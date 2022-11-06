import React from "react";
import linkInImg from "../../images/LI-In-Bug.png";
import "../../styles/style.css";

const Footer = () => {
  return (
    <footer className="text-center footer">
      <div>
        <img
          src={linkInImg}
          className="img m-1 justify-center"
          alt="linked in"
        />
      </div>
    </footer>
  );
};

export default Footer;

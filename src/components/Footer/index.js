import React from "react";
import linkInImg from "../../images/LI-In-Bug.png";

const Footer = () => {
  return (
    <footer className="container-fluid text-center height: 10% bg-secondary p-4">
      <div className="mb-5">
        <h4>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          by the Tech Thoughts team. YUP
        </h4>
        <img src={linkInImg} className="h-25" alt="linked in" />
      </div>
    </footer>
  );
};

export default Footer;

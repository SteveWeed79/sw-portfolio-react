import React from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <h1>Steve Weed</h1>
      <div className=" text-center justify-center fixed-botton">
        <ul className="row position-sticky">
          <li className="col list-group-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="col list-group-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="col list-group-item">
            <a
              href="#blog"
              onClick={() => handlePageChange("Blog")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Blog" ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </a>
          </li>
          <li className="col list-group-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;

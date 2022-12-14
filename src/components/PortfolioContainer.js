import React, { useState, useEffect } from "react";
import Header from "./Header/Index";
import Home from "./pages/Home";
import About from "./pages/Portfolio";
import Blog from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Blog") {
      return <Blog />;
    }
    return <Contact />;
  };

  useEffect(() => {
    document.title = "Steve Weed";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

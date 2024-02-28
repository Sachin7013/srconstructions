import { useEffect } from "react";
import About from "./About";

function Home() {
  

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <ul>
              <li><a href="#header" className="tab-links active-link" data-tab="home">Home</a></li>
              <li><a href="#about" className="tab-links" data-tab="about">About us</a></li>
              <li><a href="#service" className="tab-links" data-tab="service">Service</a></li>
              <li><a href="#portfolio" className="tab-links" data-tab="work">My Work</a></li>
              <li><a href="#contact" className="tab-links" data-tab="contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-text">
            <h1><span>SreeRaam Construction</span></h1>
            <br />
            <p>Create your dream house</p>
            <br />
            <p>We are a team of passionate civil engineers, who have successfully completed many projects in the past few years.</p>
          </div>
        </div>
      </div>
      <div id="about" className="tab-contents active-tab"><About/></div>
      <div id="service" className="tab-contents"></div>
      <div id="portfolio" className="tab-contents"></div>
      <div id="contact" className="tab-contents"></div>
    </>
  );
}

export default Home;

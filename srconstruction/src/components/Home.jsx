import About from "./About";
function Home() {
    return (
        <>
      <div id="header">
        <div className="container">
          <nav>
            <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="/service">Service</a></li>
              <li><a href="/portfolio">My Work</a></li>
              <li><a href="/contact">Contact</a></li>
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
      <About/>
      </>
    );
  }
  
  export default Home;
  
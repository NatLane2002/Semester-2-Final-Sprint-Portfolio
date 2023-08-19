import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const WeatherAppProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component is mounted
  }, []);

  // a function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="top" className="project-page">
      <nav className="project-page-nav">
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </nav>
      <main>
        <div className="project-details">
          <h1 className="project-title">Weather App</h1>
          <p className="project-summary">
            Discover the world's weather through my debut weather app, a journey
            into API integration and React development. Embrace real-time
            weather updates and experience my early steps in creating functional
            and stylish applications.
          </p>
          <div className="project-images">
            <div className="project-image-container">
              <img
                src={require("../assets/WeatherAppImg1.png")}
                alt="Weather App Screenshot 1"
                className="project-image"
              />
              <div className="project-image-description">
                Current forecast page and search area.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/WeatherAppImg2.png")}
                alt="Weather App Screenshot 2"
                className="project-image"
              />
              <div className="project-image-description">
                Extended Forecast - 3 hour, 5 day.
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="project-section">
            <h2 className="section-title">Key Features</h2>
            <ul>
              <li>Real-time weather updates based on user location or input</li>
              <li>
                Display of current weather conditions, temperature, humidity,
                etc.
              </li>
              <li>
                User-friendly interface for easy navigation and interaction
              </li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="project-section">
            <h2 className="section-title">Lessons Learned</h2>
            <p>
              Creating the Weather App taught me valuable lessons in API
              integration, React development, and user experience design. I
              gained insights into handling asynchronous operations and
              optimizing performance for real-time data updates.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className="project-section">
            <h2 className="section-title">Future Enhancements</h2>
            <p>
              In the future, I plan to enhance the Weather App by implementing
              additional features such as extended weather forecasts,
              personalized user profiles, and the ability to save favorite
              locations.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <ScrollLink to="project-page" spy={true} smooth={true} duration={1000}>
          <div className="indProjectTopLink">Go To Top</div>
        </ScrollLink>
      </footer>
    </div>
  );
};

export default WeatherAppProject;

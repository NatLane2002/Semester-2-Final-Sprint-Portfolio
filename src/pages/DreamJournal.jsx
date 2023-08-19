import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const DreamJournal = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component is mounted
  }, []);

  // create a function to scroll to the top on click
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page">
      <nav id="marginRight" className="project-page-nav">
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </nav>
      <main>
        <div className="project-details">
          <h1 className="project-title">Dream Journal App</h1>
          <p className="project-summary">
            Record and explore your dreams with the Dream Journal app. Dive into
            the world of dream interpretation and experience a seamless
            journaling experience.
          </p>
          <div className="project-images">
            <div className="project-image-container">
              <img
                src={require("../assets/LoginPageDreamJournalSS.png")}
                alt="Dream Journal Screenshot 1"
                className="project-image"
              />
              <div className="project-image-description">
                Secure user authentication and login.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/DreamJournalImg3.png")}
                alt="Dream Journal Screenshot 2"
                className="project-image"
              />
              <div className="project-image-description">
                Effortlessly record and categorize dreams.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/DreamJournalImg2.png")}
                alt="Dream Journal Screenshot 3"
                className="project-image"
              />
              <div className="project-image-description">
                Explore various user's dream entries.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/DreamJournalImg4.png")}
                alt="Dream Journal Screenshot 4"
                className="project-image"
              />
              <div className="project-image-description">
                Seamless profile page for user changes and statistics.
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="project-section">
            <h2 className="section-title">Key Features</h2>
            <ul>
              <li>Secure user authentication and login</li>
              <li>Effortlessly record and categorize dreams</li>
              <li>Explore dream interpretation resources</li>
              <li>User-friendly interface for intuitive navigation</li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="project-section">
            <h2 className="section-title">Lessons Learned</h2>
            <p>
              Creating the Dream Journal app taught me important lessons in
              frontend development, user authentication, and data management
              harnessing the power of json-servers. I gained insights into user
              experience design and the importance of intuitive interfaces.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className="project-section">
            <h2 className="section-title">Future Enhancements</h2>
            <p>
              In the future, I plan to enhance the Dream Journal app by
              implementing additional features such as dream analysis tools,
              more personalized settings, and mobile app versions.
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

export default DreamJournal;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const FeedbackApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component is mounted
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page">
      <nav className="project-page-nav">
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </nav>
      <main>
        <div className="project-details">
          <h1 className="project-title">Feedback App</h1>
          <p className="project-summary">
            Explore the world of feedback management with the Feedback App. Gain
            insights from user feedback, track improvements, and enhance user
            satisfaction.
          </p>
          <div className="project-images">
            <div className="project-image-container">
              <img
                src={require("../assets/FeedbackAppImg1.png")}
                alt="Feedback App Screenshot 1"
                className="project-image"
              />
              <div className="project-image-description">
                Collect and manage user feedback efficiently.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/FeedbackAppImg2.png")}
                alt="Feedback App Screenshot 2"
                className="project-image"
              />
              <div className="project-image-description">
                Contact information for quick connections and responses.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/FeedbackAppImg3.png")}
                alt="Feedback App Screenshot 3"
                className="project-image"
              />
              <div className="project-image-description">
                Admin dashboard for viewing various user's contact information
                and messages.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/FeedbackAppImg4.png")}
                alt="Feedback App Screenshot 4"
                className="project-image"
              />
              <div className="project-image-description">
                Color Theme - Nightfall.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/FeedbackAppImg5.png")}
                alt="Feedback App Screenshot 5"
                className="project-image"
              />
              <div className="project-image-description">
                Color Theme - Cotton Candy Dreams.
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="project-section">
            <h2 className="section-title">Key Features</h2>
            <ul>
              <li>Collect and manage user feedback efficiently</li>
              <li>Visualize feedback trends and insights</li>
              <li>Admin dashboard for reviewing sensitive information</li>
              <li>Enhanced user engagement and satisfaction</li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="project-section">
            <h2 className="section-title">Lessons Learned</h2>
            <p>
              Developing the Feedback App provided valuable insights into
              frontend and backend integration, user data management, and
              responsive design. I gained experience in creating effective data
              visualization and implementing responsive, user-friendly
              interfaces using flexbox. This was also my first time implementing
              multiple color themes using CSS variables, useContext and Local
              Storage.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className="project-section">
            <h2 className="section-title">Future Enhancements</h2>
            <p>
              Looking ahead, I have plans to possibly enhance the Feedback App
              by introducing features such as user segmentation for targeted
              insights and integration with popular communication tools. These
              additions will further empower businesses to gather valuable
              feedback and make informed decisions to enhance user satisfaction
              and product improvement.
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

export default FeedbackApp;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const TileMatchingGame = () => {
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
          <h1 className="project-title">Tile Matching Game</h1>
          <p className="project-summary">
            Immerse yourself in the Tile Matching Game, a captivating challenge
            of memory and strategy. Sharpen your mind while enjoying an engaging
            and polished gaming experience.
          </p>
          <div className="project-images">
            <div className="project-image-container">
              <img
                src={require("../assets/TileMatchingGameImg1.png")}
                alt="Tile Matching Game Screenshot 1"
                className="project-image"
              />
              <div className="project-image-description">
                Embark on a new puzzle adventure as you begin the game.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/TileMatchingGameImg2.png")}
                alt="Tile Matching Game Screenshot 2"
                className="project-image"
              />
              <div className="project-image-description">
                Dive into the challenge and excitement of a match as you
                progress through the game.
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={require("../assets/TileMatchingGameImg3.png")}
                alt="Tile Matching Game Screenshot 3"
                className="project-image"
              />
              <div className="project-image-description">
                Celebrate your success as the game concludes, displaying your
                result.
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="project-section">
            <h2 className="section-title">Key Features</h2>
            <ul>
              <li>Challenging and engaging tile matching gameplay</li>
              <li>Improve memory and cognitive skills</li>
              <li>Responsive design for various screen sizes</li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="project-section">
            <h2 className="section-title">Lessons Learned</h2>
            <p>
              Developing the Tile Matching Game granted me invaluable insights
              into the intricacies of game mechanics, UI/UX design, and
              responsive layout. Through this process, I honed my skills in
              optimizing game performance and crafting seamless user
              interactions. Additionally, I delved deep into the realm of user
              interactions, mastering complex data manipulation, and gaining
              proficiency in employing conditional statements for dynamic
              gameplay logic.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className="project-section">
            <h2 className="section-title">Future Enhancements</h2>
            <p>
              In the future, I plan to enhance the Tile Matching Game by adding
              new levels, customizable styles, and multiplayer functionality for
              a more dynamic gaming experience.
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

export default TileMatchingGame;

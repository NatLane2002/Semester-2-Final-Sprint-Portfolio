import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Projects = () => {
  const handleRedirect = (event, projectNumber) => {
    // Prevent the default behavior of the button click
    event.preventDefault();

    // Define the URLs for each project
    const projectUrls = [
      "https://github.com/NatLane2002/First-Weather-App",
      null,
      "https://github.com/NatLane2002/Semester_2_QAP_3",
      "https://github.com/NatLane2002/First_Tile_Matching_Game",
    ];

    // Redirect to the specified project URL
    window.open(projectUrls[projectNumber], "_blank");
  };

  return (
    <>
      <div id="top" className="page projectsPage">
        <div className="blackBackground">
          <header>
            <nav className="project-page-nav">
              <Link to="/" className="nav-link marginRight">
                Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Link>
            </nav>
            <div className="image">
              <img
                src="https://www.pngmart.com/files/13/Blue-Abstract-PNG-Picture.png"
                alt=""
              />
            </div>
            <div className="headingContainer">
              <div className="personalText">PERSONAL</div>
              <div className="projectsText">PROJECTS</div>
              <div className="bigUnderLine"></div>
            </div>
            <div className="scrollDownContainer">
              <ScrollLink
                to="row1"
                smooth={true}
                duration={1000}
                className="scrollDown scroll1"
              >
                Weather App
              </ScrollLink>
              <ScrollLink
                to="row2"
                smooth={true}
                duration={1250}
                className="scrollDown scroll2"
              >
                Dream Journal
              </ScrollLink>
              <ScrollLink
                to="row3"
                smooth={true}
                duration={1500}
                className="scrollDown scroll3"
              >
                Feedback App
              </ScrollLink>
              <ScrollLink
                to="row4"
                smooth={true}
                duration={1750}
                className="scrollDown scroll4"
              >
                Tile Matching Game
              </ScrollLink>
              <ScrollLink
                to="upcoming-project"
                smooth={true}
                duration={2000}
                className="scrollDown scroll5"
              >
                Upcoming Project...
              </ScrollLink>
            </div>
          </header>
        </div>
        <main>
          <div className="row1">
            <div className="stickyElement1">
              Weather App <div className="vertLine"></div>
            </div>
            <div className="box1">
              <div className="imgContainer">
                <img src={require("../assets/WeatherAppImg1.png")} alt="" />
              </div>
              <div className="textArea">
                <div className="text1">
                  <p>
                    I present my inaugural weather app, representing my
                    introduction to API integration and React development.
                    Serving as a sentimental starting point, this project
                    showcases my early enthusiasm for learning and creating
                    practical applications with real-time weather updates.
                  </p>
                </div>
              </div>
              <Link to="/weatherApp">
                <button className="seeMoreBtn sbtn1">See More</button>
              </Link>
              <button
                onClick={(e) => handleRedirect(e, 0)}
                className="codeBtn cbtn1"
              >
                {"</> Code"}
              </button>
              <div className="techStackDiv">
                <div className="techStackText">
                  <h3>Tech Stack: </h3>
                </div>
                <div>React.js</div>
                <div>JSX</div>
                <div>CSS</div>
                <div>Axios</div>
                <div>Figma</div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="stickyElement2">
              Dream Journal<div className="vertLine vertLine2"></div>
            </div>
            <div className="box2">
              <div className="imgContainer">
                <img
                  src={require("../assets/LoginPageDreamJournalSS.png")}
                  alt="Project 2"
                />
              </div>
              <div className="textArea">
                <div className="text2">
                  <p>
                    I've recently developed a captivating dream journaling app,
                    offering user registration, login, dream recording, and
                    optional sharing features. The project was a delightful
                    journey of ideation, design, and coding, allowing me to
                    bring my creative concepts to life in a functional and
                    engaging application.
                  </p>
                </div>
              </div>
              <Link to="/dreamJournal">
                <button className="seeMoreBtn sbtn2">See More</button>
              </Link>
              <button
                onClick={(e) => handleRedirect(e, 1)}
                className="codeBtn cbtn2"
              >
                {"</> Code"}
              </button>
              <div className="techStackDiv">
                <div className="techStackText">
                  <h3>Tech Stack: </h3>
                </div>
                <div>React.js</div>
                <div>JSX</div>
                <div>CSS</div>
                <div>
                  React <br /> Router
                </div>
                <div>Axios</div>
                <div>Figma</div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="stickyElement3">
              Feedback Application<div className="vertLine vertLine3"></div>
            </div>
            <div className="box3">
              <div className="imgContainer">
                <img
                  src={require("../assets/FeedbackAppImg1.png")}
                  alt="Project 3"
                />
              </div>
              <div className="textArea">
                <div className="text3">
                  <p>
                    I created a feedback app that served as a significant
                    learning experience in React, providing valuable insights
                    into its architecture and enhancing my proficiency with
                    diverse tools. With some refinement, this project could have
                    practical real-life applications and stands as a testament
                    to my continuous growth in React development.
                  </p>
                </div>
              </div>
              <Link to="/feedbackApp">
                <button className="seeMoreBtn sbtn3">See More</button>
              </Link>
              <button
                onClick={(e) => handleRedirect(e, 2)}
                className="codeBtn cbtn3"
              >
                {"</> Code"}
              </button>
              <div className="techStackDiv">
                <div className="techStackText">
                  <h3>Tech Stack: </h3>
                </div>
                <div>React.js</div>
                <div>JSX</div>
                <div>CSS</div>
                <div>
                  React <br /> Router
                </div>
                <div>Axios</div>
                <div>Figma</div>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="stickyElement4">
              <div className="tileMatchingGameText">Tile Matching Game</div>
              <div className="vertLine vertLine4"></div>
            </div>
            <div className="box4">
              <div className="imgContainer">
                <img
                  src={require("../assets/TileMatchingGameImg1.png")}
                  alt="Project 4"
                />
              </div>
              <div className="textArea">
                <div className="text4">
                  <p>
                    I proudly introduce my meticulously built tile matching
                    game, powered by React, which reflects a rewarding journey
                    of overcoming challenges. As I refine the game and plan to
                    add more features, this project has ignited a passion for
                    ambitious future endeavors and marked a pivotal step in my
                    development journey.
                  </p>
                </div>
              </div>
              <Link to="/tileMatchingGame">
                <button className="seeMoreBtn sbtn4">See More</button>
              </Link>
              <button
                onClick={(e) => handleRedirect(e, 3)}
                className="codeBtn cbtn4"
              >
                {"</> Code"}
              </button>
              <div className="techStackDiv">
                <div className="techStackText">
                  <h3>Tech Stack: </h3>
                </div>
                <div>React.js</div>
                <div>JSX</div>
                <div>CSS</div>
                <div>Figma</div>
              </div>
            </div>
          </div>
          <div className="goToTop">
            <ScrollLink
              to="top"
              smooth={true}
              duration={1500}
              className="scrollDown goToTheTopOfThePage"
            >
              Go To Top
            </ScrollLink>
          </div>
          <footer>
            {/* Upcoming Project */}
            <div className="upcoming-project">
              <div className="upcoming-project-text">
                <h2 className="section-title">Upcoming Project</h2>
                <p>
                  I'm excited to announce an upcoming project—a real-time
                  full-stack chatting and messaging application. This project
                  aims to provide seamless communication and interaction between
                  users in real time. Stay tuned for more updates and details!
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Projects;

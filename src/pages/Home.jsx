import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useRef } from "react";
import { PiCubeTransparentDuotone } from "react-icons/pi";
import { Tb3DCubeSphere } from "react-icons/tb";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(firstName, lastName, email, phoneNumber, message);
    handleClearForm();

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleEmailClick = () => {
    const emailAddress = "nathaniel.lane@keyin.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const handleRedirectToPDF = () => {
    window.open(
      "https://drive.google.com/file/d/1OV9a33N25s-jWW0MH5CW0XXJu9ykLDk9/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <nav id="top" className="homePageNavBar">
        <ScrollLink className="skillsLink" to="skills" spy={true} smooth={true} duration={1000}>
          <div className="skillsLink">Skills</div>
        </ScrollLink>
        <ScrollLink className="contactMeLink" to="getInTouch" spy={true} smooth={true} duration={1500}>
          <div className="contactMeLink">Contact Me</div>
        </ScrollLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </nav>
      <div className="page homePage">
        <div className="contentContainer">
          <div className="greetingContainer">
            <h1 className="greetingTextTitle">Hi, I am Nathaniel Lane</h1>
            <p className="frontEndText">FrontEnd Developer</p>
            {/* <button className="cvBtn">Download CV</button> */}
            <Link to="/resume">
              <button className="cssbuttons-io-button btnMarginRight">
                View CV
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
            <Link to="/projects">
              <button className="cssbuttons-io-button">
                Projects
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
            <button
              onClick={handleRedirectToPDF}
              type="button"
              className="button"
            >
              <span className="button__text">Download CV</span>
              <span className="button__icon">
                <svg
                  className="svg"
                  data-name="Layer 2"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  viewBox="0 0 35 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="profilePictureBackgroundDiv"></div>

          <div className="profilePictureContainer">
            <div className="profilePicture">
              <img
                src={require("../assets/NathanielProfilePictureFinalVersionComplete.jpg")}
                alt="ProfilePic"
              />
            </div>
          </div>

          <main>
            <div className="aboutMeContainer">
              <div className="aboutMeHeading">
                <h1>About</h1>
              </div>
              <div className="aboutMeText">
                Hey my names Nathaniel, a passionate <u>frontend developer</u>{" "}
                with experience in <b>HTML</b>, <b>CSS</b>, <b>Python</b>,
                <b> JavaScript</b>, and <b>React</b>. I specialize in creating
                <span> visually appealing</span> and<span> interactive </span>
                user interfaces that provide seamless user experiences. With a
                strong foundation in frontend technologies, I strive to deliver
                <span> high-quality</span> web applications. I have a keen eye
                for design and pay attention to detail in crafting
                <span> pixel-perfect</span> interfaces. While my current focus
                is <u> frontend development</u>, I am eager to expand my skills
                to encompass <u> backend development</u> and explore the{" "}
                <u> full stack</u>. I'm excited to contribute my creativity and
                dedication to building innovative web solutions. Let's
                collaborate and bring captivating ideas to fruition.
              </div>
            </div>

            <div className="infoCirclesContainer">
              <div className="circle1"></div>
              <div className="circle1Text">
                Nathaniel Edward <br /> Gregory Lane
              </div>

              <div className="circle2"></div>
              <div className="circle2Text">nathaniellane@keyin.com</div>

              <div className="circle3"></div>
              <div className="circle3Text">@nathaniellane02</div>

              <div className="circle4"></div>
              <div className="circle4Text">709-572-4205</div>
            </div>

            <div className="whatIDoText">What I Do</div>
            <div id="skills" className="whatIDoContainer">
              <div className="SDBox">
                <div className="SDImg">
                  <Tb3DCubeSphere className="sphereIcon" />
                </div>
                <div className="SDBoxText">Software Development</div>
              </div>

              <div className="webDevBox">
                <div className="devImg">DEV</div>
                <div className="webDevText">Web Development</div>
              </div>

              <div className="webDesignBox">
                <div className="designImg">
                  <PiCubeTransparentDuotone className="cubeIcon" />
                </div>
                <div className="webDesignText">Web Design</div>
              </div>
            </div>

            <div className="mySkillsHeading">My Skills</div>
            <div className="mySkillsContainer">
              <div>
                <div className="html">15%</div>
                <div className="htmlText">HTML</div>
              </div>

              <div>
                <div className="css">35%</div>
                <div className="cssText">CSS</div>
              </div>

              <div>
                <div className="javascript">20%</div>
                <div className="javascriptText">JAVASCRIPT</div>
              </div>

              <div>
                <div className="react">30%</div>
                <div className="reactText">REACT</div>
              </div>
            </div>

            <div id="getInTouch" className="getInTouchHeading">
              Get In Touch
              <button className="sendEmailBtn" onClick={handleEmailClick}>
                Send Me An Email
              </button>
            </div>

            <div className="getInTouchContainer">
              <form className="getInTouchForm" onSubmit={handleSubmitForm}>
                <div className="pair1">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="inputField fName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    className="inputField"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="pair2">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="inputField email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    className="inputField"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="inputField textareaField"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="submitButton">
                  Submit now
                </button>
              </form>
            </div>
            <div className="watermark">&copy;Google 2023</div>
            <div>
              <ScrollLink to="top" spy={true} smooth={true} duration={1000}>
                <div
                  className={
                    showSuccessMessage
                      ? "scrollDown goToTop goToTopHigher"
                      : "scrollDown goToTop"
                  }
                >
                  Go To Top
                </div>
              </ScrollLink>
            </div>
          </main>
          {showSuccessMessage && (
            <div className="successMessagePopup">
              Message Successfully Submitted
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

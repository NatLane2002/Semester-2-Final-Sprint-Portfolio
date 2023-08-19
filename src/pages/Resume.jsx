import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div className="page resumePage">
        <div>
          <nav className="project-page-nav">
            <Link to="/" className="nav-link marginRight">
              <span className="homeOnResumePage">Home</span>
            </Link>
          </nav>
        </div>
        <div className="resume-container">
          <h1>Nathaniel Lane</h1>
          <p>
            nathaniellane@hotmail.com | 6 Peronne Road, GFW, NL A2A 2B2 | Phone:
            709-572-4205
          </p>

          <section className="experience-section">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Sobeys GFW</h3>
              <p>21 Cromer Avenue, GFW, NL A2A 1X3</p>
              <p>July 2019 - August 2022</p>
              <p>Clerk Grocery</p>
              <ul>
                <li>
                  Managed regular lifting and packing of stock and boxes,
                  including items weighing 60+ pounds
                </li>
                <li>
                  Organized shelves, scanned and counted items, and pulled stock
                  on carts
                </li>
                <li>
                  Regularly offloaded trucks using electric pallet jack and
                  worked in freezer room
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>McDonald’s GFW</h3>
              <p>19 Cromer Avenue, GFW, NL A2A 1X3</p>
              <p>Summer 2018</p>
              <p>Crew Member</p>
              <ul>
                <li>
                  Prepared orders, operated equipment, cleaned tables, and
                  worked effectively in a fast-paced team environment
                </li>
              </ul>
            </div>
          </section>

          <section className="education-section">
            <h2>Education</h2>
            <p>Botwood Collegiate Graduate 2020</p>
            <p>32 Fernwood Drive, Botwood, NL A0H 1E0</p>
          </section>

          <section className="courses-section">
            <h2>Work Related Courses Completed</h2>
            <ul>
              <li>
                Alcohol & Drug Policy – eLearning course (Employees – Retail &
                Pharmacy)
              </li>
              <li>Shoplifting Policy</li>
              <li>
                Respectful Workspace Policy and Prevention Plan (Employees)
              </li>
              <li>Code of Business Conduct & Ethics</li>
              <li>Food Safety Orientation</li>
              <li>Introduction to Health & Safety</li>
              <li>Knife & Case Cutter Safety</li>
              <li>Store Security</li>
              <li>WHMIS</li>
              <li>Workplace Ergonomics</li>
              <li>Communication Service Essentials</li>
              <li>Robbery Prevention – Grocery</li>
              <li>De-escalation Protocols</li>
              <li>Manage my Time</li>
              <li>OSA Introduction</li>
              <li>OSA Organization Background</li>
              <li>CAO Learning Module 3: Ordering and Receiving</li>
              <li>Electric Pallet Jack Training/License</li>
            </ul>
          </section>

          <section className="hobbies-section">
            <h2>Hobbies</h2>
            <ul>
              <li>
                Faithful Member of GFW EveryBody Fitness (weight lifting &
                fitness)
              </li>
              <li>Faithful Member of GFW Antique Car Club</li>
              <li>
                Co-founded Fragmented Reality in 2021: Designed, created, and
                applied decals for teams, events, and celebrations
              </li>
              <li>
                Invest in Crypto-Trading (Bitcoin, Ethereum, Litecoin, etc.)
              </li>
            </ul>
          </section>

          <section className="skills-section">
            <h2>Programming Skills</h2>
            <ul>
              <li>Proficient in Python, JavaScript, React, HTML, and CSS</li>
              <li>Experience in creating dynamic websites</li>
            </ul>
          </section>

          <section className="references-section">
            <h2>References</h2>
            <p>Available upon request</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;

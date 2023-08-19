import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerPage">
        <nav>
            <Link className="link" to="/aboutMe">About Me</Link>
            <Link className="link" to="/skills">Skills</Link>
            <Link className="link" to="/contactMe">Contact Me</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;

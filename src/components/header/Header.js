import "./header.css";
import { Mail } from "@material-ui/icons";

function Header({ menuOpen, setmenuOpen }) {
  const setMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            <code className="my">MY</code>PORTFOLIO.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Mikheil.gibradze.1@btu.edu.ge</span>
            <a href="myworks/My_CV.pdf" download className="cv">
              CV
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={setMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { FaChessKing, FaChessQueen } from "react-icons/fa";
import { TbCircleLetterCFilled } from "react-icons/tb";
import "../styles/Navbar.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  const magnus__gif =
    "https://media1.tenor.com/m/8SRBOekk9lUAAAAd/magnus-carlsen-tears-shirt.gif";

  const [showGif, setShowGif] = useState(false);

  return (
    <>
      <div className="navbar__all">
        {/* =============================  King Icon GIF =========================== */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowGif(!showGif)}
          className="king__icon"
        >
          <h1 className="king__iconh1">
            <FaChessKing size={50} />
          </h1>
        </div>

        {/* ============================ Conditionally rendendering the gif ======================  */}
        <div className={`navbar__gif__container ${showGif ? "show" : "hide"}`}>
          {showGif && (
            <img className="magnus__gif" src={magnus__gif} alt="Magnus gif" />
          )}
        </div>

        {/* ================================= The list of the navbar =======================   */}
        <div className="navbar__list__div">
          <ul className="navbar__unorder__list">
            <li className="navbar__list">
              <Link className="navbar__links" to="/">
                <h2> Home </h2>
              </Link>
            </li>
            <li className="navbar__list">
              <a className="navbar__links" href="#">
                <h2> Videos </h2>
              </a>
            </li>
            <li className="navbar__list">
              <a className="navbar__links" href="#">
                <h2> Add moment </h2>
              </a>
            </li>
            <li className="navbar__list">
              <Link className="navbar__button" to="/signUp">
                Sign-Up
              </Link>
            </li>
            <li className="navbar__list">
              <a className="navbar__links" href="#">
                <h2> Contact </h2>
              </a>
            </li>
          </ul>
        </div>
        <h1>
          <FaChessQueen />
        </h1>
      </div>
    </>
  );
}

export default NavBar;

import { FaChessKing, FaChessQueen } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { getCookieValue } from "./CookieValue";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Navbar.css";
import axios from "axios";

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [queenclick, setQueenclick] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = getCookieValue("username");
    if (token || user){
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, [])

  const handleLogOut = async() => {
    try{
      await axios.post("http://localhost:6900/api/users/logout", {} , {withCredentials: true});
      localStorage.removeItem("token");
      setIsLoggedIn(false);
        setUsername(null);
      alert(`Logged out!`);
      navigate('/show-moment')
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <div className="navbar__all">
        {/* =============================  King Icon GIF =========================== */}
        <div
          style={{ cursor: "pointer" }}
          className="king__icon"
        >
          <h1 onClick={() => navigate("/")} className="king__iconh1">
            <FaChessKing size={45} />
          </h1> 
        </div>

        {/* ============================ Conditionally rendendering the gif ======================  */}
        <div className={`navbar__gif__container ${showGif ? "show" : "hide"}`}>
          {showGif && (
            <img className="magnus__gif" src={magnus__gif} alt="Magnus gif" />
          )}
        </div>

        {/* ================================= The list of the navbar =======================   */}
        <div className={`queen__nav__links ${queenclick ? "show" : "hide"}`}>
          <Link to="/" className="queen__link">Home</Link>
          <Link to="/show-moment" className="queen__link">Moments</Link>
          <Link to="/add-moment" className="queen__link">Add Moment</Link>
          {!isLoggedIn ? (
          <>
            <Link to="/sign-up" className="queen__link signup">
              Sign Up
            </Link>
            <Link to="/contact" className="queen__link">
              Contact
            </Link>
          </>
        ) : (
          <div style={{display: "flex", justifyContent: "space-between"}}>

            <Link style={{marginRight: "2rem"}} to="/contact" className="queen__link">
              Contact
            </Link>
          <button onClick={handleLogOut} className="queen__link logout">
            Logout
          </button>
          </div>

        )}          
        </div>
          
          <div className="queen__icon" onClick={() => setQueenclick(!queenclick)} style={{cursor: "pointer"}}>
          <h1>
            </h1> 
            <RxHamburgerMenu  size={40} />

          </div>
      </div>
    </>
  );
}

export default NavBar;

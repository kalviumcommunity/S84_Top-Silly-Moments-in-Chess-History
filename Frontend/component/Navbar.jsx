import { FaChessKing  } from "react-icons/fa";
import { TbCircleLetterCFilled } from "react-icons/tb";
import "../styles/NavBar.css";


function NavBar(){
    const magnus__gif = 'https://media1.tenor.com/m/8SRBOekk9lUAAAAd/magnus-carlsen-tears-shirt.gif';

    
    return(
        <div>
            <div className="nav__all">
                <h1 className="king__icon"> <FaChessKing size={50}/></h1>                
                <img className="magnus__gif" src={magnus__gif} alt="Magnus gif" />
                <div className="nav__list">
                    <ul className="unorder__list">
                        <li><a href="#"><h2> Home </h2></a></li>
                        <li><a href="#"><h2> Videos </h2></a></li>
                        <li><a href="#"><h2> Create Own </h2></a></li>
                        <li><button>Sign Up</button></li>
                        <li><a href="#"><h2> Contact </h2></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
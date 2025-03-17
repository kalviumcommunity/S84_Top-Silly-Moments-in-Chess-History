import { FaChessKing } from "react-icons/fa";
import "../src/index.css";


function NavBar(){
    
    return(
        <div >
            <h1 className="king__icon"> <FaChessKing size={50}/> </h1>
            <ul>
                <li><a href="#"> <h1>Home </h1> </a></li>    
            </ul>    
        </div>
    )
}

export default NavBar;
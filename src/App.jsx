import LandingPage from "./LandingPage"
import Chessmoment from "../component/Chessmoment"
import HvsM from '../assests/hikaru vs magnus.jpg'
import NavBar from "../component/Navbar";
import "tailwindcss";


function App() {

  const dummyData = {
    move: "Qg7# - The Blunder of the Century",
    players: "Magnus Carlsen vs. Hikaru Nakamura",
    description: "Hikaru hung his queen in a winning position and lost instantly!",
    image: HvsM,
  };

  return (
    <>
      <NavBar/>
      <LandingPage/>
      <Chessmoment {...dummyData} />
    </>
  )
}

export default App

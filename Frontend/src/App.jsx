import LandingPage from "./LandingPage"
import Chessmoment from "../component/Chessmoment"
import HvsM from '../assests/hikaru vs magnus.jpg'
import NavBar from "../component/Navbar";
import ShowMoment from "../component/ShowMoment";

function App() {

  const dummyData = {
    move: "Qg7# - The Blunder of the Century",
    players: "Magnus Carlsen vs. Hikaru Nakamura",
    description: "Hikaru hung his queen in a winning position and lost instantly!",
    image: HvsM,
  };
  const dummyData1 = {
    move: "Qg7# - The Blunder of the Century",
    players: "Magnus Carlsen vs. Hikaru Nakamura",
    description: "Hikaru hung his queen in a winning position and lost instantly!",
    image: HvsM,
  };
  console.log(dummyData1)

  return (
    <>
      <NavBar/>
      <LandingPage/>
      <ShowMoment/>
      <div className="chessmoment__parent"> 
      <Chessmoment {...dummyData} />
      <Chessmoment {...dummyData1} />
      <Chessmoment {...dummyData1} />
      </div>
    </>
  )
}

export default App

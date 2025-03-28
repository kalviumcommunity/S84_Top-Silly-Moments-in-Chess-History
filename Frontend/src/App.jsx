import LandingPage from "../components/LandingPage"
import Chessmoment from "../components/Chessmoment"
import HvsM from '../assets/hikaru vs magnus.jpg'
import NavBar from "../components/Navbar";
import ShowMoment from "../components/ShowMoment";
import AddMoment from "../components/AddMoment";

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
      <AddMoment />
    </>
  )
}

export default App

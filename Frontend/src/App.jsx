import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage"
import Chessmoment from "../components/Chessmoment"
import HvsM from '../assets/hikaru vs magnus.jpg'
import NavBar from "../components/Navbar";
import ShowMoment from "../components/ShowMoment";
import AddMoment from "../components/AddMoment";
import UpdateMoment from "../components/UpdateMoment";

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

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={
        <>
          <LandingPage />
          <div className="chessmoment__parent">
            <Chessmoment {...dummyData} />
            <Chessmoment {...dummyData1} />
          </div>
          <AddMoment />
          <ShowMoment />
        </>
      } />
      <Route path="/update/:id" element={<UpdateMoment />} />
    </Routes>
  </Router>
  )
}

export default App

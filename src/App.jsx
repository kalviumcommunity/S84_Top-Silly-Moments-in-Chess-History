import LandingPage from "../component/LandingPage"
import Navbar from "../component/Navbar"
import Chessmoment from "../component/Chessmoment"

function App() {

  const dummyData = {
    move: "Qg7# - The Blunder of the Century",
    players: "Magnus Carlsen vs. Hikaru Nakamura",
    description: "Hikaru hung his queen in a winning position and lost instantly!",
    image: "https://images.chesscomfiles.com/uploads/v1/blog/424344.ee6527ec.668x375o.ea49df20e251@2x.jpeg",
  }

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Chessmoment {...dummyData} />
    </>
  )
}

export default App

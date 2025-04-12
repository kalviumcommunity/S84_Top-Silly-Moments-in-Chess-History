import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Chessmoment from "../components/Chessmoment";
import HvsM from "../assets/hikaru vs magnus.jpg";
import NavBar from "../components/Navbar";
import ShowMoment from "../components/ShowMoment";
import AddMoment from "../components/AddMoment";
import LoginUser from "../pages/LoginUser";
import SignUpUser from "../pages/SignUpUser";
import UpdateMoment from "../components/UpdateMoment";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Loader from "../pages/Loader";
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  const dummyData = {
    move: "Qg7# - The Blunder of the Century",
    players: "Magnus Carlsen vs. Hikaru Nakamura",
    description:
      "Hikaru hung his queen in a winning position and lost instantly!",
    image: HvsM,
  };

  if (isLoading) return <Loader/>

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/update/:id" element={<UpdateMoment />} />
        <Route path="/log-in" element={<LoginUser />} />
        <Route path="/sign-up" element={<SignUpUser />} />
        <Route path="/add-moment" element={<AddMoment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/show-moment" element={<ShowMoment />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

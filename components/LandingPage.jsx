import InteractiveChessboard from "./InteractiveChessBoard";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing__page">
      <h1>Top Silly Moments in Chess History</h1>
      <p>
        <b>"The Funniest Moments in Chess History!"</b>
        <br />
        Welcome to a collection of the most hilarious, unexpected,
        and downright silly moments in chess history!
        <br />
        Get ready to <b>laugh</b> at the <b>top silly moments in chess!</b>
      </p>
      <h3>
        Here you will find the top silly moments that have ever happened in all
        of chess history.
      </h3>
      <InteractiveChessboard/>

    </div>
  );
}

export default LandingPage;

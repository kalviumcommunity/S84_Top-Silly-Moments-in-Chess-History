import React from "react"
import magnus__gif from '../assets/tenor.gif'

function Loader(){

    return(
        <div style={styles.container}>
            <img src={magnus__gif} alt="Loading..." style={styles.gif}/>
            <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Be Patient!</h2>
        </div>
    )
}
const styles = {
    container: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: "5px",
      borderRadius: "10px",
    },
    gif: {
      width: "500px",
      height: "500px",
    },
  };

export default Loader
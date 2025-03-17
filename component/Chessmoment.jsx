
function Chessmoment({ image, move, player, description}){

    return(
        <>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
            <img style={{width: "400px"}} src={image} alt="Chess moment" />
        </div>
            <h2> {move} </h2>
            <h4> {player} </h4>
            <p> {description} </p>
        </>
    )
}

export default Chessmoment
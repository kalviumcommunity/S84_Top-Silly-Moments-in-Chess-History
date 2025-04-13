    import '../styles/Chessmoment.css'

    function Chessmoment({ image, move, player, description}){

        return(
            <div className='chessmoment__parent'>
            <div className="Chessmoment__box">
                <img style={{width: "400px"}} src={image} alt="Chess moment" />
                <h2 className='chessmoment__content'> {move} </h2>
                <h5 className='chessmoment__content'> {player} </h5>
                <p className='chessmoment__content'> {description} </p>
            </div>
            </div>
        )
    }

    export default Chessmoment
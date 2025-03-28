import { useState, useEffect } from "react";

function ShowMoment(){

    const [moment, setMoment] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6900/home/moments")
        .then((res) => res.json())
        .then((data) => setMoment(data))
        .catch((err) => console.log(err))
    }, []); 


    return(
        <div className="Show__moment">
                {
                    moment.map((moment) => (
                        <ul>
                        <li key={moment._id}> {moment.title} </li>
                        <li> {moment.description} </li>
                        <li> {moment.players} </li>
                        <li> {moment.likes} </li>
                        </ul>
                    ))
                }
        </div>
    );
}

export default ShowMoment
    import { useState, useEffect } from "react";
    import '../styles/AddMoment.css'

    const AddMoment = () => {

        const [moments, setMoments] = useState([]);
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [imageUrl, setImageUrl] = useState("")
        const [videoUrl, setVideoUrl] = useState("")

        useEffect(() => {
            fetch("http://localhost:6900/api/moments")
            .then((res) => res.json())
            .then((data) => setMoments(data))
            .catch((err) => console.log(err))
        }, [])

        const handleSubmit = async (e) =>{
            e.preventDefault();

            const newMoment = {title, description , imageUrl, videoUrl};

            try {
                const response = await fetch("http://localhost:6900/api/moments", {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(newMoment),
                });
            
                if (!response.ok) throw new Error("Failed to add moment");
            
                const responseData = await response.json();
            
                setMoments([...moments, responseData]);
                setTitle("");
                setDescription("");
                setImageUrl("");
                setVideoUrl("");
              } catch (err) {
                console.error("Error:", err);
              }
            };


        return(
            <div className="AddMoment__container">
                <h2>Add a Silly Chess Moment</h2>
                <form className="AddMoment__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    <input type="text" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required/>
                    <input type="text" placeholder="Video Url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required/>
                    <button className="add__button">Add moment</button>
                </form>

                {/* <h3>List of other Silly Moments</h3> */}
                {/* <ul className="AddMoment__list">
                    {
                        moments.map((moment) => (
                            <li key={moment._id} className="AddMoment__item">
                                <h4>{moment.title}</h4>
                                <p>{moment.description}</p>
                                <img src={moment.imageUrl} width="200" />
                                <video src={moment.videoUrl}></video>
                            </li>
                        ))
                    }
                </ul> */}

            </div>
        )
    }

    export default AddMoment;
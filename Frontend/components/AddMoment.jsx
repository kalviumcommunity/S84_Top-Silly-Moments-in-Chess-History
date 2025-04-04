    import { useState, useEffect } from "react";
    import '../styles/AddMoment.css'

    const AddMoment = () => {

        const [moments, setMoments] = useState([]);
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        const [videoUrl, setVideoUrl] = useState("");
        const [errMsg, setErrMsg] = useState("");

        useEffect(() => {
            fetch("http://localhost:6900/api/moments")
            .then((res) => res.json())
            .then((data) => setMoments(data))
            .catch((err) => console.log(err))
        }, [])

        const handleSubmit = async (e) =>{
            e.preventDefault();
            setErrMsg("");

            const newMoment = {title, description , imageUrl, videoUrl};

            try {
                const response = await fetch("http://localhost:6900/api/moments", {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(newMoment),
                });
            
                
                const responseData = await response.json();
                if (!response.ok){
                    setErrMsg(responseData.message || "Failed to add moment")
                    return;
                }
            
                setMoments([...moments, responseData]);
                setTitle("");
                setDescription("");
                setImageUrl("");
                setVideoUrl("");
              } catch (err) {
                console.error("Error:", err);
                setErrMsg(`Something went wrong`)
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
                {errMsg && <p className="AddMoment__error">{errMsg}</p>}
            </div>
        )
    }

    export default AddMoment;
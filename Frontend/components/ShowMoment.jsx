import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ShowMoment.css";

function ShowMoment() {
  const [moments, setMoment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoment();
  }, [])

  const fetchMoment = () => {
    axios
      .get("http://localhost:6900/api/moments")
      .then((res) => setMoment(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async(id) => {
    const confirmDelete = window.confirm("Are you really sure you want to delete this moment? 🤨")
    if (!confirmDelete) return;
    try{
      await axios.delete(`http://localhost:6900/api/moments/${id}`)
      fetchMoment();
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="Show__moment">
      <h2 className="ShowMoment__h2">Some of funny Chess Moment</h2>
      <br />
      <ul className="ShowMoment__list">
        {moments.map((moment) => (
          <li key={moment._id} className="ShowMoment__item">
            <img src={moment.imageUrl} width="200" alt="" />
            <h3 className="ShowMoment__h3">{moment.title}</h3>
            <p className="ShowMoment__p">{moment.description}</p>
            {moment.videoUrl && moment.videoUrl.trim() !== "" ? (
              moment.videoUrl.includes("youtube.com") ||
              moment.videoUrl.includes("youtu.be") ? (
                <iframe
                  className="ShowMoment__video"
                  width="400"
                  height="250"
                  src={moment.videoUrl
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "www.youtube.com/embed/")} // Convert to embed format
                  style={{ border: "none" }}
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              ) : (
                <video
                  className="ShowMoment__video"
                  width="400"
                  height="250"
                  controls
                >
                  <source src={moment.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <p className="ShowMoment__no-video">No video available</p>
            )}
            {console.log(
              "Video URL:",
              moment.videoUrl || "No video URL provided"
            )}
            <button onClick={() => navigate(`/update/${moment._id}`)}>Edit moment</button>
            <button onClick={() => handleDelete(moment._id)}>Delete Moment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowMoment;

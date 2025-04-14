import { useState, useEffect } from "react";
import "../styles/AddMoment.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMoment = () => {
  const navigate = useNavigate();
  const [moments, setMoments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios
      .get("https://top-silly-moments-in-chess.onrender.com/api/moments")
      .then((res) => setMoments(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://top-silly-moments-in-chess.onrender.com/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    if (!selectedUser) {
        setErrMsg("Please select a user.");
        return;
      }

    const newMoment = { title, description, imageUrl, videoUrl};
    const token = localStorage.getItem("token");

    if (!token) {
      setErrMsg(`You need to signup or login to continue!`);
      return;
    }

    try {
      const response = await axios.post(
        "https://top-silly-moments-in-chess.onrender.com/api/moments",
        newMoment,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      const responseData = response.data;

      setMoments([...moments, responseData]);
      setTitle("");
      setDescription("");
      setImageUrl("");
      setVideoUrl("");
      setSelectedUser(""); 
      alert("Added a moment successfully");
      navigate("/show-moment");
    } catch (err) {
      console.error("Error:", err);
      setErrMsg(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="AddMoment__container">
      <h2>Add a Silly Chess Moment</h2>
      <form className="AddMoment__form" onSubmit={handleSubmit}>
        <input
          className="addMoment__focus"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="addMoment__focus"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className="addMoment__focus"
          type="text"
          placeholder="Image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          className="addMoment__focus"
          type="text"
          placeholder="Video Url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <select className="addMoment__focus"
          required>
          <option className="addMoment__focus" value="">
            Select User
          </option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <button className="add__button">Add moment</button>
      </form>
      {errMsg && <p className="AddMoment__error">{errMsg}</p>}
    </div>
  );
};

export default AddMoment;

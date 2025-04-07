import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/UpdateMoment.css";

const UpdateMoment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    videoUrl: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:6900/api/moments/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:6900/api/moments/${id}`, formData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="updateMoment__container">
      <h2 className="updateMoment__heading">Edit Chess moment</h2>
      {formData.title ? (
        <form className="updateMoment__form" onSubmit={handleSubmit}>
          <input
            className="updateMoment__input"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="updateMoment__textarea"
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            className="updateMoment__input"
            type="text"
            placeholder="Image Url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <input
            className="updateMoment__input"
            type="text"
            placeholder="Video Url"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            required
          />
          <button className="updateMoment__button" type="submit">
            Update
          </button>
        </form>
      ) : (
        <p className="updateMoment__loadingText">Loading moment data...</p>
      )}
    </div>
  );
};
export default UpdateMoment;

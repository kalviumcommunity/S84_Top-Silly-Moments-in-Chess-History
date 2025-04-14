import { useState } from "react";
import axios from "axios";
import './AdminDashboard.css'


const AdminDashboard = () => {
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token")
  // console.log(token);
  const makeAdmin = async () => {
    try{
      await axios.put("https://top-silly-moments-in-chess.onrender.com/api/users/make-admin", { email }, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}});
      alert(`${email} is now admin`);

    }catch(err){
      console.log(err);
    }
  };

  const removeAdmin = async () => {
    await axios.put("https://top-silly-moments-in-chess.onrender.com/api/users/remove-admin", { email }, { withCredentials: true });
    alert(`${email} is no longer admin`);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={makeAdmin}>Make Admin</button>
      <button onClick={removeAdmin}>Remove Admin</button>
    </div>
  );
};

export default AdminDashboard;

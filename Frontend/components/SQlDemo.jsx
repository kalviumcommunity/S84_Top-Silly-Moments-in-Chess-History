import { useEffect, useState } from "react";
import axios from "axios";

const SQlRoute = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6900/sql/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelectUser = (e) => {
    const userId = e.target.value;
    selectedUser(userId);

    axios
      .get(`http://localhost:6900/sql/users/${userId}`)
      .then((res) => setMoments(res.data))
      .catch((err) => console.log(err));
  };

return (
    <div>
        <h2>Select a user to view their SQL-created chess moments</h2>

        <select value={selectedUser} onChange={handleSelectUser}>
            <option value="">-- Select a User --</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>

        <div>
            {moments.length > 0
                ? moments.map((moment) => (
                        <div key={moment.id}>
                            <h3>{moment.title}</h3>
                            <p>{moment.description}</p>
                            {moment.image_url && (
                                <img src={moment.image_url} alt={moment.title} />
                            )}
                        </div>
                    ))
                : selectedUser && <p>No moments found for this user.</p>}
        </div>
    </div>
);
};

export default SQlRoute;

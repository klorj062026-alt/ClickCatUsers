import { useState } from "react";
import "./users.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h2>USERS</h2>
      <div className="input-felt">
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => setUsers([...users, { username, email }])}>
          Add User
        </button>
      </div>
      {users.map((user, index) => (
        <p className="user-card" key={index}>
          {user.username} - {user.email}
        </p>
      ))}
    </>
  );
}

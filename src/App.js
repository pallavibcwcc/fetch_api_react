import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>user list:</h1>
      <ul>
        {users.map((user) => {
          console.log(user);
          return (
            <li key={user.id}>
              <a>{user.username}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

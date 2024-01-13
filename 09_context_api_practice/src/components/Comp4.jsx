import React, { useContext } from "react";
import { useState } from "react";
import MyContext from "../context/MyContext";
function Comp4() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(MyContext);
  const { setUser } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div style={{ border: "3px solid orange", margin: "10px 10px 10px 10px" }}>
      <h2>Component 4</h2>
      <h3>
        Global User's name:{user.username} and password :{user.password}
      </h3>
      <h3>
        Local user's name:{username} and password:{password}
      </h3>

      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="submit" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}
export default Comp4;

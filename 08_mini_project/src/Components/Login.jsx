import React from "react";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import { useContext } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    //submit button has its default behaviour
    e.preventDefault();
    setUser({ username, password });
  };
  return (
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
  );
}

export default Login;

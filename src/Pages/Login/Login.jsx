import React, { useState } from "react";
import axios from "axios";
import "./login.css";
// import Register from "../Register/Register"

function Login({updateUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/users/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    // Save token in local storage and refresh page
    localStorage.setItem("token", (response.data));
    window.location = "/Home";

   updateUser();
  }

  return (
    <form className="box" onSubmit={handleSubmit} method="POST">
      <h1>Fit Login</h1>
      <input
        type="text"
        name=""
        placeholder="Enter Username"
        id="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" name="" value="Login"></input>
      <a className="Register" href="./Register"> Register New user</a>
    </form>
  );
}
export default Login;

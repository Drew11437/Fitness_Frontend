import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login(props) {
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
    localStorage.setItem("token", response.data);
    window.location = "/";
   }

   
  return (
    // <html lan="en" and dir="Itr">
    //   <head>
    //     <meta charset="utf-8"/>
    //       <titile> Fit Friendly Login Form</titile>
    //       <link rel="stylesheet" href="login.css"/>

    //       </head>
    //       <body>
            <form class="box" onSubmit={handleSubmit}e method="POST">
            <h1>
              Fit Login
            </h1>
              <input type="text" name="" placeholder="Enter Username" id="username"
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input type="password" name="" placeholder="Enter password" id="password" 
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" name="" value="Login" >
          </input>


        </form>

    //   </body>


    // </html>
  )
 }
export default Login;

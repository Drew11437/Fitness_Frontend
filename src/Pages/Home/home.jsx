// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Like from "../../components/Likes/Likes"
// import { LikeButton } from "@lyket/react";



function Home() {
  const [userProfile, setUserProfile] = useState();
  const [workout, setWorkout,LogId] = useState("");
  const [meal, setmeal] = useState("");
  const [like, setlike] = useState(0);
  const [newLog, setNewLog,data,setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerLog = {
      workout: workout,
      meal: meal,
      like: like,
    };
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .post("http://localhost:5000/api/Logs/", registerLog, configObject)
      .then((res) => setUserProfile(res.data));
  };

  const getCurrentUser = async () => {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .get(`http://localhost:5000/api/users/current`, configObject)
      .then((res) => setUserProfile(res.data));
  };


  useEffect(() => {
    getCurrentUser();
  }, [newLog]);




  return (
    <div>
      <h1> {userProfile && userProfile.name}</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
    <h5 class="card-title">Meal Log</h5>
      <input type="file" id="image_input" accept="image/png, image/jpg"/>
      <div id="display_image"></div>
      <div class="card-body">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <input type="text" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;

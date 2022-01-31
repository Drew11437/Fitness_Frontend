// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import scheduler from "../../Schedule/schedule";
// import { LikeButton } from "@lyket/react";



  function Home() {
  const [userProfile, setUserProfile] = useState();
  const [desc, setDesc,LogId] = useState("");
  const [meal, setmeal] = useState("");
  const [file, setFile] = useState(0);
  const [newLog, setNewLog,data,setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerLog = {
      desc: desc,
      meal: meal,
      file: setFile,
    };    const jwt = localStorage.getItem("token");
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
  const uploadImage = async () => {
    const file = localStorage[file] ("Photo");
    let configObject = {
      headers: {
        "file": file,
      },
    };
    await axios
    .post(`http://localhost:5000/api/images/`, configObject)
    .then((res) => setFile(res.data));
  };


  useEffect(() => {
    getCurrentUser();
  }, [newLog]);




  return (
             
    // <h1>Hello</h1>
      
     <div>
    

    <section id="features">
      <div class="flex container">
        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/feature-1.jpg" alt="Exercise Class" />
          <div class="feature-info-container">
            <div class="icon">
              <img src="https://onclickwebdesign.com/wp-content/uploads/icon-1.png" alt="Star Trophy Icon" />
            </div>
            <h4>Amazing Setting</h4>
            <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.</p>
          </div>
        </div>

        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/feature-2.jpg" alt="Man doing dumbbell rows" />
          <div class="feature-info-container">
            <div class="icon">
              <img src="https://onclickwebdesign.com/wp-content/uploads/icon-2.png" alt="Dumbbell Icon" />
            </div>
            <h4>Best Trainers</h4>
            <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.</p>
          </div>
        </div>

        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/feature-3.jpg" alt="Woman doing leg press" />
          <div class="feature-info-container">
            <div class="icon">
              <img src="https://onclickwebdesign.com/wp-content/uploads/icon-3.png" alt="Smoothie Icon" />
            </div>
            <h4>Diet Plans</h4>
            <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <h3>Services</h3>
      <div class="flex container">
        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-1.png" alt="Basketball Icon" />
          <h4>Pilates</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.</p>
        </div>

        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-2.png" alt="Bench Press Icon" />
          <h4>Free Lifting</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.</p>
        </div>

        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-3.png" alt="Stopwatch Icon" />
          <h4>Yoga</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.</p>
        </div>

        <div class="box">
          <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-4.png" alt="Mp3 Player Icon" />
          <h4>Spinning</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.</p>
        </div>
      </div>

      <button>See All Services</button>
    </section>

    <section id="trainers">
      <h5>The Best</h5>
      <h3>Trainers</h3>
      <div class="container">
        <div id="trainers-slider">
          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-1.jpg" alt="Rachel Smith Personal Trainer" />
            <h4>Rachel Smith</h4>
            <p>Aerobics Instructor</p>
          </div>

          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-2.jpg" alt="Nick Andros Personal Trainer" />
            <h4>Nick Andros</h4>
            <p>Pilates Instructor</p>
          </div>

          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-3.jpg" alt="Larry Underwood Personal Trainer" />
            <h4>Larry Underwood</h4>
            <p>Strength Training Coach</p>
          </div>

          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-1.jpg" alt="Rachel Smith Personal Trainer" />
            <h4>Rachel Smith</h4>
            <p>Aerobics Instructor</p>
          </div>

          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-2.jpg" alt="Nick Andros Personal Trainer" />
            <h4>Nick Andros</h4>
            <p>Pilates Instructor</p>
          </div>

          <div class="trainer-slider-item">
            <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-3.jpg" alt="Larry Underwood Personal Trainer" />
            <h4>Larry Underwood</h4>
            <p>Strength Training Coach</p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="schedule-services">
      <div class="flex container">
        <div class="upcoming-classes-box">
          <strong>NEXT</strong>
          <h4>Upcoming Classes</h4>
          <table>
            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Gym Fitness</td>
              <td>11:00 - 12:00</td>
            </tr>

            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Pilates</td>
              <td>12:00 - 1:00</td>
            </tr>

            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Spinning</td>
              <td>1:00 - 2:00</td>
            </tr>

            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Yoga</td>
              <td>2:00 - 3:00</td>
            </tr>

            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Zumba</td>
              <td>3:00 - 4:00</td>
            </tr>

            <tr>
              <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
              <td>Cardio Kickbox</td>
              <td>4:00 - 5:00</td>
            </tr>
          </table>
        </div>

        <div class="membership-cards-box">
          <div class="inner-container">
            <strong>NEXT</strong>
            <h4>Membership Deals</h4>
            <h2>25% <span>Discount</span></h2>
          </div>
        </div>

        <div class="personal-trainer-box">
          <strong>BECOME A</strong>
          <h4>Personal Trainer</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.</p>
          <button>Sign Up Now</button>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-container">
        <div id="footer-logo" class="top-gym-logo">
          <a href="#">Top<br/>Gym</a>
        </div>

        <nav>
          <ul>
            <li><a href="./Home">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div class="mailing-list">
          <input type="text" placeholder="YOUR EMAIL" />
          <button>SIGN UP</button>
        </div>

        <ul class="social-icons">
          <li><a href="#"><span class="fab fa-pinterest"></span></a></li>
          <li><a href="#"><span class="fab fa-facebook"></span></a></li>
          <li><a href="#"><span class="fab fa-twitter"></span></a></li>
          <li><a href="#"><span class="fab fa-youtube"></span></a></li>
          <li><a href="#"><span class="fab fa-behance"></span></a></li>
        </ul>

        <img src="https://onclickwebdesign.com/wp-content/uploads/footer-icon.png" class="bicep" alt="Bicep flex icon" />

        <small>
          Copyright &copy;2019 All rights reserved | This template is made with <span class="fa fa-heart"></span> by <a href="https://colorlib.com">Colorlib</a>
        </small>
      </div>
    </footer>

    <div id="search-container">
      <span id="search-container-hide" class="fa fa-times"></span>
      <h3>Search</h3>
      <div class="search-container-input">
        <input type="text" name="search" placeholder="Search this site" />
        <button>Search</button>
      </div>
    </div>

    <div id="video-frame">
      <span id="video-frame-hide" class="fa fa-times"></span>
      <div class="video-frame-container">
        <div class="video-frame-scaler">
            <iframe id="embed-video" src="https://www.youtube.com/embed/WCBEammPsu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>
        )}

export default Home;
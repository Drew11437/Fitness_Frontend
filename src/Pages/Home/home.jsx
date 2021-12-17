// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Like from "../../components/Likes/Likes"



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

  //    async function likePost(){
//      const jwt = localStorage.getItem("token");
//      let config ={
//        headers:{
//          "x-auth-token": jwt,
//        },
//      };
//     await axios
//     .put("http://localhost:5000/api/like/",{like: postId.like + 1}, config)
//     .then((res) => setlike(res.data));
//     const newData = data.map(post =>{
//       if(post._id==like._id){
//         return setlike
//       }else{
//         return post
//       }
//     })
//     setData(newData)
// }


// useEffect(() => {
//   getCurrentUser();
// }, [newLog]);

// const likePost = (i) =>{
//   const jwt = localStorage.getItem("token");
//     fetch('/like', {
//       method:"put",
//       headers:{
//         "Content-Type":"application/json",
//         "Authorization":"Bearer "+localStorage.getItem("jwt")
//       },
//       body:JSON.stringify({
//         postId: i
//       })
//     }).then(res=>res.json())
//     .then(setlike=>{
      
//       const newData = data.map(post =>{
//         if(post._id==setlike._id){
//           return setlike
//         }else{
//           return post
//         }
//       })
//       setData(newData)
//     }) 
// }


  return (
    <div>
      <h1> {userProfile && userProfile.name}</h1>
      <div className="Comment">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="card">
            <div className="card-header">Post</div>
            <div class="card-body">
              <blockquote className="blockquote mb-0">
                <div className="form-group" size="lg" controlId="name">
                  <label className="form-label">
                    post
                    <input
                      autoFocus
                      type="workout"
                      value={workout}
                      onChange={(e) => setWorkout(e.target.value)}
                    />
                    <label>
                    Image
                    <div>
                    post
                    <input
                      autoFocus
                      type="file"
                      value={meal}
                      onChange={(e) => setmeal(e.target.value)}
                    />
                      <img src={setmeal}/>
                    </div>
                    </label>
                    <button type="submit">post</button>
                    
                  </label>
                </div>
                
              </blockquote>
            </div>
          </div>
        </form>
      </div>
      {/* Pascal helped with the optional chaining */}
      <ul>
        {userProfile &&
          userProfile.posts?.map((post, i) => (
            <>
              <div className="card w-75">
                <div className="cardcomment" >
                <li key={i}>Comment:  {post.workout}</li>
              <ul>
                  <li key={i}>Image{post.meal}</li>
              </ul>
              <ul>
                <LikeButton onclick={likePost(post.i)}/>
                <h6>{log.like.lenght}likes</h6>
              </ul>
              <ul>
                <li key={i}>{log.createdAt}</li>
              </ul>
                </div>
              </div>
            </>
          ))}
      </ul>
      
    </div>
  );
}
export default Home;

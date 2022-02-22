import "./schedule.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Scheduler(props) {
  const [time, setTime] = useState("");
  const [appointmentDate, setDate] = useState("");
  const [email, setemail] = useState("");

  async function handleSubmit(event) {
    let user = JSON.parse(localStorage.getItem ('token'));
    const token = user.data.id;
    const api = "http://localhost:5000/api/appointments/"
    //stop default behaviour
    event.preventDefault();
   try{ 
    let response = await axios.post(api,{Headers:{"Authorization" :`Bearer ${token} `,
      email: email,
      appointmentDate: appointmentDate,
      time: time
    }})
    .then(response => { 
      console.log(response);
      this.setState({
        items: response.data,
        isLoaded : true,
        redirectToRefferer: false
      })
    })
    // Save token in local storage and refresh page
  }catch{
   setDate({})
   }

  }


  // const token = req.header("x-auth-token");





  return(
    <div class= "booking-form-box">
      <form onSubmit={handleSubmit}> 
      <div class="radio-btn">
      <input type="radio" class="btn" name="check" checked= "checked"/><span>Hour</span>
      <input type="radio" class="btn" name="check"/><span>30min</span>
      <input type="radio" class="btn" name="check"/><span>Consultation</span>
      </div>

      <div class="booking-form">
        <label>Fit Booking</label>
        <input type="time" class="form-control" placeholder="Time"  value={time} onChange={(e) => setTime(e.target.value)}/>
        <label>Date</label>
        <input type="date" class="form-control select-date" placeholder="0/0/20XX" value={appointmentDate} onChange={(e) => setDate(e.target.value)}/>
        <label> Email</label> 
        <input type="email" class="form-control" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        <button type="submit" value="Sumbit" onSubmit={handleSubmit}> Submit</button>
         </div>
      </form>

    </div>







  )
}
export default Scheduler;












































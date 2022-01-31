import "./schedule.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Scheduler(props) {
  const [time, setTime] = useState("");
  const [appointmentDate, setDate] = useState("");
  const [email, setemail] = useState("");

  async function handleSubmit(event) {
    //stop default behaviour
   try{ event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/appointments/",{header:{Authorization:"Bearer" + localStorage.getItem ('token'),
      email: email,
      appointmentDate: appointmentDate,
      time: time,
    }});
    console.log(response.data);
    // Save token in local storage and refresh page
    setDate(response.data);
  }catch{
   setDate({})
   }

  }


  // const token = req.header("x-auth-token");





  return(
    <div className= "booking-form-box">
      <form onSubmit={handleSubmit}> 
      <div className="radio-btn">
      <input type="radio" className="btn" name="check" checked= "checked"/><span>Hour</span>
      <input type="radio" className="btn" name="check"/><span>30min</span>
      <input type="radio" className="btn" name="check"/><span>Consultation</span>
      </div>

      <div className="booking-form">
        <label>Fit Booking</label>
        <input type="time" className="form-control" placeholder="Time"  value={time} onChange={(e) => setTime(e.target.value)}/>
        <label>Date</label>
        <input type="date" className="form-control select-date" placeholder="0/0/20XX" value={appointmentDate} onChange={(e) => setDate(e.target.value)}/>
        <label> Email</label> 
        <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        <button type="submit" value="Sumbit"> Submit</button>
         </div>
      </form>

    </div>







  )
}
export default Scheduler;












































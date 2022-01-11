import "./schedule.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

function scheduler({user}){












  return(
    <div class= "booking-form-box">
      <div class="radio-btn">
      <input type="radio" class="btn" name="check" checked= "checked"/><span>Hour</span>
      <input type="radio" class="btn" name="check"/><span>30min</span>
      <input type="radio" class="btn" name="check"/><span>Consultation</span>
      </div>

      <div class="booking-form">
        <label>Fit Booking</label>
        <input type="text" class="form-control" placeholder="Time"/>
        <label>Date</label>
        <input type="text" class="form-control" placeholder="0/0/20XX"/>
        <label> Name</label>
        <input type="text" class="form-control" placeholder="Name"/>
         </div>
    </div>









  )
}
export default scheduler;












































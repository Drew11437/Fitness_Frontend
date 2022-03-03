import "./Log.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Log(){
  


  return(
    <div>
          <div class="dashboard">
          <h2>Workout log</h2>

          <p class="box-title">Insert an item</p>
          <div class="inputs">
              <form id="frm" method="post">
                  <label for="time">Time spent </label>
                  <input type="number" name="time" value="0" min="1" class="time-input data" required/>

                  <label for="activity" class="label-activity">Activity</label>
                  <select name="activity" class="data">
                      <option value="Bike">Bike</option>
                      <option value="Run">Run</option>
                      <option value="Swimming">Swimming</option>
                    </select>

                  <label for="datepicker" class="label-date">Date</label>
                  <input type="date" name="datepicker" class="data" required/>

                  <button name="add-btn" class="btn-add" id="add-btn">Add</button>
              </form>
          </div>

          <hr/>
          <div class="table">
              <table id="workout-table">
                  <tr>
                      <th class="table-headers">Time <span class="arrow-up"></span> <span class="arrow-down"></span></th>
                      <th class="table-headers">Activity <span class="arrow-up"></span> <span class="arrow-down"></span></th>
                      <th class="table-headers">Date<span class="arrow-up"></span> <span class="arrow-down"></span></th>
                      <th></th>
                  </tr>

              </table>
          </div>

          <h3 id="sum"></h3>
      </div>
    </div>
    
  );
}

export default Log;
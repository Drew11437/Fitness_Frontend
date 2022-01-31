import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./TopBar.css";
import { ReactComponent as Logo } from "./logo.svg";


function TopBar({user}){

    return( 
            <div>
                {user}
            <nav>
                <label class="logo"> Fit Friendly</label>
                <ul>
                    <li><a  class="active" href="./Home">Home</a>
                    </li>
                    <li><a href="./Schedule">Schedule</a>
                    </li>
                    <li><a href="./timer">Timer</a>
                    </li>
                    <li><a href="./WorkoutLog">Workout Log</a>
                    </li>
                    <li><a href="./LogOut">Logout</a>
                    </li>
                </ul>
                <label id="icon">
                    <i class="fas fa-bars"></i>
                </label>
            </nav>
            </div>
    )
}

export default  TopBar;


import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./TopBar.css";
import { ReactComponent as Logo } from "./logo.svg";

function TopBar({ user, logout }) {
  const showLoginLogout = (user) => {
    console.log(
      "login logout button show function caLled, is user present",
      !!user
    );

    let result = (
      <>
        <li>
          <a href="./Schedule">Schedule</a>
        </li>
        <li>
          <a href="./timer">Timer</a>
        </li>
        <li>
          <a href="./Log">Workout Log</a>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </>
    );

    if (!user) {
      result = "";
    }
    return result;
  };
  return (
    <div>
      <nav>
        <label className="logo"> Fit Friendly</label>

        <ul>
          <li>
            <a className="active" href="./Home">
              Home
            </a>
          </li>

          {showLoginLogout(user)}
        </ul>

        <label id="icon">
          <i className="fas fa-bars"></i>
        </label>
      </nav>
    </div>
  );
}

export default TopBar;

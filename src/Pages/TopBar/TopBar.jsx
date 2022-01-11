import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopBar.css";
import { ReactComponent as Logo } from "./logo.svg";


function TopBar({user}){
    return( 
            
        <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
                Fit Friendly 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/WorkoutLog">Workout Log</NavDropdown.Item>
                        <NavDropdown.Item href="/LogOut">
                        Logout
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/payment">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/timer">Timer</Nav.Link>
                    <Nav.Link eventKey={2} href="/payment">
                        payment
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </React.Fragment>

    )
}

export default  TopBar;


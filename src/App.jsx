// import Profile from "./Pages/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import TopBar from "./Pages/TopBar/TopBar";
import LogOut from "./Pages/LogOut/Logout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/home";
import Register from "./Pages/Register/Register";
import jwt_decode from "jwt-decode";
import Schedule from "./Schedule/schedule";
import Timer from "./timer/timer";
import log from "./Log/Log.jsx";

class App extends Component {
  state = {
    user: "",
  };
  // constructor(props) {
  //   super(props);
  //   const jwt = localStorage.getItem("token");
  //   try {
  //     const decodedUser = jwt_decode(jwt);
  //     this.state = {
  //       user: decodedUser,
  //     };
  //   } catch {
  //     this.state = {
  //       user: null,
  //     };
  //   }
  // }

  componentDidMount() {
    this.updateUser();
  }

  logout(event) {
    event.preventDefault();

    this.setState({ user: null }, () => {
      //clear token
      localStorage.removeItem("token");

      window.location = "/home";
    });

    console.log("app.logout triggered");
  }

  updateUser() {
    const jwt = localStorage.getItem("token");
    try {
      if (!jwt) return;

      const decodedUser = jwt_decode(jwt);
      console.log("token present, user logged in", decodedUser);

      console.log(decodedUser);

      this.setState({
        user: decodedUser,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    let user = this.state.user;
    console.log(user);
    return (
      <Router>
        <Switch>
          <div>
            <TopBar
              user={user}
              logout={(event) => this.logout(event)}
            />
            <div>
              {/* <Route
                path="/home"
                render={(props) => {
                  if (!user) {
                    <Redirect from="*" to="/Login" />;
                  } else {
                    return <Home {...props} user={user} />;
                  }
                }}

              /> */}

              <Route
                path="/home"
                // component={Home}
                // user={this.state.user}
                // updateUser={() => {
                //   this.updateUser();
                // }}
              >
                <Home user={user} updateUser={()=>{this.updateUser()}}></Home>
              </Route>
              <Route path="/Register" component={Register} />
              <Route path="/Login" component={Login} />
              <Route path="/Logout" component={LogOut} user={user} />
              <Route path="/Schedule" component={Schedule} />
              <Route path="/timer" component={Timer} />
              <Route path="/Log" component={log} />
              {/* <Redirect to="/not-found"/> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;

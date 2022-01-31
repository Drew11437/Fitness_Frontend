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
import log from "./WorkoutLog/Log";

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
    const jwt = localStorage.getItem("token");
    try {
      const decodedUser = jwt_decode(jwt);
      console.log(decodedUser);
      this.setState({
        user: decodedUser,
      });
    } catch {}
  }

  render() {
    let user = this.state.user;
    console.log(user);
    return (
      <Router>
        <Switch>
          <div>
            <TopBar user={user} />
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

              <Route path="/home" component={Home} user={user}/>
              <Route path="/Register" component={Register} />
              <Route path="/Login" component={Login} />
              <Route path="/Logout" component={LogOut} user={user} />
              <Route path="/Schedule" component={Schedule} />
              <Route path="/timer" component={Timer} />
              <Route path="/log" component={log} />
              {/* <Redirect to="/not-found"/> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;

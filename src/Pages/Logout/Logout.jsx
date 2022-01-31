import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogOut = ({ user }) => {
  let history = useHistory();

  useEffect(() => {
    console.log("there is a user", user);
  }, [user]);

  function logout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  return (
    <div>
      <button className="LogOut-button" onClick={logout}>
        LogOut
      </button>
    </div>
  );
};

export default LogOut;

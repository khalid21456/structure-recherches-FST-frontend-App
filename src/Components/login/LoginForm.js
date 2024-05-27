import React from "react";
import Login from "./Login";
import logo from "./../../pictures/fst.png";

export default function LoginForm() {
  return (
    <div className="pageContainer">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="cardLogin shadow-2xl rounded-2xl">
        <Login />
      </div>
    </div>
  );
}

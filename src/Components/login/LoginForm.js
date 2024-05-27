import React from "react";
import Login from "./Login";
import logo from "./../../pictures/fst.png";
import Navbar from "../index/Navbar";
import Footer from "../index/Footer";

export default function LoginForm() {
  return (
    <>
      <div className="pageContainer" style={{ height: "700px" }}>
        {/* <div className="logoContainer">
          <img src={logo} className="logoLogin" alt="Logo" />
        </div> */}
        <div className="cardLogin shadow-2xl rounded-2xl">
          <Login />
        </div>
      </div>
    </>
  );
}

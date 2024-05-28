import React from "react";
import ReactDOM from "react-dom";
import { useState, useContext } from "react";
import axios from "axios";
import Enseignant from "./Enseignant";
import Doctorant from "./Doctorant";
import "./../../style/LoginStyle.css";
import scienceSvg from "./../../pictures/science.svg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import logo from "./../../pictures/fst.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);
  const handlEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(
        `http://localhost:8080/FSTBM/Login/ConnectEns/${email}/${password}`
      );

      if (response && response.data) {
        ReactDOM.render(
          <Enseignant loginData={response.data} />,
          document.getElementById("root")
        );
        console.log(response.data);
      } else {
        throw new Error("Enseignant not found");
      }
    } catch (error) {
      console.log("Enseignant not found, searching for student...");

      try {
        let response = await axios.get(
          `http://localhost:8080/FSTBM/Login/ConnectDoc/${email}/${password}`
        );

        if (response && response.data) {
          ReactDOM.render(
            <Doctorant loginData={response.data} />,
            document.getElementById("root")
          );
          console.log(response.data);
        } else {
          console.error("Doctorant not found");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
  };
  const handleClick = (event) => {
    event.target.closest(".input-divLogin").classList.remove("withoutFocus");
    event.target.closest(".input-divLogin").classList.add("focus");
  };
  return (
    <div className="mainContainerLogin rounded-md">
      <img src={require("./../../pictures/wave.png")} className="waveLogin" />
      <div className="containerLogin">
        <div className="imgLogin">
          <img
            //  src={require("./../../pictures/scienceph.png")}
            src={scienceSvg}
          />
        </div>
        <div className="login-content">
          <form className="formLogin">
            <div className="logoLogin">
              <img src={logo} alt="Logo" className="logoLogin-img" />
            </div>

            {/* <h1>Bienvenue</h1> */}
            <div className="input-divLogin withoutFocus user">
              <div className="i">
                <AlternateEmailIcon />
              </div>
              <div>
                <h5>Adresse Email</h5>
                <input
                  type="text"
                  className="inputLogin"
                  onClick={handleClick}
                  onChange={handlEmail}
                />
              </div>
            </div>

            <div className="input-divLogin withoutFocus pass">
              <div className="i">
                <LockIcon />
              </div>
              <div>
                <h5>Mot de passe</h5>
                <input
                  type="password"
                  className="inputLogin"
                  onClick={handleClick}
                  onChange={handlPassword}
                />
              </div>
            </div>
            <span className="spanLogin">Oublier mot de passe</span>
            <button className="btnLogin" onClick={submitLogin}>
              Connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

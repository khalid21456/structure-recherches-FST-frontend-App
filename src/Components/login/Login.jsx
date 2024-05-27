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
export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // console.log(email);
  // console.log(password);
  // const handlEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlPassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const submitLogin = async () => {
  //   try {
  //     let response = await axios.get(
  //       `http://localhost:8080/FSTBM/Login/ConnectEns/${email}/${password}`
  //     );

  //     if (response && response.data) {
  //       ReactDOM.render(
  //         <Enseignant loginData={response.data} />,
  //         document.getElementById("root")
  //       );
  //       console.log(response.data);
  //     } else {
  //       throw new Error("Professor not found");
  //     }
  //   } catch (error) {
  //     console.log("Professor not found, searching for student...");

  //     try {
  //       let response = await axios.get(
  //         `http://localhost:8080/FSTBM/Login/ConnectDoc/${email}/${password}`
  //       );

  //       if (response && response.data) {
  //         ReactDOM.render(
  //           <Doctorant loginData={response.data} />,
  //           document.getElementById("root")
  //         );
  //         console.log(response.data);
  //       } else {
  //         console.error("Student not found");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   }
  // };
  return (
    <div className="mainContainerLogin rounded-md">
      <img src={require("./../../pictures/wave.png")} className="wave" />
      <div className="containerLogin">
        <div className="img">
          <img
            //  src={require("./../../pictures/scienceph.png")}
            src={scienceSvg}
          />
        </div>
        <div className="login-content">
          <form className="formLogin">
            <h1>Bienvenue</h1>
            <div className="input-divLogin user focus">
              <div className="i">
                <AlternateEmailIcon style={{ color: "#d9d9d9" }} />
              </div>
              <div>
                <h5>Adresse Email</h5>
                <input type="text" className="inputLogin" />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <LockIcon style={{ color: "#d9d9d9" }} />
              </div>
              <div>
                <h5>Mot de passe</h5>
                <input type="password" className="inputLogin" />
              </div>
            </div>
            <span className="spanLogin">Oublier mot de passe</span>
            <button className="btnLogin">Connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

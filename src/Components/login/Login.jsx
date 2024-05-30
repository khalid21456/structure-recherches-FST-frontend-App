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
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "@mui/material/Button";
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 460,
  bgcolor: "background.paper",
  boxShadow: 2,
  p: 4,
};
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openAddEquipe, setOpenAddEquipe] = React.useState(false);
  const handleOpenAddEquipe = () => setOpenAddEquipe(true);
  const handleCloseAddEquipe = () => setOpenAddEquipe(false);

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
            <span className="spanLogin" onClick={handleOpenAddEquipe}>
              Oublier mot de passe
            </span>
            {/* Start Forgot Password */}
            <Modal
              open={openAddEquipe}
              onClose={handleCloseAddEquipe}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="flex flex-col justify-start items-center pb-2">
                    <TaskAltIcon
                      style={{
                        fontSize: 80,
                        color: "#38E54D",
                      }}
                    ></TaskAltIcon>
                    <h1 className="mt-10 text-center text-3xl font-bold text-gray-700">
                      C'est fait!
                    </h1>
                    <div className="mt-8 text-center">
                      <p className="text-gray-600 text-lg">
                        Votre nouveau mot de passe a été envoyé à votre adresse
                        e-mail.
                      </p>
                      <span>monaim@gmail.com</span>
                    </div>
                    <div className="flex justify-center mt-16">
                      <button
                        className="w-72 rounded-sm py-1 text-white shadow-md"
                        style={{
                          backgroundColor: "#38E54D",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onClick={handleCloseAddEquipe}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            {/* End Forgot Password */}

            <button className="btnLogin" onClick={submitLogin}>
              Connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

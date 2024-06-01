import React from "react";
import ReactDOM from "react-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Enseignant from "./Enseignant";
import Doctorant from "./Doctorant";
import "./../../style/LoginStyle.css";
import scienceSvg from "./../../pictures/science.svg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import logo from "./../../pictures/fst.png";
import { Alert, Snackbar, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Admin from "./Admin";
import App from "../../App";
import Accueil from "../index/Accueil";
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
  const [userLogin, setUserLogin] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [openAddEquipe, setOpenAddEquipe] = React.useState(false);
  const handleOpenAddEquipe = () => setOpenAddEquipe(true);
  const handleCloseAddEquipe = () => setOpenAddEquipe(false);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleSnackBarClick = () => {
    setOpenSnackBar(true);
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  console.log(email);
  console.log(password);
  const handlEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlPassword = (e) => {
    setPassword(e.target.value);
  };
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-z]+[a-z0-9]*\.?[a-z0-9]*@[a-z]{3,}\.[a-z]{2,}$/;
    if (email.trim() === "") {
      errors.email = "Adresse e-mail est nécessaire!";
    } else if (!emailRegex.test(email)) {
      errors.email = "Ce n'est pas un format d'e-mail valide!";
    }
    if (password.trim() === "") {
      errors.password = "Mot de passe est nécessaire!";
    } else if (password.length !== 10) {
      errors.password = "Le mot de passe doit contenir 10 caractères";
    }
    return errors;
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm());
    setIsSubmit(true);
    let enseignantFound = false;
    let doctorantFound = false;
    let adminFound = false;
    try {
      let response = await axios.get(
        `http://localhost:8080/FSTBM/Login/ConnectEns/${email}/${password}`
      );

      if (response && response.data) {
        ReactDOM.render(
          <Enseignant loginData={response.data} />,
          document.getElementById("root")
        );
        enseignantFound = true;
        console.log(userLogin);
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
          doctorantFound = true;
          console.log(response.data);
        } else {
          console.error("Doctorant not found");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
      try {
        let response = await axios.get(
          `http://localhost:8080/FSTBM/Login/ConnectAdmin/${email}/${password}`
        );

        if (response && response.data) {
          ReactDOM.render(
            <Admin loginData={response.data} />,
            document.getElementById("root")
          );
          adminFound = true;
          console.log(response.data);
        } else {
          console.error("Admin not found");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    if (!enseignantFound && !doctorantFound && !adminFound) {
      if (email.trim() !== "" && password.trim() !== "") {
        handleSnackBarClick();
        console.log("No users found, showing Snackbar");
      }
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(email);
      console.log(password);
    }
  }, [formErrors]);
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
                <p
                  className="text-red-400 text-sm mt-14"
                  style={{ marginLeft: "-190px" }}
                >
                  {formErrors.email}
                </p>
              </div>
            </div>
            {/* <div className="w-full">
              <p
                className="text-red-400 text-sm"
                style={{ marginLeft: "-170px" }}
              >
                {formErrors.email}
              </p>
            </div> */}
            <div className="input-divLogin withoutFocus pass mt-10">
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
            <div className="w-full">
              <p
                className="text-red-400 text-sm"
                style={{ marginLeft: "-175px" }}
              >
                {formErrors.password}
              </p>
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
          <Snackbar
            open={openSnackBar}
            autoHideDuration={6000}
            onClose={handleSnackBarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{ marginBottom: "480px" }}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Adresse e-mail ou mot de passe est incorrect!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

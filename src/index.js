import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Admin from "./Components/login/Admin";
import Enseignant from "./Components/login/Enseignant";
import DoctorantSideBar from "./Components/Doctorant/DoctorantSideBar";
import Doctorant from "./Components/login/Doctorant";
import Login from "./Components/login/Login";
import LoginForm from "./Components/login/LoginForm";

const root = document.getElementById("root");

// ReactDOM.render(<Enseignant />, root);
// ReactDOM.render(<Doctorant />, root);
// ReactDOM.render(<Admin />, root);
ReactDOM.render(<App />, root);
// ReactDOM.render(<Login />, root);

document.body.style.zoom = "87%";

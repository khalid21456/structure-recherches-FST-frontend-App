import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Components/login/Admin";
import App from "./App";
import Enseignant from "./Components/login/Enseignant";

const root = document.getElementById("root");
// ReactDOM.render(<Enseignant />, root);
ReactDOM.render(<App />, root);

document.body.style.zoom = "87%";

import React from "react";
import ReactDOM from "react-dom";
import Login from "../login/Login";
import Accueil from "./Accueil";
import Departement from "../Departements/Departements";
import Recherche from "../Recherches/Recherches";
import Publications from "../Publications/Publications";
import "../../style/Publication.css";
import themes from "../../data/Themes";

export default function Navbar() {
  let buttonStyle =
    "pt-3 rounded-md hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer";
  let clickedButtonStyle =
    "pt-3 rounded-md text-blue-600  pr-5 pl-5 cursor-pointer";

  let rechercheHeightStrikeBool = true;
  function ConnecterShow() {
    let main = document.getElementById("main");
    ReactDOM.render(<Login />, main);
    removeStyleButton();
  }

  function removeStyleButton() {
    let navs = document.getElementsByTagName("li");
    for (let i = 0; i <= 4; i++) {
      navs[i].className = buttonStyle;
    }
  }

  function setStyleButton(event) {
    removeStyleButton();
    event.target.className = clickedButtonStyle;
  }

  function showAccueil(event) {
    let main = document.getElementById("main");
    setStyleButton(event);
    ReactDOM.render(<Accueil />, main);
  }

  function showPublications(event) {
    let main = document.getElementById("main");
    setStyleButton(event);
    ReactDOM.render(<Publications />, main);
  }

  function showRecherche(event) {
    let main = document.getElementById("main");
    ReactDOM.render(<Recherche />, main);
    setStyleButton(event);
  }

  function showDepartement(event) {
    let main = document.getElementById("main");
    ReactDOM.render(<Departement />, main);
    setStyleButton(event);
  }

  function showPropos(event) {
    let main = document.getElementById("main");
    // render Recherche Component
    setStyleButton(event);
  }

  window.addEventListener("scroll", () => {
    let nav = document.getElementsByClassName("nav")[0];
    var navTop = nav.getBoundingClientRect().top;
    if (navTop > -50) {
      nav.classList.add("navbar0");
      nav.classList.remove("navbar");
    } else if (navTop < -50) {
      nav.classList.remove("navbar0");
      nav.classList.add("navbar");
    }
  });

  return (
    <div className="nav bg-gray-100 h-24 shadow-md">
      <div className="flex justify-end h-24 pt-5">
        <div className="fst-logo mb-3 flex">
          <img src={require("../../pictures/fst.png")} className="w-16" />
          <h1
            style={{ fontFamily: "Roboto" }}
            className="title max-xl:text-xl text-2xl font-bold mt-4 ml-5 cursor-default"
          >
            Faculté des Sciences et Techniques
          </h1>
        </div>
        <ul className="flex justify-between text-xl mr-5 h-14 font-thin">
          <li
            onClick={showAccueil}
            className="pt-3 rounded-md text-black hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
          >
            Accueil
          </li>
          <li
            onClick={showPublications}
            className="pt-3 rounded-md text-black hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
          >
            Publications
          </li>
          <li
            onClick={showRecherche}
            className="pt-3 rounded-md text-black hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            id="searchs"
          >
            Recherches
          </li>
          <li
            onClick={showDepartement}
            className="pt-3 rounded-md text-black hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
          >
            Départements
          </li>
          <li
            onClick={showPropos}
            className="pt-3 rounded-md text-black hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
          >
            Propos
          </li>
          <li
            onClick={ConnecterShow}
            className="pt-3 text-white bg-blue-600 cursor-pointer hover:transition-colors hover:bg-blue-500 rounded pl-5 pr-5 ml-5"
          >
            <button>Connecter</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

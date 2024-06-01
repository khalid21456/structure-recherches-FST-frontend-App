import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "../login/Login";
import Accueil from "./Accueil";
import Departement from "../Departements/Departements";
import Recherche from "../Recherches/Recherches";
import Publications from "../Publications/Publications";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import "../../style/Publication.css";
import themes from "../../data/Themes";
import LoginForm from "../login/LoginForm";
import App from "../../App";

export default function Navbar() {
  let buttonStyle =
    "pt-3 rounded-md hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer";
  let clickedButtonStyle =
    "pt-3 rounded-md text-blue-600  pr-5 pl-5 cursor-pointer";

  let rechercheHeightStrikeBool = true;
  const settings = ["Profile", "Dashboard", "Déconnecter"];
  // function ConnecterShow() {
  //   let root = document.getElementById("root");
  //   ReactDOM.render(<LoginForm />, root);
  //   // removeStyleButton();
  // }

  function ConnecterShow() {
    removeStyleButton();
    let main = document.getElementById("main");
    document.getElementsByClassName("footer")[0].style.display = "none";
    ReactDOM.render(<LoginForm />, main);
  }

  function removeStyleButton() {
    let navs = document.getElementsByTagName("li");
    for (let i = 0; i <= 4; i++) {
      navs[i].className = buttonStyle;
      navs[i].style.color = "black";
    }
  }

  function setStyleButton(event) {
    removeStyleButton();
    event.target.className = clickedButtonStyle;
    event.target.style.color = "blue";
  }

  function showAccueil(event) {
    let main = document.getElementById("main");
    setStyleButton(event);
    ReactDOM.render(<Accueil />, main);
    document.getElementsByClassName("footer")[0].style.display = "";
  }

  function showPublications(event) {
    let main = document.getElementById("main");
    setStyleButton(event);
    ReactDOM.render(<Publications />, main);
    document.getElementsByClassName("footer")[0].style.display = "";
  }

  function showRecherche(event) {
    let main = document.getElementById("main");
    ReactDOM.render(<Recherche />, main);
    setStyleButton(event);
    document.getElementsByClassName("footer")[0].style.display = "";
  }

  function showDepartement(event) {
    let main = document.getElementById("main");
    ReactDOM.render(<Departement />, main);
    setStyleButton(event);
    document.getElementsByClassName("footer")[0].style.display = "";
  }

  function showPropos(event) {
    let main = document.getElementById("main");
    // render Recherche Component
    setStyleButton(event);
    document.getElementsByClassName("footer")[0].style.display = "none";
  }

  // window.addEventListener("scroll", () => {
  //   let nav = document.getElementsByClassName("nav")[0];
  //   var navTop = nav.getBoundingClientRect().top;
  //   if (navTop > -50) {
  //     nav.classList.add("navbar0");
  //     nav.classList.remove("navbar");
  //   } else if (navTop < -50) {
  //     nav.classList.remove("navbar0");
  //     nav.classList.add("navbar");
  //   }
  // });
  window.addEventListener("load", () => {
    let nav = document.getElementsByClassName("nav")[0];
    if (nav) {
      window.addEventListener("scroll", () => {
        var navTop = nav.getBoundingClientRect().top;
        if (navTop > -50) {
          nav.classList.add("navbar0");
          nav.classList.remove("navbar");
        } else if (navTop < -50) {
          nav.classList.remove("navbar0");
          nav.classList.add("navbar");
        }
      });
    } else {
      console.error("Element with class 'nav' not found.");
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
            {/* Faculté des Sciences et Techniques */}
            Université Sultan Moulay Slimane
          </h1>
        </div>
        <ul className="flex justify-between text-xl mr-5 h-14 font-thin">
          <li
            onClick={showAccueil}
            className="pt-3 rounded-md  hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            style={{ color: "black" }}
          >
            Accueil
          </li>
          <li
            onClick={showPublications}
            className="pt-3 rounded-md hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            style={{ color: "black" }}
          >
            Publications
          </li>
          <li
            onClick={showRecherche}
            className="pt-3 rounded-md  hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            id="searchs"
            style={{ color: "black" }}
          >
            Recherches
          </li>
          <li
            onClick={showDepartement}
            className="pt-3 rounded-md  hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            style={{ color: "black" }}
          >
            Départements
          </li>
          <li
            onClick={showPropos}
            className="pt-3 rounded-md hover:text-blue-600 hover:transition-colors hover:border-b-yellow-400 hover:border-b-2 pr-5 pl-5 cursor-pointer"
            style={{ color: "black" }}
          >
            Propos
          </li>
          <li
            onClick={ConnecterShow}
            // className="pt-3 text-white bg-blue-600 cursor-pointer hover:transition-colors hover:bg-blue-500 rounded pl-5 pr-5 ml-5"
            className="pt-3 cursor-pointer hover:transition-colors rounded-3xl pl-5 pr-5 ml-5 border border-blue-700 text-blue-800 font-semibold hover:bg-blue-700 hover:text-white hover:font-semibold"
          >
            <button>Connecter</button>
          </li>

          {/* <li
              // className="pt-3 text-white bg-blue-600 cursor-pointer hover:transition-colors hover:bg-blue-500 rounded pl-5 pr-5 ml-5"
              className="cursor-pointer hover:transition-colors rounded-full"
            >
              <div className="ml-8 mr-5">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                      style={{
                        border: "2px solid #FF8F00",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    >
                      <Avatar
                        // alt={loginData.nom}
                        src={require("./../../profiles/Mr-ElMourabit.png")}
                        style={{
                          width: "45px",
                          height: "45px",
                        }}
                        // src={imagePath}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "57px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                      className: "ml-44 mt-5",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    className="ml-44"
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleMenuItemClick(setting)}
                        sx={{ my: 0 }}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </div>
            </li> */}
        </ul>
      </div>
    </div>
  );
}

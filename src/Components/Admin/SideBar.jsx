import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import AdminProfileCard from "./AdminProfileCard";
import Stack from "@mui/material/Stack";
import { pink } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import AdminAccueil from "./AdminComponents/AdminAccueil";
import EnseignantAdmin from "./AdminComponents/EnseignantAdmin";
import DoctorantAdmin from "./AdminComponents/DoctorantAdmin";
import RechercheAdmin from "./AdminComponents/RechercheAdmin";
import "../../style/EnseignantSideBar.css";
import EvenementAdmin from "./AdminComponents/EvenementAdmin";
import EquipeAdmin from "./AdminComponents/EquipeAdmin";
import BiotechIcon from "@mui/icons-material/Biotech";
import LaboratoireAdmin from "./AdminComponents/LaboratoireAdmin";
import { Link } from "react-router-dom";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function renderAdminAccueil() {
  ReactDOM.render(
    <AdminAccueil />,
    document.getElementById("dashboardContent")
  );
}

function renderEnseignantAdmin() {
  ReactDOM.render(
    <EnseignantAdmin />,
    document.getElementById("dashboardContent")
  );
}

function renderLaboratoireAdmin() {
  ReactDOM.render(
    <LaboratoireAdmin />,
    document.getElementById("dashboardContent")
  );
}

function renderDoctorantAdmin() {
  ReactDOM.render(
    <DoctorantAdmin />,
    document.getElementById("dashboardContent")
  );
}

function renderRechercheAdmin() {
  ReactDOM.render(
    <RechercheAdmin />,
    document.getElementById("dashboardContent")
  );
}

function renderEvenementAdmin() {
  ReactDOM.render(
    <EvenementAdmin />,
    document.getElementById("dashboardContent")
  );
}

function renderEquipeAdmin() {
  ReactDOM.render(<EquipeAdmin />, document.getElementById("dashboardContent"));
}

export default function SideBar({ loginData }) {
  return (
    <div className="sideBar-Container w-80 h-full shadow-lg ">
      <div className="flex justify-center">
        <AdminProfileCard loginData={loginData} />
      </div>
      <div className="text-white text-2xl h-20 border-b-2 border-b-orange-500">
        <h1 style={{ fontFamily: "Poppins" }} className="pt-6 pl-10">
          General
        </h1>
      </div>
      <div>
        <div className="btn">
          <Link to="/">
            <button
              className="flex mt-10 pt-3 pb-3 pl-7 w-full"
              // onClick={renderAdminAccueil}
            >
              <HomeIcon sx={{ fontSize: 35, color: "orange" }} />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Accueil
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Doctorant">
            <button
              className="flex mt-1 pt-3 pb-3 pl-7 w-full"
              // onClick={renderDoctorantAdmin}
            >
              <img
                style={{ width: "35px" }}
                src={require("../../icons/doctorant-icon.png")}
                alt=""
              />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Doctorants
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Enseignant">
            <button
              className="flex mt-1 pt-3 pb-3 pl-7 w-full"
              // onClick={renderEnseignantAdmin}
            >
              <img
                style={{ width: "35px" }}
                src={require("../../icons/enseignant-icon.png")}
                alt=""
              />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Enseignants
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Event">
            <button
              className="flex mt-1 pt-3 pb-3 pl-7 w-full"
              // onClick={renderEvenementAdmin}
            >
              <EventIcon sx={{ fontSize: 35, color: "orange" }} />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Evenements
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Recherche">
            <button
              className="flex mt-1 pt-3 pb-3 pl-7 w-full"
              // onClick={renderRechercheAdmin}
            >
              <img
                style={{ width: "35px" }}
                src={require("../../icons/recherche-icon.png")}
                alt=""
              />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Recherches
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Equipe">
            <button className="flex mt-1 pt-3 pb-3 pl-7 w-full">
              <img
                style={{ width: "35px" }}
                src={require("../../icons/teams.png")}
                alt=""
              />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-5 text-white"
              >
                Equipes
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/Admin/Laboratoire">
            <button className="flex mt-1 pt-3 pb-3 pl-7 w-full">
              <BiotechIcon sx={{ fontSize: 38, color: "orange" }} />
              <h1
                style={{ fontFamily: "Poppins", paddingTop: "6px" }}
                className="text-xl pl-4 text-white"
                // onClick={renderLaboratoireAdmin}
              >
                Laboratoires
              </h1>
            </button>
          </Link>
        </div>
        <div className="btn">
          <button className="flex mt-1 pt-3 pb-3 pl-7 w-full">
            <SettingsIcon sx={{ fontSize: 35, color: "orange" }} />
            <h1
              style={{ fontFamily: "Poppins", paddingTop: "6px" }}
              className="text-xl pl-5 text-white"
            >
              Paramètres
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

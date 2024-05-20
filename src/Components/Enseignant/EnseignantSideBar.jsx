import React from "react";
import ReactDOM from "react-dom";
import EnseignantProfileCard from "./EnseignantProfileCard";
import "./../../style/EnseignantDashboard.css";
import EnseignantAccueil from "./EnseignantComponents/EnseignantAccueil";
import EnseignantEvenement from "./EnseignantComponents/EnseignantEvenement";
import EnseignantPublication from "./EnseignantComponents/EnseignantPublication";
import EnseignantRecherche from "./EnseignantComponents/EnseignantRecherche";
import ListEnseignantPublications from "./EnseignantComponents/ListEnseignantPublications";

export default function EnseignantSideBar() {
  const renderEnseignantAccueil = () => {
    ReactDOM.render(
      <EnseignantAccueil />,
      document.getElementById("EnseignantContent")
    );
  };
  const renderEnseignantRecherche = () => {
    ReactDOM.render(
      <EnseignantRecherche />,
      document.getElementById("EnseignantContent")
    );
  };
  const renderEnseignantEvenement = () => {
    ReactDOM.render(
      <EnseignantEvenement />,
      document.getElementById("EnseignantContent")
    );
  };
  const renderEnseignantPublication = () => {
    ReactDOM.render(
      <ListEnseignantPublications />,
      document.getElementById("EnseignantContent")
    );
  };
  console.log("EnseignantDashNav:");
  return (
    <div className="enseiSideBar-Container w-80 h-full shadow-lg hover:border-r-4 hover:border-r-orange-500 fixed">
      <div className="flex justify-center">
        <EnseignantProfileCard />
      </div>
      <div className="text-white text-2xl h-16 border-b-2 border-b-orange-500">
        <h1 style={{ fontFamily: "Poppins" }} className="pt-4 pl-8">
          General
        </h1>
      </div>
      <nav className="mt-10">
        <button className="w-full" onClick={renderEnseignantAccueil}>
          <div className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 hover:border-l-4 hover:border-l-sky-900 hover:bg-white div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-8 h-8 icon"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                className="icon-path"
              />
            </svg>
            <span class="mx-4 text-xl text-white hover:text-sky-900 font-semibold">
              Accueil
            </span>
          </div>
        </button>
        <button className="w-full" onClick={renderEnseignantRecherche}>
          <div className="flex items-center px-6 py-2 mt-4 duration-200 hover:border-l-4 hover:border-l-sky-900 hover:bg-white div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 icon"
            >
              <path
                d="M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                className="icon-path"
              />
            </svg>
            <span class="mx-4 text-xl text-white hover:text-sky-900 font-semibold">
              Recherches
            </span>
          </div>
        </button>
        <button className="w-full" onClick={renderEnseignantEvenement}>
          <div className="flex items-center px-6 py-2 mt-4 duration-200 hover:border-l-4 hover:border-l-sky-900 hover:bg-white div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-8 h-8 icon"
            >
              <path
                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                className="icon-path"
              />
            </svg>
            <span class="mx-4 text-xl text-white hover:text-sky-900 font-semibold">
              Evenements
            </span>
          </div>
        </button>
        <button className="w-full" onClick={renderEnseignantPublication}>
          <div className="flex items-center px-6 py-2 mt-4 duration-200 hover:border-l-4 hover:border-l-sky-900 hover:bg-white div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 icon"
            >
              <path
                d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                className="icon-path"
              />
            </svg>
            <span class="mx-4 text-xl text-white hover:text-sky-900 font-semibold">
              Publications
            </span>
          </div>
        </button>
        <button className="w-full">
          <div className="flex items-center px-6 py-2 mt-4 duration-200 hover:border-l-4 hover:border-l-sky-900 hover:bg-white div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 icon"
            >
              <path
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                className="icon-path"
              />
            </svg>
            <span class="mx-4 text-xl text-white hover:text-sky-900 font-semibold">
              Paramètres
            </span>
          </div>
        </button>
      </nav>
    </div>
  );
}

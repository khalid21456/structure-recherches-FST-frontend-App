import React from "react";
import AddPublication from "./AddPublication";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
export default function DoctorantPublicationsList() {
  const renderAddPublication = () => {
    ReactDOM.render(
      <AddPublication />,
      document.getElementById("EnseignantContent")
    );
  };
  return (
    <div className="w-full">
      {/* h-[1000px] */}
      <div className="mt-2">
        <h1
          className="flex items-center justify-center text-2xl font-bold"
          style={{ fontFamily: "cursive", color: "#0a1eaf" }}
        >
          Mes Publications
        </h1>
        <div className="flex items-center justify-center relative mt-4">
          <span
            className="w-4 h-4 justify-center absolute ml-[-4px] rounded-full"
            style={{ backgroundColor: "#FF5722" }}
          ></span>
          <div
            className="w-52 h-1"
            style={{ backgroundColor: "#25476A" }}
          ></div>
        </div>
      </div>

      <div className="mt-10 mx-8">
        <button
          className="px-8 py-3 text-white font-bold hover:bg-violet-800 rounded-md mb-2"
          style={{ backgroundColor: "#061B9A" }}
          onClick={renderAddPublication}
        >
          Publier
        </button>
        <div className="w-full mt-3 h-64 bg-white rounded-md shadow-md flex">
          <div className="w-1/4">
            <img
              //  src={imagePath}
              className="w-full h-full rounded-s-md"
            />
          </div>
          <div className="w-9/12 h-56 bg-white">
            <div className="content">
              <div className="w-11/12 h-14 flex ml-5 mt-3">
                <div>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={require("../../../profiles/Mr-Nachaoui.jpg")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      color: "#574476",
                    }}
                    className="ml-3 h-fit"
                  >
                    Youssef El Mourabit
                  </label>
                  <p className="w-fit ml-3 text-slate-400">
                    Publier le 24/05/2024
                    {/* {formatDate(publication.datePub, "/")} */}
                  </p>
                </div>
              </div>
              <div className="ml-7 mt-4">
                <h1
                  style={{ fontFamily: "Platypi", fontSize: "20px" }}
                  className="mb-2 text-blue-600"
                >
                  {/* {publication.titre} */}
                  Un paragraphe
                </h1>
                <p className="pr-2">
                  {/* <TextDisplay text={publication.contenu} wordLimit={20} /> */}
                  Un paragraphe est une section de texte en prose vouée au
                  développement d'un point particulier souvent au moyen de
                  plusieurs phrases.
                </p>
              </div>
              <div className="h-5 pb-2 mt-12 flex justify-end">
                <label
                  className="mr-7 underline cursor-pointer hover:text-blue-500"
                  style={{ fontFamily: "Roman", fontSize: "18px" }}
                  //   onClick={() => renderPublicationDetails(publication)}
                >
                  Voir+
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

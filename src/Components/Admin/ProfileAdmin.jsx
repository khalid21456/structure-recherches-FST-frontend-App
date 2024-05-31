import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

export default function ProfileAdmin({ loginData }) {
  const imagePath = `http://localhost:8080/FSTBM/readImages/Profile/${loginData.profile}`;
  return (
    <div>
      <div className="w-full back-profile h-60 ">
        <div className="absolute top-64 left-96">
          <img
            className="w-44 h-44 rounded-full"
            // src={require("../../profiles/Mr-Afraites.jpg")}
            src={imagePath}
          />
        </div>
      </div>
      <div className="flex">
        <div
          style={{ height: "500px" }}
          className="w-2/5 flex justify-center bg-slate-200"
        >
          <div id="informations" className="pt-28 w-9/12">
            <h1
              style={{ fontFamily: "Poppins", fontSize: "30px" }}
              className=""
            >
              {loginData.prenom} {loginData.nom}
            </h1>
            <h1 style={{ fontFamily: "Roboto" }} className="mt-2">
              Enseignant à La FST Béni Mellal
            </h1>
          </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </div>
  );
}

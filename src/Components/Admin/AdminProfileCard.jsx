import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../style/AdminDashboard.css";

export default function AdminProfileCard({ loginData }) {
  // useEffect(() => {
  //   while(true) {
  //       let test = document.getElementsByClassName("online")[0];
  //       document.getElementsByClassName("online")[0].classList.add("online-popUp")
  //       document.getElementsByClassName("online")[0].classList.remove("online-popUp")
  //   }
  // }, []);
  const imagePath = `http://localhost:8080/FSTBM/readImages/Profile/${loginData.profile}`;
  return (
    <div className="PCard w-full h-36 flex">
      <img
        // src={require("../../profiles/Mr-Afraites.jpg")}
        src={imagePath}
        className="w-20 mt-8 ml-4 h-20 rounded-full"
      />
      <div>
        <h1
          style={{ fontFamily: "Poppins", fontSize: "21px" }}
          className=" mt-12 ml-5 text-white"
        >
          {loginData.prenom} {loginData.nom}
        </h1>
        <div className="flex ">
          <div
            style={{ marginTop: "6px" }}
            className="online w-3 h-3 bg-green-600 rounded-full ml-5"
          ></div>
          <label className=" text-green-600 font-bold ml-2">En ligne</label>
        </div>
      </div>
    </div>
  );
}

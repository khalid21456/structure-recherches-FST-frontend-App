import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../style/AdminDashboard.css";

export default function AdminProfileCard() {
  // useEffect(() => {
  //   while(true) {
  //       let test = document.getElementsByClassName("online")[0];
  //       document.getElementsByClassName("online")[0].classList.add("online-popUp")
  //       document.getElementsByClassName("online")[0].classList.remove("online-popUp")
  //   }
  // }, []);

  return (
    <div className="PCard w-full h-36 flex">
      <img
        src={require("../../profiles/Mr-Afraites.jpg")}
        className="w-20 mt-8 ml-4 h-20 rounded-full"
      />
      <div>
        <h1
          style={{ fontFamily: "Poppins", fontSize: "21px" }}
          className=" mt-12 ml-5 text-white"
        >
          Lekbir Afraites
        </h1>
        <div className="flex ">
          <div
            style={{ marginTop: "6px" }}
            className="online w-3 h-3 bg-green-600 rounded-full ml-5"
          ></div>
          <label className=" text-green-600 font-bold ml-2">
            En ligne
          </label>
        </div>
      </div>
    </div>
  );
}

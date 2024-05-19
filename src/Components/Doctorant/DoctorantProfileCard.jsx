import React from "react";
import "./../../style/Doctorant.css";
export default function DoctorantProfileCard() {
  return (
    <div className="EnseiCard w-full h-32 flex">
      <img
        src={require("../../profiles/Mr-Nachaoui.jpg")}
        className="w-16 mt-8 ml-4 h-16 rounded-full"
      />
      <div>
        <h1
          style={{ fontFamily: "Poppins", fontSize: "18px" }}
          className=" mt-10 ml-5 text-white"
        >
          Nachaoui Mourad
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

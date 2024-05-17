import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import EvenementDetail from "./EvenementDetail";
import { render } from "@testing-library/react";

function renderEvenementDetail() {
  ReactDom.render(
    <EvenementDetail />,
    document.getElementById("dashboardContent")
  );
}

export default function EvenementAdmin() {
  return (
    <>
      <div
        style={{ width: "1380px", backgroundColor: "#2d0560" }}
        className="flex h-20 mr-1 bg-slate-200"
      >
        <div
          className="h-full w-7"
          style={{ backgroundColor: "#FF5722" }}
        ></div>
        <p
          className="text-3xl pt-5 pl-10 text-white"
          style={{ fontFamily: "Poppins" }}
        >
          Les demandes
        </p>
        <div></div>
      </div>
      <div className="events w-full flex justify-center">
        <div className="w-9/12">
          <div className="w-full mt-3 h-56 bg-white rounded-md shadow-md flex">
            <div className="w-1/4">
              <img
                src={require("../../../pictures/cloud.jpg")}
                className="w-full h-full rounded-s-md"
              />
            </div>
            <div className="w-9/12 h-56 bg-white">
              <div className="content">
                <div className="w-11/12 h-14 flex ml-5 mt-3">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={require("../../../profiles/Mr-Erritali.jpg")}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins", fontSize: "18px" }}
                      className="ml-3 h-fit"
                    >
                      Mohammed Erritali
                    </label>
                    <p className="w-fit ml-3 text-slate-400">
                      Envoyer le 11/05/2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <h1
                    style={{ fontFamily: "Platypi" }}
                    className=" text-2xl text-center"
                  >
                    INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND
                    GREEN COMPUTING
                  </h1>
                </div>
                <div className="h-5 mt-5 flex justify-end">
                  <label
                    className="mr-7 underline cursor-pointer hover:text-blue-500"
                    style={{ fontFamily: "Roman", fontSize: "18px" }}
                    onClick={renderEvenementDetail}
                  >
                    Voir+
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-3 h-56 bg-white rounded-md shadow-md flex">
            <div className="w-1/4">
              <img
                src={require("../../../pictures/cloud.jpg")}
                className="w-full h-full rounded-s-md"
              />
            </div>
            <div className="w-9/12 h-56 bg-white">
              <div className="content">
                <div className="w-11/12 h-14 flex ml-5 mt-3">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={require("../../../profiles/Mr-Erritali.jpg")}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins", fontSize: "18px" }}
                      className="ml-3 h-fit"
                    >
                      Mohammed Erritali
                    </label>
                    <p className="w-fit ml-3 text-slate-400">
                      Envoyer le 11/05/2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <h1
                    style={{ fontFamily: "Platypi" }}
                    className=" text-2xl text-center"
                  >
                    INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND
                    GREEN COMPUTING
                  </h1>
                </div>
                <div className="h-5 mt-5 flex justify-end">
                  <label
                    className="mr-7 underline cursor-pointer hover:text-blue-500"
                    style={{ fontFamily: "Roman", fontSize: "18px" }}
                  >
                    Voir+
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-3 h-56 bg-white rounded-md shadow-md flex">
            <div className="w-1/4">
              <img
                src={require("../../../pictures/cloud.jpg")}
                className="w-full h-full rounded-s-md"
              />
            </div>
            <div className="w-9/12 h-56 bg-white">
              <div className="content">
                <div className="w-11/12 h-14 flex ml-5 mt-3">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={require("../../../profiles/Mr-Erritali.jpg")}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins", fontSize: "18px" }}
                      className="ml-3 h-fit"
                    >
                      Mohammed Erritali
                    </label>
                    <p className="w-fit ml-3 text-slate-400">
                      Envoyer le 11/05/2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <h1
                    style={{ fontFamily: "Platypi" }}
                    className=" text-2xl text-center"
                  >
                    INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND
                    GREEN COMPUTING
                  </h1>
                </div>
                <div className="h-5 mt-5 flex justify-end">
                  <label
                    className="mr-7 underline cursor-pointer hover:text-blue-500"
                    style={{ fontFamily: "Roman", fontSize: "18px" }}
                  >
                    Voir+
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-3 h-56 bg-white rounded-md shadow-md flex">
            <div className="w-1/4">
              <img
                src={require("../../../pictures/cloud.jpg")}
                className="w-full h-full rounded-s-md"
              />
            </div>
            <div className="w-9/12 h-56 bg-white">
              <div className="content">
                <div className="w-11/12 h-14 flex ml-5 mt-3">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={require("../../../profiles/Mr-Erritali.jpg")}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins", fontSize: "18px" }}
                      className="ml-3 h-fit"
                    >
                      Mohammed Erritali
                    </label>
                    <p className="w-fit ml-3 text-slate-400">
                      Envoyer le 11/05/2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <h1
                    style={{ fontFamily: "Platypi" }}
                    className=" text-2xl text-center"
                  >
                    INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND
                    GREEN COMPUTING
                  </h1>
                </div>
                <div className="h-5 mt-5 flex justify-end">
                  <label
                    className="mr-7 underline cursor-pointer hover:text-blue-500"
                    style={{ fontFamily: "Roman", fontSize: "18px" }}
                  >
                    Voir+
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

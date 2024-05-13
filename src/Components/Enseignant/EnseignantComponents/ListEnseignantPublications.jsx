import React from "react";
import ReactDOM from "react-dom";
import EnseignantPublication from "./EnseignantPublication";
import PublicationDetails from "./PublicationDetails";
export default function ListEnseignantPublications() {
  const renderAddPublication = () => {
    ReactDOM.render(
      <EnseignantPublication />,
      document.getElementById("EnseignantContent")
    );
  };
  const renderPublicationDetails = () => {
    ReactDOM.render(
      <PublicationDetails />,
      document.getElementById("EnseignantContent")
    );
  };
  return (
    <div className="h-[1000px] w-full">
      <div className="mt-2">
        <h1
          className="flex items-center justify-center text-2xl font-bold"
          style={{ fontFamily: "cursive", color: "#574476" }}
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
          style={{ backgroundColor: "#574476" }}
          onClick={renderAddPublication}
        >
          Publier
        </button>
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
                    src={require("../../../profiles/Mr-ElMourabit.png")}
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
                    Publier le 14/04/2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7">
                <h1 style={{ fontFamily: "Platypi" }} className="text-center">
                  INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND GREEN
                  COMPUTING
                </h1>
              </div>
              <div className="h-5 mt-12 flex justify-end">
                <label
                  className="mr-7 underline cursor-pointer hover:text-blue-500"
                  style={{ fontFamily: "Roman", fontSize: "18px" }}
                  onClick={renderPublicationDetails}
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
          <div className="w-9/12 h-56 bg-gray-010">
            <div className="content">
              <div className="w-11/12 h-14 flex ml-5 mt-3">
                <div>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={require("../../../profiles/Mr-ElMourabit.png")}
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
                    Publier le 14/04/2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7">
                <h1 style={{ fontFamily: "Platypi" }} className="text-center">
                  INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND GREEN
                  COMPUTING
                </h1>
              </div>
              <div className="h-5 mt-12 flex justify-end">
                <label
                  className="mr-7 underline cursor-pointer hover:text-blue-500"
                  style={{ fontFamily: "Roman", fontSize: "18px" }}
                  onClick={renderPublicationDetails}
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
                    src={require("../../../profiles/Mr-ElMourabit.png")}
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
                    Publier le 14/04/2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7">
                <h1 style={{ fontFamily: "Platypi" }} className="text-center">
                  INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND GREEN
                  COMPUTING
                </h1>
              </div>
              <div className="h-5 mt-12 flex justify-end">
                <label
                  className="mr-7 underline cursor-pointer hover:text-blue-500"
                  style={{ fontFamily: "Roman", fontSize: "18px" }}
                  onClick={renderPublicationDetails}
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
                    src={require("../../../profiles/Mr-ElMourabit.png")}
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
                    Publier le 14/04/2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7">
                <h1 style={{ fontFamily: "Platypi" }} className="text-center">
                  INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND GREEN
                  COMPUTING
                </h1>
              </div>
              <div className="h-5 mt-12 flex justify-end">
                <label
                  className="mr-7 underline cursor-pointer hover:text-blue-500"
                  style={{ fontFamily: "Roman", fontSize: "18px" }}
                  onClick={renderPublicationDetails}
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

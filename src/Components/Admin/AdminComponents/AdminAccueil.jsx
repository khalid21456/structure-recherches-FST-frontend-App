import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import EventIcon from "@mui/icons-material/Event";
import ShareIcon from "@mui/icons-material/Share";

export default function AdminAccueil(props) {
  const [enseignantCount, setEnseignantsCount] = useState();
  const [doctorantsCount, setDoctorantsCount] = useState();


  axios
    .get("http://localhost:8080/FSTBM/Admin/Enseignant/countEnseignants")
    .then((response) => {
      setEnseignantsCount(response.data);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });

    axios
    .get("http://localhost:8080/FSTBM/Admin/Doctorant/countDoctorants")
    .then((response) => {
      setDoctorantsCount(response.data);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });


  return (
    <div>
      <div className="flex justify-around pt-10">
        <div className="w-1/5 h-56 flex justify-center shadow-md bg-white rounded-lg">
          <div className="mt-5">
            <img
              className="w-24 ml-2"
              src={require("../../../icons/enseignant-statis.png")}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl mt-4"
            >
              {enseignantCount}
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Enseignants
            </h4>
          </div>
        </div>
        <div className="w-1/5 h-56 shadow-md flex justify-center mb-2 bg-white rounded-lg">
          <div className="mt-5">
            <img
              className="w-24 ml-2"
              src={require("../../../icons/doctorant-statis.png")}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl mt-4"
            >
              {doctorantsCount}
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Doctorants
            </h4>
          </div>
        </div>
        <div className="w-1/5 h-56 shadow-md mb-2 flex justify-center bg-white rounded-lg">
          <div className="mt-5">
            <EventIcon
              sx={{ fontSize: 96, color: "#2d0560", marginLeft: "5px" }}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl mt-4"
            >
              23
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Evenements
            </h4>
          </div>
        </div>
        <div className="w-1/5 h-56 shadow-md flex justify-center mb-2 bg-white rounded-lg">
          <div className="mt-5">
            <ShareIcon sx={{ fontSize: 96, color: "#2d0560" }} />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl mt-4"
            >
              896
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Publications
            </h4>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex justify-center">
        <div>
        <div className="Enseignants-show border bg-white rounded-lg shadow-md">
          <div
            style={{ fontFamily: "Poppins", fontSize: "25px" ,backgroundColor:"#2d0560", color:"white"}}
            className="h-20 border-b pt-5 pl-7"
          >
            Les Enseignants
          </div>
        </div>
        <div className="expand-overflow">
        <div className="Doctorants-show border bg-white rounded-lg shadow-md mt-7">
          <div
            style={{ fontFamily: "Poppins", fontSize: "25px" ,backgroundColor:"#2d0560", color:"white"}}
            className="h-20 border-b pt-5 pl-7"
          >
            Les Doctorants
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

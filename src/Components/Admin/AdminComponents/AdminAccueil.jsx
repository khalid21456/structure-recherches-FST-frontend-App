import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import EventIcon from "@mui/icons-material/Event";
import ShareIcon from "@mui/icons-material/Share";
import "../../../index.css"

export default function AdminAccueil(props) {
  const [enseignantCount, setEnseignantsCount] = useState();
  const [equipesCount, setEquipesCount] = useState();
  const [labosCount,setLabosCount] = useState();

    useEffect(() => {
      const fetchDataCountEnseignant = async () => {
        try {
          const response = await axios.get("http://localhost:8080/FSTBM/Admin/Enseignant/countEnseignants");
          setEnseignantsCount(response.data); 
          
        } catch (error) {
          console.log(error.response.data.message); 
          setEnseignantsCount([]); 
        }
      };
  
      fetchDataCountEnseignant(); // Call the fetchData function when the component is mounted
  
    }, []); 

    useEffect(() => {
      const fetchDataCountLaboratoires = async () => {
        try {
          const response = await axios.get("http://localhost:8080/FSTBM/Admin/Laboratoire/countLabos");
          setLabosCount(response.data); 
          
        } catch (error) {
          console.log(error.response.data.message); 
          setLabosCount([]); 
        }
      };
  
      fetchDataCountLaboratoires(); // Call the fetchData function when the component is mounted
  
    }, []); 


    useEffect(()=>{
      const fetchDataCountEquipes = async () => {
        try {
          const response = await axios.get("http://localhost:8080/FSTBM/Admin/Equipe/countEquipes");
          setEquipesCount(response.data); 
          
        } catch (error) {
          console.log(error.response.data.message); 
          setEquipesCount([]);
        }
      
      };
      fetchDataCountEquipes();
  }, [])


  return (
    <div>
      <div className="flex justify-around pt-10">
        <div className="w-1/5 h-56 flex justify-center shadow-md bg-white rounded-lg">
          <div className="mt-5">
            <img
              className="w-24 ml-2"
              src={require("../../../icons/teacher-icon.png")}
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
          <div className="mt-2">
            <img
              className="departement-logo w-32 ml-2"
              src={require("../../../pictures/departement-logo.jpg")}
              // style={{clipPath:`${inset("0 0 50px 0")}`}}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl"
            >
              9
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Départements
            </h4>
          </div>
        </div>
        <div className="w-1/5 h-56 shadow-md mb-2 flex justify-center bg-white rounded-lg">
          <div className="mt-5">
            <img
              className="w-24 ml-2"
              src={require("../../../pictures/team-3d-render-icon-illustration-png.png")}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl mt-4"
            >
              {equipesCount}
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Equipes
            </h4>
          </div>
        </div>
        <div className="w-1/5 h-56 shadow-md flex justify-center mb-2 bg-white rounded-lg">
          <div className="mt-5">
            <img
              className="w-28 ml-2"
              src={require("../../../pictures/labo-logo.png")}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl "
            >
              {labosCount}
            </div>
            <h4
              style={{ fontFamily: "Roboto", fontSize: "20px" }}
              className="text-center text-gray-300"
            >
              Laboratoires
            </h4>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex justify-center">
        <div>
          <div className="Enseignants-show border bg-white rounded-lg shadow-md">
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "25px",
                backgroundColor: "#2d0560",
                color: "white",
              }}
              className="h-20 border-b pt-5 pl-7"
            >
              Les Enseignants
            </div>
          </div>
          <div className="">
            <div className="Doctorants-show border bg-white rounded-lg shadow-md mt-7">
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "25px",
                  backgroundColor: "#2d0560",
                  color: "white",
                }}
                className="h-20 border-b pt-5 pl-7"
              >
                Les Equipes
              </div>
            </div>
          </div>
          <div className="expand-overflow">
            <div className="Doctorants-show border bg-white rounded-lg shadow-md mt-7">
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "25px",
                  backgroundColor: "#2d0560",
                  color: "white",
                }}
                className="h-20 border-b pt-5 pl-7"
              >
                Les Laboratoires
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

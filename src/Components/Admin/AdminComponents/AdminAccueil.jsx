import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import EventIcon from "@mui/icons-material/Event";
import ShareIcon from "@mui/icons-material/Share";

export default function AdminAccueil(props) {
  const [enseignantCount, setEnseignantsCount] = useState();
  const [doctorantsCount, setDoctorantsCount] = useState();

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


    useEffect(()=>{
      const fetchDataCountDoctorant = async () => {
        try {
          const response = await axios.get("http://localhost:8080/FSTBM/Admin/Doctorant/countDoctorants");
          setDoctorantsCount(response.data); 
          
        } catch (error) {
          console.log(error.response.data.message); 
          setDoctorantsCount([]);
        }
      
      };
      fetchDataCountDoctorant();
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
          <div className="mt-5">
            <img
              className="w-24 ml-2"
              src={require("../../../icons/master-icon.png")}
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
            <img
              className="w-28 ml-2"
              src={require("../../../icons/event-icon.jpg")}
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-center text-3xl"
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
            <img
              className="w-32 ml-2"
              src={require("../../../icons/pub-icon.jpg")}
            />
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
                Les Doctorants
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import LaboMembre from "./LaboMembre";

export default function LaboPage(props) {

    const [labo,setLabo] = useState({nomLaboratoire:"",responsable:{},acronyme:"",membresLabo:[]});

    useEffect(() => {
        const fetchDataLabo = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/FSTBM/Admin/Laboratoire/getById/${props.ident}`
            );
            setLabo(response.data);
            console.log(labo)
          } catch (error) {
            console.log(error.response.data.message);
            setLabo({});
          }
        };
    
        fetchDataLabo();
      }, []);


  return (
    <div className="departement-page-container bg-gray-100">
      <div
        className="image-back-labo"
        
      >
        <div className="pt-40 pl-24">
          <h1
            className="text-6xl max-xl:text-6xl p-3 text-white cursor-default hover:transition-colors w-fit bg-gray-500 bg-opacity-50"
            style={{ fontFamily: "Platypi" }}
          >
            <span>{labo.nomLaboratoire}</span>
          </h1>
          <div className="w-40 h-3 bg-yellow-400 mt-5"></div>
        </div>
      </div>
      <div className="membres max-xl:mr-14">
        <div style={{ marginLeft: "290px" }} className="flex mt-20 ml-52">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className="text-4xl pl-5 cursor-default"
          >
            Responsable de Laboratoire
          </h1>
        </div>
        <div>
          <div
            style={{ marginLeft: "290px" }}
            className="w-1/3 rounded-md hover:bg-gray-50 bg-white shadow-sm h-24 mt-8 border border-gray-100"
          >
            <div className="mt-4 ml-10">
              <h1 className="text-2xl" style={{fontFamily:"Roboto"}}>{labo.responsable.prenom} {labo.responsable.nom}</h1>
              <p>{labo.responsable.email}</p>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "290px" }} className="flex mt-24 ml-52">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className="text-4xl pl-5 cursor-default"
          >
            Membres
          </h1>
        </div>
        
        <LaboMembre membresLabo={labo.membresLabo}/>

      </div>
    </div>
  );
}
import "./../../../style/EnseignantDashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./../../../style/EnseignantDashboard.css";
import { Grid, Paper } from "@mui/material";
export default function EnseignantAccueil({ loginData }) {
  const [publicationsCounter, setPublicationsCounter] = useState(null);
  const [recherchesCounter, setRecherchesCounter] = useState();
  console.log(loginData);
  if (!loginData) {
    return <div>Loading...</div>;
  }
  // useEffect(() => {
  //   console.log(loginData.nom);
  //   console.log(loginData.email);
  //   const fetchDataCountPublications = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8080/FSTBM/Enseignant/countPublication/${loginData.id}`
  //       );
  //       if (response && response.data) {
  //         setPublicationsCounter(response.data);
  //       } else {
  //         console.error("No data received from the response");
  //         setPublicationsCounter(0);
  //       }
  //     } catch (error) {
  //       if (
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.message
  //       ) {
  //         console.log(error.response.data.message);
  //       } else {
  //         console.error("Error fetching data: ", error.message);
  //       }
  //       setPublicationsCounter(0);
  //     }
  //   };

  //   fetchDataCountPublications();
  // }, []);

  return (
    <div className="" style={{ height: "1800px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper
            className="w-[270px] h-full px-4 py-8 mt-4 ml-8"
            style={{ fontFamily: "cursive" }}
          >
            <div className="">
              <div className="rounded-full flex items-center justify-center">
                <img
                  className="rounded-full w-32 h-32"
                  src={require("./../../../pictures/teacher.png")}
                />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <h1
                  className="text-gray-800 font-bold"
                  style={{ fontSize: "22px" }}
                >
                  {loginData.nom} {loginData.prenom}
                </h1>
              </div>
              <div className="mt-2 flex items-center justify-center">
                <h1 className="text-gray-600" style={{ fontSize: "18px" }}>
                  Enseignant à FSTBM
                </h1>
              </div>
              <div className="flex items-center justify-center mt-2">
                <h1 className="text-gray-600" style={{ fontSize: "18px" }}>
                  {loginData.address}
                </h1>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Paper
            className="w-[690px] mt-4 h-full"
            style={{ fontFamily: "cursive" }}
          >
            <div
              className="grid grid-cols-12 py-4"
              style={{ fontSize: "18px" }}
            >
              <h1 className="pl-6 col-span-3 text-gray-900 font-semibold">
                Nom et Prénom
              </h1>
              <span className="col-span-9 ml-4 text-gray-500 font-semibold">
                {loginData.nom} {loginData.prenom}
              </span>
            </div>
            <div className="bg-gray-300 h-[1px] w-[642px] ml-6"></div>
            <div
              className="grid grid-cols-12 py-4"
              style={{ fontSize: "18px" }}
            >
              <h1 className="pl-6 col-span-3 text-gray-900 font-semibold">
                Adresse E-mail
              </h1>
              <span className="col-span-9 ml-4 text-gray-500 font-semibold">
                {loginData.email}
              </span>
            </div>
            <div className="bg-gray-300 h-[1px] w-[642px] ml-6"></div>
            <div
              className="grid grid-cols-12 py-4"
              style={{ fontSize: "18px" }}
            >
              <h1 className="pl-6 col-span-3 text-gray-900 font-semibold">
                Equipe
              </h1>
              <span className="col-span-9 ml-4 text-gray-500 font-semibold">
                {/* Equipe Mathématiques et Interactions */}
                {loginData.equipe ? loginData.equipe.nomEquipe : "----"}
              </span>
            </div>
            <div className="bg-gray-300 h-[1px] w-[642px] ml-6"></div>
            <div
              className="grid grid-cols-12 py-4"
              style={{ fontSize: "18px" }}
            >
              <h1 className="pl-6 col-span-3 text-gray-900 font-semibold">
                Laboratoire
              </h1>
              <span className="col-span-9 ml-4 text-gray-500 font-semibold">
                {loginData.laboratoire
                  ? loginData.laboratoire.nomLaboratoire
                  : "----"}
              </span>
            </div>
            <div className="bg-gray-300 h-[1px] w-[642px] ml-6"></div>
            <div
              className="grid grid-cols-12 py-4"
              style={{ fontSize: "18px" }}
            >
              <h1 className="pl-6 col-span-3 text-gray-900 font-semibold">
                Adresse
              </h1>
              <span className="col-span-9 ml-4 text-gray-500 font-semibold">
                {loginData.address}
              </span>
            </div>
          </Paper>
        </Grid>
        <Grid>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

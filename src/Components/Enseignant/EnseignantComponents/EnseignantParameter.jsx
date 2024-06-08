import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
export default function EnseignantParameter({ loginData }) {
  const [enseignantUpdated, setUpdatedEnseignant] = useState({
    nom: loginData.nom,
    prenom: loginData.prenom,
    email: loginData.email,
    tele: loginData.tele,
    address: loginData.address,
    profile: loginData.profile,
  });
  console.log(enseignantUpdated);
  const REST_API_BASE_URL = `http://localhost:8080/FSTBM/Enseignant/updateEnseignant/${loginData.id}`;
  const updateEnseignant = (enseignant) => {
    return axios.post(REST_API_BASE_URL, enseignant);
  };

  const submitUpdate = () => {
    updateEnseignant(enseignantUpdated).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="mr-9 ml-14 my-7 rounded-lg bg-white">
      <div
        className="grid grid-cols-2 gap-44 rounded-md px-4"
        style={{ backgroundColor: "#5c5b5b" }}
      >
        <div
          className="flex justify-start items-center text-2xl"
          style={{ color: "#FF6500", fontFamily: "cursive" }}
        >
          <h1>Modifier votre informations</h1>
        </div>
        <div className="ml-72">
          <img
            src={require("./../../../pictures/updateIcon.webp")}
            className="w-24 h-24"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-8">
        <div>
          <label
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Nom
          </label>
          <br />
          <TextField
            id="outlined-basic"
            className="EnseignantField w-72"
            onChange={(e) => {
              setUpdatedEnseignant({
                ...enseignantUpdated,
                nom: e.target.value.trim(),
              });
              // document.getElementById("nom-error").style.visibility = "hidden";
            }}
          />
          <br />
          <label style={{ color: "red", visibility: "hidden" }} id="nom-error">
            *Ce champ est obligatoitre !
          </label>
        </div>
        <div>
          <label
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Prénom
          </label>
          <br />
          <TextField
            id="outlined-basic"
            className="EnseignantField w-72"
            onChange={(e) => {
              setUpdatedEnseignant({
                ...enseignantUpdated,
                prenom: e.target.value.trim(),
              });
              // document.getElementById("nom-error").style.visibility = "hidden";
            }}
          />
          <br />
          <label
            style={{ color: "red", visibility: "hidden" }}
            id="prenom-error"
          >
            *Ce champ est obligatoitre !
          </label>
        </div>

        <div>
          <label
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Email
          </label>
          <br />
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            className="EnseignantField"
            onChange={(e) => {
              setUpdatedEnseignant({
                ...enseignantUpdated,
                email: e.target.value.trim(),
              });
              // document.getElementById("nom-error").style.visibility = "hidden";
            }}
          />
          <br />
          <label
            style={{ color: "red", visibility: "hidden" }}
            id="email-error"
          >
            *Ce champ est obligatoitre !
          </label>
        </div>
        <div>
          <label
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Contact
          </label>
          <br />
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            className="EnseignantField"
            onChange={(e) => {
              setUpdatedEnseignant({
                ...enseignantUpdated,
                tele: e.target.value.trim(),
              });
              // document.getElementById("nom-error").style.visibility = "hidden";
            }}
          />
          <br />
          <label style={{ color: "red", visibility: "hidden" }} id="tele-error">
            *Ce champ est obligatoitre !
          </label>
        </div>
        <div>
          <label
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Adresse
          </label>
          <br />
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            className="EnseignantField"
            onChange={(e) => {
              setUpdatedEnseignant({
                ...enseignantUpdated,
                address: e.target.value.trim(),
              });
              // document.getElementById("nom-error").style.visibility = "hidden";
            }}
          />
          <br />
          <label style={{ color: "red", visibility: "hidden" }}>
            *Ce champ est obligatoitre !
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant="contained"
          style={{ padding: "10px 20px", backgroundColor: "#FF6500" }}
          onClick={submitUpdate}
        >
          Modifier
        </Button>
      </div>
    </div>
  );
}

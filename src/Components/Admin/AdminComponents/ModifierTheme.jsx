import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import ImageUploaderTheme from "../../ImageUploaders/ImageUploaderTheme";
import { Button } from "@mui/material";
import { imageThemeName } from "../../ImageUploaders/ImageUploaderTheme";

export default function AjouterTheme() {
  const [themes, setThemes] = useState([]);
  const [themeAdded, addTheme] = useState({
    nomtheme: "",
    contentTheme: "",
    imagePath: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Theme/retournerTousLesThemes"
        );
        console.log("khalid");
        setThemes(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setThemes([]);
      }
    };

    fetchData();
  }, []);

  function AjouterTheme() {
    themeAdded.imagePath = imageThemeName();
    axios
      .post("http://localhost:8080/FSTBM/Admin/Theme/AjouterTheme",themeAdded)
      .then((response) => {setThemes(response.data)})
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  function supprimerTheme(event) {
    let id = event.target.parentElement.id
    axios.delete(`http://localhost:8080/FSTBM/Admin/Theme/SupprimerTheme/${id}`).then((response)=>{
      setThemes(response.data);
    }).catch((error)=>{
      console.log("Error: ",error)
    })
  }

  return (
    <>
      <div className="flex h-full">
        <div
          style={{ height: "700px" }}
          className="formulaire w-1/2 mr-5 bg-white shadow-md"
        >
          <h1
            style={{ fontFamily: "Poppins" }}
            className="pt-5 pb-5 pl-6 bg-slate-200 text-2xl border-b"
          >
            Ajouter un thème de recherche
          </h1>
          <div className="flex justify-center">
            <div className="w-9/12 h-96 mt-14">
              <lable
                style={{ fontSize: "20px", fontFamily: "Poppins" }}
                className="pl-3"
              >
                Titre
              </lable>
              <br />
              <TextField
                onChange={(e) => {
                  addTheme({ ...themeAdded, nomtheme: e.target.value });
                }}
                id="outlined-basic"
                className="w-full"
                value={themeAdded.nomtheme}
              />
              <br />
              <br />
              <lable
                style={{ fontSize: "20px", fontFamily: "Poppins" }}
                className="pl-3"
              >
                Déscription
              </lable>
              <br />
              <TextField
                id="outlined-multiline-static"
                onChange={(e) => {
                  addTheme({ ...themeAdded, contentTheme: e.target.value });
                }}
                className="w-full"
                multiline
                rows={6}
              />
              <br />
              <br />
              <label
                style={{ fontSize: "20px", fontFamily: "Poppins" }}
                className="pl-3"
              >
                Image
              </label>
              <br />
              <ImageUploaderTheme />
              <div className="mt-5 flex justify-center">
                <Button
                  style={{ backgroundColor: "#2d0560" }}
                  onClick={AjouterTheme}
                  variant="contained"
                  className="w-1/2 h-12"
                >
                  Ajouter
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "700px" }}
          className="formulaire h-full w-1/2 bg-white shadow-md overflow-auto"
        >
          <h1
            style={{ fontFamily: "Poppins" }}
            className="pt-5 pb-5 pl-6 bg-slate-200 text-2xl border-b"
          >
            Supprimer un thème de recherche
          </h1>
          <div className="flex justify-center">
            <div className="w-11/12 mt-10">
              {themes.map((theme) => {
                return (
                  <div
                    style={{ backgroundColor: "#2d0560" }}
                    className="w-full h-16 mb-4 flex border rounded-md"
                    key={theme.id}
                  >
                    <span
                      style={{ fontSize: "16px", fontFamily: "Roboto" }}
                      className="w-11/12 pt-5 pl-3 text-white"
                    >
                      {theme.nomtheme}
                    </span>
                    <DeleteIcon
                      style={{ fontSize: "30px", color: "red" }}
                      className="cursor-pointer mt-4 ml-1"
                      onClick={supprimerTheme}
                      key={theme.id}
                      id={theme.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

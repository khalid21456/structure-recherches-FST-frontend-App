import React from "react";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import axios from "axios";
export default function EnseignantEvenement({ loginData }) {
  const titre = useRef();
  const dateDebut = useRef();
  const datefin = useRef();
  const siteweb = useRef();
  const image = useRef();
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imagefileName, setImagefileName] = useState("unknown.jpg");
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [files, setFiles] = useState(null);
  const handleSnackBarClick = () => {
    setOpenSnackBar(true);
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };
  const REST_API_BASE_URL = `http://localhost:8080/FSTBM/Enseignant/organiser/${loginData.id}`;
  const addEvenement = (evenement) => {
    return axios.post(REST_API_BASE_URL, evenement);
  };
  const formValidate = () => {
    setErrors([]);
    const titreValue = titre.current.value;
    const dateDebutValue = dateDebut.current.value;
    const dateFinValue = datefin.current.value;
    const sitewebValue = siteweb.current.value;
    const imageValue = image.current.files[0];
    let isFormValide = true;

    if (titreValue.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ titre: "Titre est vide" },
        };
      });
      isFormValide = false;
    }
    if (dateDebutValue.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ dateD: "Date debut d'evenement est vide" },
        };
      });
      isFormValide = false;
    }
    if (dateFinValue.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ dateF: "Date fin d'evenement est vide" },
        };
      });
      isFormValide = false;
    }
    if (sitewebValue.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ siteWeb: "Le siteweb d'evenement est vide" },
        };
      });
      isFormValide = false;
    }
    if (!imageValue) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ image: "image de publication est vide" },
        };
      });
      // isFormValide = false;
    }
    setIsFormValid(isFormValide);
    return isFormValide;
  };
  const resetForm = () => {
    titre.current.value = "";
    dateDebut.current.value = "";
    datefin.current.value = "";
    image.current.value = "";
  };
  const handlChange = (e) => {
    formValidate();
  };
  const submitForm = (e) => {
    e.preventDefault();
    setImageUpload(null);
    setIsFormSent(false);
    if (formValidate()) {
      const evenement = {
        titre: titre.current.value,
        dateDebut: dateDebut.current.value,
        dateFin: datefin.current.value,
        siteweb: siteweb.current.value,
        imagePath: imagefileName,
        permession: 0,
      };
      const formData = new FormData();
      formData.append("file", imageUpload);
      try {
        const response = axios.post(
          "http://localhost:8080/FSTBM/images/uploads/Event",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image uploaded successfully:", response.data);
        setImagefileName(response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      addEvenement(evenement).then((response) => {
        console.log(response.data);
      });
      handleSnackBarClick();
      setIsFormSent(true);
      resetForm();
    }
    const titreValue = titre.current.value;
    const dateDebutValue = dateDebut.current.value;
    const dateFinValue = datefin.current.value;
    const imageValue = image.current.files[0];
  };
  const getError = (inputName) => {
    return errors[inputName];
  };
  const hasError = (inputName) => {
    return getError(inputName) !== undefined;
  };
  //-----------------
  const handleChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    if (selectedFiles && selectedFiles.length > 0) {
      setImagefileName(selectedFiles[0].name);
      setImageUpload(selectedFiles[0]);
    }
  };
  //-----------------
  const displayError = (inputName) => {
    const input = window[inputName];
    if (hasError(inputName)) {
      input.style.border = "2px solid red";
      return <div className="text-red-600">{getError(inputName)}</div>;
    }
    if (input !== undefined) {
      input.removeAttribute("style");
    }
  };
  const displayErrors = () => {
    return Object.entries(errors).map((error, key) => {
      const [input, message] = error;
      return (
        <li key={key}>
          {input} : {message}
        </li>
      );
    });
  };
  return (
    <div className="w-full h-auto">
      {/* {isFormSent ? (
        <div
          className="text-white mx-10 mt-7 ml-14 rounded-md h-16 flex items-center justify-start pl-3"
          style={{ backgroundColor: "#28a745" }}
        >
          Votre demande d'organiser l'evenement est <strong> envoyer</strong>
        </div>
      ) : (
        ""
      )} */}
      <div className="mx-10 my-7 rounded-lg bg-white">
        <h2
          className="text-white font-bold pl-8 py-4 text-xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, #061b9a, #0a1eaf, #1021c5, #1724db, #2026f1)",
          }}
        >
          Organiser un evenement
        </h2>
        <form className="pb-7">
          <div className="grid grid-cols-2 gap-4 px-12 py-6">
            <div className="mb-4 col-span-2">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Titre
              </label>
              <input
                type="text"
                id="titre"
                className="px-4 py-2 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
                ref={titre}
                onChange={handlChange}
              />
              {displayError("titre")}
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Date debut
              </label>
              <input
                type="date"
                id="dateD"
                className="px-4 py-2 w-64 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
                ref={dateDebut}
                onChange={handlChange}
              />
              {displayError("dateD")}
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Date fin
              </label>
              <input
                type="date"
                id="dateF"
                className="px-4 py-2 w-64 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
                ref={datefin}
                onChange={handlChange}
              />
              {displayError("dateF")}
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Siteweb
              </label>
              <input
                type="text"
                id="siteWeb"
                className="px-4 py-2 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
                placeholder="https://exemple.com"
                ref={siteweb}
                onChange={handlChange}
              />
              {displayError("siteWeb")}
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Image
              </label>
              <div
                className="flex flex-col justify-center items-center border-2 border-dashed cursor-pointer rounded-lg"
                style={{
                  height: "300px",
                  width: "500px",
                  borderColor: "#1475cf",
                }}
                onClick={() => document.querySelector("#image").click()}
              >
                <input
                  type="file"
                  id="image"
                  className="px-4 py-2 w-64 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
                  ref={image}
                  onChange={handleChange}
                  hidden
                />
                {imageUpload ? (
                  <img
                    src={files.length > 0 ? URL.createObjectURL(files[0]) : ""}
                    alt={imagefileName}
                    style={{
                      width: "500px",
                      height: "299px",
                      objectFit: "cover",
                    }}
                    className="rounded-lg"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      fill="#1475cf"
                    />
                  </svg>
                )}
              </div>
              {displayError("image")}
            </div>
            {/* <div className="col-span-3">
                      <label className="block text-white mb-1 font-semibold text-xl">Contenu</label>
                      <textarea cols="105" rows="10" className="px-4 py-1"></textarea>
                  </div> */}
          </div>
          <div className="flex justify-end mr-10 mt-4 mb-4">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#061b9a",
                padding: "12px 45px",
                marginRight: "20px",
                fontSize: "17px",
              }}
              onClick={submitForm}
              disabled={!isFormValid}
            >
              Envoyer
            </Button>
            <Button
              variant="outlined"
              style={{
                borderColor: "#574476",
                color: "#2d0560",
                padding: "12px 45px",
                fontSize: "17px",
              }}
              onClick={resetForm}
            >
              Annuler
            </Button>
            <Snackbar
              open={openSnackBar}
              autoHideDuration={6000}
              onClose={handleSnackBarClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              // sx={{ marginBottom: "550px" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Alert
                onClose={handleSnackBarClose}
                severity="success"
                variant="filled"
                sx={{
                  width: "600px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="ml-28" style={{ fontSize: "18px" }}>
                  {" "}
                  Votre evenement est enregistrer!
                </p>
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

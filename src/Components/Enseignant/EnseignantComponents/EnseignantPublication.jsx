import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function EnseignantPublication() {
  const titre = useRef();
  const image = useRef();
  const contenu = useRef();
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imagefileName, setImagefileName] = useState("No selected file");

  const REST_API_BASE_URL = `http://localhost:8080/FSTBM/Enseignant/publierEns/${2}`;
  const addpublication = (publication) => {
    return axios.post(REST_API_BASE_URL, publication);
  };
  const validateForm = () => {
    setErrors([]);
    const titreValue = titre.current.value;
    const imageValue = image.current.files[0];
    const contenuValue = contenu.current.value;
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

    if (!imageValue) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ image: "image de publication est vide" },
        };
      });
      isFormValide = false;
    }

    if (contenuValue.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ contenu: "Le contenu de publication est vide" },
        };
      });
      isFormValide = false;
    } else if (contenuValue.length <= 500) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{
            contenu:
              "Le contenu de publication il faut depasser 500 character (" +
              contenuValue.length +
              "/500)",
          },
        };
      });
      isFormValide = false;
    }

    setIsFormValid(isFormValide);
    return isFormValide;
  };

  const resetForm = () => {
    titre.current.value = "";
    image.current.value = "";
    contenu.current.value = "";
  };

  const handlChange = (e) => {
    validateForm();
  };

  const submitForm = (e) => {
    e.preventDefault();
    setImageUpload(null);
    setIsFormSent(false);
    if (validateForm()) {
      const publication = {
        titre: titre.current.value,
        contenu: contenu.current.value,
        imagePath: imagefileName,
      };
      addpublication(publication).then((response) => {
        console.log(response.data);
      });
      setIsFormSent(true);
      resetForm();
    }
  };

  const getError = (inputName) => {
    return errors[inputName];
  };
  const hasError = (inputName) => {
    return getError(inputName) !== undefined;
  };
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
    <div className="">
      {isFormSent ? (
        <div
          className="text-white mx-10 mt-7 ml-14 rounded-md h-16 flex items-center justify-start pl-3"
          style={{ backgroundColor: "#28a745" }}
        >
          Votre publication est <strong> publie</strong>
        </div>
      ) : (
        ""
      )}
      <div className="ml-14 mb-7 mt-7 rounded-lg bg-white">
        <h2
          className="text-white font-bold pl-8 py-4 text-xl"
          style={{ backgroundColor: "#25476A" }}
        >
          Publier une publication
        </h2>
        <form className="pb-7">
          <div className="px-12 py-6">
            <div className="mb-4">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Titre
              </label>
              <input
                type="text"
                id="titre"
                className="px-4 py-2 w-64 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
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
                Contenu
              </label>
              <textarea
                cols="105"
                rows="10"
                id="contenu"
                className="px-4 py-1 bg-transparent border-2 border-gray-500 rounded-sm hover:border-2 hover:border-sky-400"
                ref={contenu}
                onChange={handlChange}
              ></textarea>
              {displayError("contenu")}
            </div>
            <div>
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
                  className="px-4 py-1"
                  ref={image}
                  onChange={(event) => {
                    handlChange(event);
                    const files = event.target.files;
                    if (files && files.length > 0) {
                      setImagefileName(files[0].name);
                      setImageUpload(URL.createObjectURL(files[0]));
                    }
                  }}
                  hidden
                />
                {imageUpload ? (
                  <img
                    src={imageUpload}
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
          </div>
          <div className="flex justify-end mr-10 mt-4 mb-4">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#574476",
                padding: "12px 45px",
                marginRight: "20px",
                fontSize: "17px",
              }}
              onClick={submitForm}
              disabled={!isFormValid}
            >
              Publier
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
          </div>
        </form>
      </div>
    </div>
  );
}

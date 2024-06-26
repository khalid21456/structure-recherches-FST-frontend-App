import React from "react";
import axios from "axios";
import AddPublication from "./AddPublication";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
export default function DoctorantPublicationsList({ loginData }) {
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDataPublications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Doctorant/publicationsByDoctorant/${loginData.id}`
        );
        setPublications(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        setPublications([]);
      }
    };
    fetchDataPublications();
  }, []);
  const renderAddPublication = () => {
    ReactDOM.render(
      <AddPublication loginData={loginData} />,
      document.getElementById("DoctorantContent")
    );
  };
  // const renderPublicationDetails = (publication) => {
  //   ReactDOM.render(
  //     <PublicationDetails publication={publication} />,
  //     document.getElementById("EnseignantContent")
  //   );
  // };
  const splitText = (text, wordLimit) => {
    const words = text.split(" ");
    const firstPart = words.slice(0, wordLimit / 2).join(" ");
    const secondPart = words.slice(wordLimit / 2, wordLimit).join(" ");
    return { firstPart, secondPart };
  };
  const TextDisplay = ({ text, wordLimit }) => {
    const { firstPart, secondPart } = splitText(text, wordLimit);

    return (
      <p className="pr-2">
        {firstPart}
        <br />
        <span style={{ opacity: 0.5 }}>{secondPart}...</span>
      </p>
    );
  };
  const formatDate = (dateString, delimiter = "/") => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${delimiter}${month}${delimiter}${year}`;
  };
  return (
    <div className="w-full">
      {/* h-[1000px] */}
      <div className="mt-2">
        <h1
          className="flex items-center justify-center text-2xl font-bold"
          style={{ fontFamily: "cursive", color: "#0a1eaf" }}
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
          style={{ backgroundColor: "#c40c0c" }}
          onClick={renderAddPublication}
        >
          Publier
        </button>

        {publications.map((publication) => {
          const imagePath = `http://localhost:8080/FSTBM/readImages/Publication/${publication.imagePath}`;
          const imagePathProfile = `http://localhost:8080/FSTBM/readImages/Profile/${loginData.profile}`;
          return (
            <div className="w-full mt-3 h-64 bg-white rounded-md shadow-md flex">
              <div className="w-1/4">
                <img
                  src={imagePath}
                  alt={publication.titre}
                  className="w-full h-full rounded-s-md"
                />
              </div>
              <div className="w-9/12 h-56 bg-white">
                <div className="content">
                  <div className="w-11/12 h-14 flex ml-5 mt-3">
                    <div>
                      <img
                        className="w-14 h-14 rounded-full"
                        // src={require("../../../profiles/Mr-ElMourabit.png")}
                        src={imagePathProfile}
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
                        {loginData.prenom} {loginData.nom}
                      </label>
                      <p className="w-fit ml-3 text-slate-400">
                        Publier le {formatDate(publication.datePub, "/")}
                      </p>
                    </div>
                  </div>
                  <div className="ml-7 mt-4">
                    <h1
                      style={{ fontFamily: "Platypi", fontSize: "20px" }}
                      className="mb-2 text-blue-600"
                    >
                      {publication.titre}
                    </h1>
                    <p className="pr-2">
                      <TextDisplay text={publication.contenu} wordLimit={20} />
                    </p>
                  </div>
                  <div className="h-5 pb-2 mt-12 flex justify-end">
                    <label
                      className="mr-7 underline cursor-pointer hover:text-blue-500"
                      style={{ fontFamily: "Roman", fontSize: "18px" }}
                      // onClick={() => renderPublicationDetails(publication)}
                    >
                      Voir+
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

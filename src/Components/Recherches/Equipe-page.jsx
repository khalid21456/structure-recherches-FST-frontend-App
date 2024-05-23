import React, { useState, useEffect } from "react";
import axios from "axios";
import LaboMembre from "./LaboMembre";
import EquipeMembre from "./EquipeMembre";
import PublicationCard from "../Publications/PublicationCard";
import { Public } from "@mui/icons-material";

export default function EquipePage(props) {
  const [equipe, setEquipe] = useState({
    nomEquipe: "",
    responsable: {},
    acronyme: "",
    membres: [],
  });

  const [authors, setAuthors] = useState([]);
  const Authors = [];

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchDataEquipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Equipe/getById/${props.ident}`
        );
        setEquipe(response.data);
        equipe.membres.forEach((element) => {
          Authors.push(element.nom);
        });
        setAuthors(Authors);
        console.log(authors);

        const responsePubs = await axios.post(
          "http://localhost:8080/FSTBM/scopus/publications/byAuthors",
          authors,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        setPublications(responsePubs.data);

        console.log(responsePubs.data);
      } catch (error) {
        // console.log(error.response.data.message);
        setEquipe({});
      }
    };

    fetchDataEquipe();
  }, []);

  return (
    <div className="equipe-page-container bg-gray-100">
      <div className="image-back">
        <div className="pt-40 pl-24">
          <h1
            className="text-7xl max-xl:text-6xl p-3 text-white cursor-default hover:transition-colors w-fit bg-gray-500 bg-opacity-50"
            style={{ fontFamily: "Platypi" }}
          >
            <span>{equipe.nomEquipe}</span>
          </h1>
          <div className="w-40 h-3 bg-yellow-400 mt-5"></div>
        </div>
      </div>
      <div className="membre-equipe max-xl:mr-14">
        <div style={{ marginLeft: "290px" }} className="flex mt-20 ml-52">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className="text-4xl pl-5 cursor-default"
          >
            Responsable d'équipe
          </h1>
        </div>
        <div>
          <div
            style={{ marginLeft: "290px" }}
            className="w-1/3 rounded-md hover:bg-gray-50 bg-white shadow-sm h-24 mt-8 border border-gray-100"
          >
            <div className="mt-4 ml-10">
              <h1 className="text-2xl" style={{ fontFamily: "Roboto" }}>
                {equipe.responsable.prenom} {equipe.responsable.nom}
              </h1>
              <p>{equipe.responsable.email}</p>
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

        <EquipeMembre membres={equipe.membres} />
      </div>
      <div style={{ marginLeft: "290px" }} className="flex mt-20 ml-52">
        <div
          style={{ borderLeftWidth: "14px" }}
          className="h-15 border-l-yellow-400"
        ></div>
        <h1
          style={{ fontFamily: "Roboto" }}
          className="text-4xl pl-5 cursor-default"
        >
          Publications
        </h1>
      </div>
      <div className="publication-equipe">
        <div className="">
          {publications.map((publication) => (
           <>
            <div>mioazjdla</div>
            <PublicationCard
              
              lien={publication.link[2]["@href"]}
              namePub={publication["prism:publicationName"]}
              title={publication["dc:title"]}
              creator={publication["dc:creator"]}
              datePub={publication["prism:coverDisplayDate"]}
            />
            </> 
          ))}
        </div>
      </div>
    </div>
  );
}

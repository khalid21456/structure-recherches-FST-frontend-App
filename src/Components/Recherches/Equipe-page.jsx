import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import LaboMembre from "./LaboMembre";
import EquipeMembre from "./EquipeMembre";
import PublicationCard from "../Publications/PublicationCard";
import { Public } from "@mui/icons-material";
// import swr from "swr";
export default function EquipePage(props) {
  const [equipe, setEquipe] = useState({
    nomEquipe: "",
    responsable: {},
    acronyme: "",
    membres: [],
  });

  const [authors, setAuthors] = useState([]);
  const Authors = [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [publications, setPublications] = useState([]);

  // const fetchPubs = async () => {
  //   return fetch("http://localhost:8080/FSTBM/scopus/publications?author=Afraites")
  //           .then((res) => res.json())
  //           .then((d) => setPublications(d))
  //   }

  useEffect(() => {
    const fetchDataEquipe = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Equipe/getById/${props.ident}`
        );
        setEquipe(response.data);
        const url = new URL("http://localhost:8080/FSTBM/scopus/publications");
        url.searchParams.append("author", props.nomRespo);
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setPublications(data);
          });
      } catch (error) {
        setError(
          "There was an error fetching the publications. Please try again later."
        );
        setEquipe({});
      } finally {
        setLoading(false);
      }
    };

    fetchDataEquipe();
  }, []);

  const pubsRef = useRef();
  const refMembres = useRef();
  const myRef = useRef();
  let minHeight = 2200;
  let heightMembres = equipe.membres.length * 40;
  let heightPubs = publications.length * 260;
  let heightAdded = heightMembres + heightPubs;
  let newHeight = minHeight + heightAdded;

  // if (publications.length == 0) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }
  if (myRef.current) {
    myRef.current.style.height = newHeight + "px";
  }
  if (pubsRef.current) {
    pubsRef.current.style.height = heightPubs + "px";
  }
  if (refMembres.current) {
    refMembres.current.style.height = heightMembres + "px";
  }

  return (
    <div ref={myRef} className="equipe-page-container bg-gray-100 h-auto">
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
        <div>
          <EquipeMembre membres={equipe.membres} />
        </div>
      </div>
      <div style={{ marginLeft: "290px" }} className="flex mt-36 ml-52">
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
        {/* <button
          onClick={renderPublication}
          className="ml-10 border bg-white hover:bg-yellow-300 transition-colors rounded-lg px-6 "
        >
          Afficher le publications
        </button> */}
      </div>
      <div ref={pubsRef} className="flex justify-center">
        <div className="">
          {publications.map((publication, index) => (
            <PublicationCard
              key={index}
              lien={publication.link[2]["@href"]}
              namePub={publication["prism:publicationName"]}
              title={publication["dc:title"]}
              creator={publication["dc:creator"]}
              datePub={publication["prism:coverDisplayDate"]}
              desc={publication["subtypeDescription"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

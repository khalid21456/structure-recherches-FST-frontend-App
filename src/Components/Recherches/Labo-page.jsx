import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import LaboMembre from "./LaboMembre";
import DoctorantLabo from "./Doctorant-labo";
import PublicationCard from "../Publications/PublicationCard";
import ThemeCard from "./ThemeCard";

export default function LaboPage(props) {
  const [labo, setLabo] = useState({
    nomLaboratoire: "",
    responsable: {},
    acronyme: "",
    membresLabo: [],
    themes: [],
  });
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const fetchDataLabo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Laboratoire/getById/${props.ident}`
        );
        setLabo(response.data);
        console.log(labo);
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
        console.log(error.response.data.message);
        setLabo({});
      }
    };

    fetchDataLabo();
  }, []);

  const [countDoctorant, setCountDoctorant] = useState();
  useEffect(() => {
    let doctorants = [];
    labo.membresLabo.forEach((membre) => {
      doctorants.push(membre.doctorants);
    });
    setCountDoctorant(doctorants.length);
  });

  const pubsRef = useRef();
  const themeRef = useRef();
  const refMembres = useRef();
  const refDoctorants = useRef();
  const myRef = useRef();
  let minHeight = 2200;
  let minHeightMembre = 300;
  let minHeightDoctorants = 300;
  let minHeightTheme = 100;

  let heightMembres = labo.membresLabo.length * 100;
  let heightDoctorants = countDoctorant * 100;
  let heightThemes = labo.themes.length * 300;
  let heightPubs = publications.length * 260;
  let heightAdded = heightMembres + heightPubs + heightDoctorants;
  let newHeight = minHeight + heightAdded;


  if (myRef.current) {
    myRef.current.style.height = newHeight + "px";
  }
  if (pubsRef.current) {
    pubsRef.current.style.height = heightPubs + "px";
  }
  if (refMembres.current) {
    refMembres.current.style.height = heightMembres + minHeightMembre + "px";
  }
  if (refDoctorants.current) {
    refMembres.current.style.height = heightDoctorants + minHeightDoctorants + "px";
  }
  if (themeRef.current) {
    themeRef.current.style.height = (minHeightTheme+heightThemes) + "px";
  }


  return (
    <div ref={myRef} className="labo-page-container bg-gray-100">
      <div className="image-back-labo">
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
      <div className="membres max-xl:mr-14" ref={refMembres}>
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
              <h1 className="text-2xl" style={{ fontFamily: "Roboto" }}>
                {labo.responsable.prenom} {labo.responsable.nom}
              </h1>
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

        <LaboMembre membresLabo={labo.membresLabo} />
      </div>
      <div className="doctorant-equipe max-xl:mr-14" ref={refDoctorants}>
        <div style={{ marginLeft: "290px" }} className="flex mt-8 ml-52">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className="text-4xl pl-5 cursor-default"
          >
            Doctorants
          </h1>
        </div>
        <div>
          <DoctorantLabo identLabo={props.ident} />
        </div>
      </div>
      <div style={{ marginLeft: "290px" }} className="flex mt-10 ml-52">
        <div
          style={{ borderLeftWidth: "14px" }}
          className="h-15 border-l-yellow-400"
        ></div>
        <h1
          style={{ fontFamily: "Roboto" }}
          className="text-4xl pl-5 cursor-default"
        >
          Themes de recherches
        </h1>
      </div>
      <div ref={themeRef} className="flex justify-center">
        <div className="w-[2000px]">
          {labo.themes.map((Theme, index) => (
            <ThemeCard
              key={index}
              title={Theme.nomtheme}
              desc={Theme.contentTheme}
              image={Theme.imagePath}
            />
          ))}
        </div>
      </div>
      <div
        style={{ marginLeft: "290px", height: "40px" }}
        className="flex mt-20 ml-52"
      >
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
      <div ref={pubsRef} className="flex justify-center">
        <div className="w-[1165px]">
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

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PublicationCard from "../Publications/PublicationCard";
import "../../style/Recherche.css";

export default function ProfileRech(props) {
  const [enseignant, setEnseignant] = useState({});
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const fetchPubs = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:8080/FSTBM/Admin/Enseignant/getById/${props.ident}`
        // );
        // setEnseignant(response.data);
        // console.log(enseignant)
        const url = new URL("http://localhost:8080/FSTBM/scopus/publications");
        url.searchParams.append("author", props.nomMembre);
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setPublications(data);
            console.log(data);
          });
      } catch (error) {
        console.log(error);
        setPublications([]);
      }
    };
    fetchPubs();
  }, []);

  useEffect(() => {
    console.log(props.ident);
    const fetchMembre = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Enseignant/getById/${props.ident}`
        );
        setEnseignant(response.data);
        console.log(enseignant);
      } catch (error) {
        console.log(error);
        setEnseignant([]);
      }
    };
    fetchMembre();
  }, []);

  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/FSTBM/readImages/Profile/" + enseignant.profile,
        {
          responseType: "arraybuffer",
        }
      )
      .then((response) => {
        const imageData = new Blob([response.data]);
        const imageUrl = URL.createObjectURL(imageData);
        setImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <>
      <div className="header-profile w-full h-[250px] bg-green-500">
        <div className="absolute top-60  left-20">
          <img
            src={image}
            // src={require("../../profiles/Mr-Mouain.jpg")}
            className="w-52 h-52 border-4  rounded-full"
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-[800px] bg-slate-100">
          <div className="mt-32">
            <p style={{ fontFamily: "Poppins" }} className="text-3xl pl-16">
              {enseignant.nom} {enseignant.prenom}
            </p>
          </div>
          <div className="mt-5">
            <p style={{ fontFamily: "Poppins" }} className=" pl-16">
              Enseignant à la faculté des sciences et technique Béni Mellal
            </p>
          </div>
        </div>
        <div className="pb-20 pl-20 pr-16 pt-14">
          {publications.map((publication, index) => (
            <PublicationCard
              key={index}
              lien={publication.link[2]["@href"]}
              namePub={publication["prism:publicationName"]}
              title={publication["dc:title"]}
              creator={publication["dc:creator"]}
              datePub={publication["prism:coverDisplayDate"]}
              desc={publication["subtypeDescription"]}
              style={{ marginLeft: "0px" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PublicationCard from "../Publications/PublicationCard";

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
        fetch("http://localhost:8080/FSTBM/scopus/publications?author=Bouarich,A")
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

  return (
        <div className="">
            
            {
                
            publications.map((publication,index) => (
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
  )
}

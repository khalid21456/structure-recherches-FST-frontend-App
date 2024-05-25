import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function PublicationCard(props) {
  //   const [publications, setPublications] = useState([]);

  //   useEffect(() => {
  //     const fetchPublications = async () => {
  //       try {
  //         const allPublications = [];
  //         for (const member of props.equipe) {
  //           const response = await axios.get(
  //             `http://localhost:8080/FSTBM/scopus/publications?author=${encodeURIComponent(
  //               member.nom
  //             )}`
  //           );
  //           const memberPublications = response.data["search-results"]?.entry || [];
  //           allPublications.push(...memberPublications);
  //         }
  //         setPublications(allPublications);
  //         console.log(publications)
  //       } catch (error) {
  //         console.error("There was an error fetching the publications!", error);
  //       }
  //     };

  //     fetchPublications();
  //   }, []);

  return (
    <div className="ml-[290px]">
      <div className="pubCard mt-7 w-4/5 h-[250px] bg-white rounded-md shadow-md">
        <p className="pl-5 pt-3">{props.desc}</p>
        <div className="w-11/12 ml-5 mt-5">
          <h1 style={{ fontFamily: "Platypi" }} className="text-2xl">
            {props.title}
          </h1>
        </div>
        <p style={{ fontFamily: "Poppins"}} className="pl-5 pt-3">{props.creator}</p>
        <div className="mt-5 flex justify-start">
            <p className="pl-5 text-gray-400 font-bold italic">{props.namePub}, </p>
            <p><pre>  {props.datePub}</pre> </p>
        </div>
        <div className="flex justify-end mr-6">
            <a href={props.lien} target="_blank">
                <p className="underline hover:text-yellow-300 text-blue-600 cursor-pointer">Voir La publication</p>
            </a>
        </div>
      </div>
    </div>
  );
}

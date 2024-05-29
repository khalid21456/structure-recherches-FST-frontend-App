import React from "react";
import "../../style/Departement.css";
import DepartementCard from "./DepartementCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import departementData from "../../data/departements";

window.addEventListener("scroll", () => {
  let cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
    var windowHeight = window.innerHeight;
    var cardTop = cards[i].getBoundingClientRect().top;
    var cardPoint = 150;
    if (cardTop < windowHeight - cardPoint) {
      cards[i].classList.add("active");
    }
  }
});

export default function Departement() {
  return (
    <div className="Departement-Container">
      <div className="presentDepartement">
        <div className="pt-40 pl-24">
          <h1
            className="departement-title text-[80px] text-white cursor-default hover:transition-colors w-fit"
            style={{ fontFamily: "Platypi" }}
          >
            Départements
          </h1>
          <div className="w-40 h-3 bg-yellow-400 mt-5"></div>
          <div className=" text-white pt-4">
            <p
              className="desc w-1/2 text-justify"
              style={{ fontFamily: "Roboto", fontSize: "17px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              fuga esse sequi recusandae nulla, ipsa fugiat, eaque quisquam
              repudiandae, labore iusto? Autem eligendi earum nesciunt maxime
              tempora, consectetur quaerat dolore.
            </p>
          </div>
        </div>
      </div>
      <div className="Presentation">
        <div className="presentation-Title mt-20 ml-20">
          <div className="flex pl-1 max-xl:pl-5">
            <div
              style={{ borderLeftWidth: "14px" }}
              className="h-15 border-l-yellow-400"
            ></div>
            <h1
              style={{ fontFamily: "Roboto" }}
              className="text-5xl pl-5 cursor-default"
            >
              Présentation
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p
            style={{ fontFamily: "Roboto", fontSize: "20px" }}
            className="w-2/3 max-xl:w-4/5 text-justify mt-5"
          >
            La Faculté des Sciences et Techniques de Beni Mellal (FSTBM)
            relevant de l’Université Sultan Moulay Slimane a été créée en 1994.
            C’est un établissement public d’enseignement supérieur scientifique
            et technique à accès régulé dont le but est de développer des
            programmes d’enseignement et de recherche répartis sur quatre cycles
            (Licence, Master, Cycle d’Ingénieur et Doctorat) offerts par neuf
            départements : Sciences de la Vie, Sciences de la Terre, Chimie et
            Environnement, Physique, Mathématiques, Informatique, Génie
            Electrique, Génie Mécanique et Langues et Communication.
          </p>
        </div>
        <div className="flex justify-center">
          <p
            style={{ fontFamily: "Roboto", fontSize: "20px" }}
            className="w-2/3  max-xl:w-4/5 text-justify mt-5"
          >
            La FSTBM a pour vocation :
          </p>
        </div>
        <div className="flex justify-center">
          <ul
            id="list-vocation"
            style={{ fontFamily: "Roboto", fontSize: "20px" }}
            className="w-2/3  max-xl:w-4/5 ml-9"
          >
            <li className="mt-5">
              La formation des lauréats dans les domaines les mieux adaptés aux
              besoins du marché d’emploi et à l’évolution technologique de la
              région
            </li>
            <li>
              La contribution au développement économique et social de la région
              à travers une réelle intégration de la faculté dans son
              environnement
            </li>
            <li>
              L’offre aux étudiants d’une formation de base scientifique et
              technique de haut niveau adaptée à l’évolution technologique,
              permettant aux lauréats d’intégrer la vie active
            </li>
            <li className="text-justify">
              Le développement d’une culture d’entreprise. En effet, dans le
              cadre de la coopération université-entreprise, les étudiants de
              certaines disciplines, sont confiés à des entreprises partenaires
              intervenant au niveau des stages et projets de fin d’études (PFE).
              Cet échange permet, d’une part, à l’étudiant d’avoir une meilleure
              connaissance du milieu du travail, et à l’entreprise de profiter
              des compétences des étudiants et du milieu académique, d’autre
              part
            </li>
          </ul>
        </div>
      </div>
      <div
        className="Departements bg-gray-50 mt-14"
        style={{ height: "1300px" }}
      >
        <div className="departement-header pt-14 ml-52">
          <div className="flex pl-1 max-xl:pl-32">
            <div
              style={{ borderLeftWidth: "14px" }}
              className="h-15 border-l-yellow-400"
            ></div>
            <h1
              style={{ fontFamily: "Roboto" }}
              className="text-5xl pl-5 cursor-default"
            >
              Départements
            </h1>
          </div>
        </div>
        <div
          className="Departements-content max-xl:ml-32 mt-16 ml-72 "
          style={{ width: "1280px" }}
        >
          <Grid container rowSpacing={4}>
            {departementData.map((departement) => {
              return (
                <Grid item xs={4} className="card" key={departement.id}>
                  {DepartementCard(departement)}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

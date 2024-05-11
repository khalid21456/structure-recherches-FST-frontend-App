import React from "react";
import Marquee from "react-fast-marquee";
function AccueilMarquee() {
  return (
    <div className="relative flex items-center justify-between py-5 shadow-lg">
      <div className="absolute inset-y-0 left-0 flex items-center h-full mr-2 bg-blue-500 text-white font-bold flex items-center px-2">
        Actualités
      </div>
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
        className="ml-24 cursor-pointer"
      >
        <div className="flex items-center">
          <span className="mr-4">
            CALENDRIER DES EXAMENS DE LA SESSION DE PRINTEMPS 2023-2024
          </span>
          <span className="mr-4">
            PROJET FORMED : APPEL À CANDIDATURE POUR DES BOURSES 2024
          </span>
          <span className="mr-4">
            ORACLE’S LATEST RESEARCH IN AI AND DATA ANALYTICS
          </span>
          <span className="mr-4">
            APPEL À CANDIDATURE POUR DES BOURSES 2024
          </span>
          <span className="mr-4">
            APPEL À CANDIDATURE PROJET FORMED – UNIMED
          </span>
          <span className="mr-3">
            LANCEMENT D’UN APPEL À CANDIDATURE MOROCCO 200
          </span>
        </div>
      </Marquee>
    </div>
  );
}

export default AccueilMarquee;

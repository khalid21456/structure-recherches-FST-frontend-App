import React, { useState } from "react";
import EnseignantSideBar from "../Enseignant/EnseignantSideBar";
import EnseignantDashNav from "./../Enseignant/EnseignantDashNav.jsx";

export default function Enseignant({ loginData }) {
  console.log("Enseignant.js");
  return (
    <>
      <section className="flex">
        <aside>
          <EnseignantSideBar loginData={loginData} />
        </aside>
        <main>
          <EnseignantDashNav loginData={loginData} />
        </main>
      </section>
    </>
  );
}

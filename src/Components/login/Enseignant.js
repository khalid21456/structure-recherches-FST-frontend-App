import React from "react";
import EnseignantSideBar from "../Enseignant/EnseignantSideBar";
import EnseignantDashNav from "./../Enseignant/EnseignantDashNav.jsx";

export default function Enseignant({ enseignant }) {
  console.log("Enseignant.js" + enseignant);
  return (
    <>
      <section className="flex">
        <aside>
          <EnseignantSideBar enseignant={enseignant} />
        </aside>
        <main>
          <EnseignantDashNav enseignant={enseignant} />
        </main>
      </section>
    </>
  );
}

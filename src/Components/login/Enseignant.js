import React from "react";
import EnseignantSideBar from "../Enseignant/EnseignantSideBar";
import EnseignantDashNav from "./../Enseignant/EnseignantDashNav.jsx";

export default function Enseignant() {
  return (
    <>
      <section className="flex">
        <aside>
          <EnseignantSideBar />
        </aside>
        <main>
          <EnseignantDashNav />
        </main>
      </section>
    </>
  );
}
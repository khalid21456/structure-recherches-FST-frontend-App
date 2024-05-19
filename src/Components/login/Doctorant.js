import React from "react";
import DoctorantSideBar from "../Doctorant/DoctorantSideBar";
import DoctorantDashNav from "../Doctorant/DoctorantDashNav";

export default function Doctorant() {
  return (
    <>
      <section className="flex">
        <aside>
          <DoctorantSideBar />
        </aside>
        <main>
          <DoctorantDashNav />
        </main>
      </section>
    </>
  );
}

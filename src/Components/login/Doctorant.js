import React from "react";
import DoctorantSideBar from "../Doctorant/DoctorantSideBar";
import DoctorantDashNav from "../Doctorant/DoctorantDashNav";

export default function Doctorant({ loginData }) {
  return (
    <>
      <section className="flex">
        <aside>
          <DoctorantSideBar loginData={loginData} />
        </aside>
        <main>
          <DoctorantDashNav loginData={loginData} />
        </main>
      </section>
    </>
  );
}

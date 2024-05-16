import "./App.css";
import Accueil from "./Components/index/Accueil";
import Navbar from "./Components/index/Navbar";
import Login from "./Components/login/Login";
import Footer from "./Components/index/Footer";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import EnseignantProfileCard from "./Components/Enseignant/EnseignantProfileCard";
import EnseignantSideBar from "./Components/Enseignant/EnseignantSideBar";
import EnseignantDashboard from "./Components/Enseignant/EnseignantDashboard";
import EnseignantAccueil from "./Components/Enseignant/EnseignantComponents/EnseignantAccueil";
import RechercheAdmin from "./Components/Admin/AdminComponents/RechercheAdmin";
import EnseignantAdmin from "./Components/Admin/AdminComponents/EnseignantAdmin";
import DoctorantAdmin from "./Components/Admin/AdminComponents/DoctorantAdmin";
import AdminAccueil from "./Components/Admin/AdminComponents/AdminAccueil";
import EvenementDetail from "./Components/Admin/AdminComponents/EvenementDetail";
import EvenementAdmin from "./Components/Admin/AdminComponents/EvenementAdmin";
import SideBar from "./Components/Admin/SideBar";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section>
        <aside></aside>
        <main id="main">
          <Accueil />
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

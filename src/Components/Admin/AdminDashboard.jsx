import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../style/AdminDashboard.css";
import DashboardNav from "./DashboardNav";
import AdminAccueil from "./AdminComponents/AdminAccueil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnseignantAdmin from "./AdminComponents/EnseignantAdmin";
import DoctorantAdmin from "./AdminComponents/DoctorantAdmin";
import EvenementAdmin from "./AdminComponents/EvenementAdmin";
import EquipeAdmin from "./AdminComponents/EquipeAdmin";
import LaboratoireAdmin from "./AdminComponents/LaboratoireAdmin";
import RechercheAdmin from "./AdminComponents/RechercheAdmin";
import ModifierTheme from "./AdminComponents/ModifierTheme"

export default function AdminDashboard() {
  return (
      <div className="AdminDashboard-container overflow-auto bg-gray-100">
        <DashboardNav />
        <div id="dashboardContent" className="mt-3 ml-3">
          <Routes>
            <Route path="/" element={<AdminAccueil />} />
            <Route path="/Admin/Enseignant" element={<EnseignantAdmin />} />
            <Route path="/Admin/Doctorant" element={<DoctorantAdmin />} />
            <Route path="/Admin/Event" element={<EvenementAdmin />} />
            <Route path="/Admin/Recherche" element={<RechercheAdmin />} />
            <Route path="/Admin/Equipe" element={<EquipeAdmin />} />
            <Route path="/Admin/Laboratoire" element={<LaboratoireAdmin />} />
            <Route path="/Admin/Recherche/ModifierTheme" element={<ModifierTheme/>}/> 
          </Routes>
        </div>
      </div>
  );
}

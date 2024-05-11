import "./App.css";
import Accueil from "./Components/index/Accueil";
import Navbar from "./Components/index/Navbar";
import Login from "./Components/login/Login";
import Footer from "./Components/index/Footer";
import SideBar from "./Components/Admin/SideBar";
import AdminProfileCard from "./Components/Admin/AdminProfileCard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import EnseignantProfileCard from "./Components/Enseignant/EnseignantProfileCard";
import EnseignantSideBar from "./Components/Enseignant/EnseignantSideBar";
import EnseignantDashboard from "./Components/Enseignant/EnseignantDashboard";
import EnseignantAccueil from "./Components/Enseignant/EnseignantComponents/EnseignantAccueil";
import RechercheAdmin from "./Components/Admin/AdminComponents/RechercheAdmin";
import EnseignantAdmin from "./Components/Admin/AdminComponents/EnseignantAdmin";
import DoctorantAdmin from "./Components/Admin/AdminComponents/DoctorantAdmin";
import AdminAccueil from "./Components/Admin/AdminComponents/AdminAccueil";

function App() {
  return (
    <>
      {/* <nav className="hidden">  
        <Navbar/>
      </nav>
      <section className="mainSection flex justify-normal">
      <aside>
        <EnseignantSideBar/>
      </aside>
      <main id="main">
        <EnseignantDashboard/>
      </main>
      </section>
      <footer className="hidden">
        <Footer/>
      </footer> */}
      <nav>
        <Navbar />
      </nav>
      <main id="main">
        <Accueil />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

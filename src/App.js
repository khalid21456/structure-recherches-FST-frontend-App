import "./App.css";
import Accueil from "./Components/index/Accueil";
import Navbar from "./Components/index/Navbar";
import Login from "./Components/login/Login";
import Footer from "./Components/index/Footer";
import SideBar from "./Components/Admin/SideBar";
import AdminProfileCard from "./Components/Admin/AdminProfileCard";
import AdminDashboard from './Components/Admin/AdminDashboard'
import EnseignantProfileCard from './Components/Enseignant/EnseignantProfileCard'
import EnseignantSideBar from "./Components/Enseignant/EnseignantSideBar";
import EnseignantDashboard from './Components/Enseignant/EnseignantDashboard'
function App() {
  return (
    <>
      <nav className="hidden">  
        <Navbar/>
      </nav>
      <section className="mainSection flex justify-normal">
      <aside>
        <SideBar/>
      </aside>
      <main id="main">
        <AdminDashboard/>
      </main>
      </section>
      <footer className="hidden">
        <Footer/>
      </footer>
    </>
  );
}

export default App;

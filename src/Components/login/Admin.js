import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import SideBar from "../Admin/SideBar";


function Admin() {
  return (
    <>
      <BrowserRouter>
      <section className="mainSection flex justify-normal">
        <aside>
          <SideBar />
        </aside>
        <main id="main">
          <AdminDashboard />
        </main>
      </section>
      </BrowserRouter>
    </>
  );
}

export default Admin;

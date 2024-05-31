import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import SideBar from "../Admin/SideBar";

function Admin({ loginData }) {
  return (
    <>
      <BrowserRouter>
        <section className="mainSection flex justify-normal">
          <aside>
            <SideBar loginData={loginData} />
          </aside>
          <main id="main">
            <AdminDashboard loginData={loginData} />
          </main>
        </section>
      </BrowserRouter>
    </>
  );
}

export default Admin;

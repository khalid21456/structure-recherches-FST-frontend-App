import AdminDashboard from "../Admin/AdminDashboard";
import SideBar from "../Admin/SideBar";

function Admin() {
  return (
    <>
      <section className="mainSection flex justify-normal">
        <aside>
          <SideBar />
        </aside>
        <main id="main">
          <AdminDashboard />
        </main>
      </section>
    </>
  );
}

export default Admin;

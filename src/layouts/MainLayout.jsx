import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
import { Outlet } from "react-router";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

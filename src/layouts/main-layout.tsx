import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

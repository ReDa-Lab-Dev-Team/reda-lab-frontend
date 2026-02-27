import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

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

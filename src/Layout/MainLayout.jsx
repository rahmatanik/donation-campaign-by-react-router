import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className=" max-w-[1400px] mx-auto px-2 mb-40">
      <div className="mb-4">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="pt-32 bg-gra">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

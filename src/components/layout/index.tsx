import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";





export const HomeLayout = () => {
  return (
    <div className=" bg-slate-100 md:flex-row flex-col ">
      <main className="flex-1 overflow-y-scroll">
        <Navbar />
      </main>
      <section className="mx-auto">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

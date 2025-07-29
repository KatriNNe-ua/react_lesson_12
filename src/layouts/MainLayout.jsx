import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "@/components/Footer";

function MainLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;

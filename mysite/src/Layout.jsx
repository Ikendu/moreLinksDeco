import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Whatsapp from "./components/Whatsapp";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Whatsapp />
      <Footer />
    </div>
  );
}

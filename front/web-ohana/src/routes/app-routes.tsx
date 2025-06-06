import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import UsersAdmin from "../pages/UsersAdmin";
import Activities from "../pages/Activities";
import ActivityPage from "../pages/Activity";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import BlogPost from "../pages/Post";
import Gallery from "../pages/Gallery";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import LegalNotice from "../pages/LegalNotice";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users-admin" element={<UsersAdmin />} />
      <Route path="/talleres" element={<Activities />} />
      <Route path="/taller/:id" element={<ActivityPage />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/conocenos" element={<AboutUs />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/galeria" element={<Gallery />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />

      <Route path="/aviso-legal" element={<LegalNotice />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />

      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}

export default AppRoutes;

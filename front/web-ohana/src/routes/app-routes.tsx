import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import UsersAdmin from "../pages/UsersAdmin";
import Activities from "../pages/Activities";
import ActivityPage from "../pages/Activity";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import BlogPost from "../pages/Post";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users-admin" element={<UsersAdmin />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activity/:id" element={<ActivityPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />

      <Route path="*" element={<h1>Página no encontrada</h1>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />

      <Route path="/talleres" element={<h1>Talleres</h1>} />
      <Route path="/servicios" element={<h1>Servicios</h1>} />
      <Route path="/contacto" element={<h1>Contacto</h1>} />
      <Route path="/conocenos" element={<h1>Conócenos</h1>} />
    </Routes>
  );
}

export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import UsersAdmin from "../pages/UsersAdmin";
import Activities from "../pages/Activities";
import ActivityPage from "../pages/Activity";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";

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
    </Routes>
  );
}

export default AppRoutes;

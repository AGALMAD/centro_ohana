import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import UsersAdmin from "../pages/UsersAdmin/UsersAdmin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users-admin" element={<UsersAdmin />} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
      <Route path="/blog" element={<h1>Blog</h1>} />
      <Route path="/talleres" element={<h1>Talleres</h1>} />
      <Route path="/servicios" element={<h1>Servicios</h1>} />
      <Route path="/contacto" element={<h1>Contacto</h1>} />
      <Route path="/conocenos" element={<h1>Conócenos</h1>} />
    </Routes>
  );
}

export default AppRoutes;

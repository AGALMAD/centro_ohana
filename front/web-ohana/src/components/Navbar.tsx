import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import userService from "../services/user.service";
import { UserResponse } from "../models/user-response";

const styles = {
  link: "block py-2 px-2 text-[var(--color-secondary)] text-xl font-bold transition-transform duration-300 hover:scale-110",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  var authenticatedUser: UserResponse;

  useEffect(() => {
    const fetchUser = async () => {
      authenticatedUser = await userService.getAuthenticatedUser();
      userService.currentUser = authenticatedUser;
    };
    fetchUser();
  }, []);

  const isAdmin = authenticatedUser?.role === "ADMIN";

  return (
    <nav
      className="font-(family-name:--font-body) bg-[var(--color-bg)] 
    text-[var(--color-secondary)] shadow-lg relative w-full z-2"
    >
      <div className="relative max-w-screen-xl mx-auto flex items-center justify-start px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="mr-8 ">
          <img
            src="/logo-ohana.png"
            alt="Logo"
            className="size-16 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* MENÚ centrado en escritorio */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-3">
          <li>
            <Link to="/servicios" className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/talleres" className={styles.link}>
              Talleres
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/galeria" className={styles.link}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/conocenos" className={styles.link}>
              Conócenos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={styles.link}>
              Contacto
            </Link>
          </li>
          {isAdmin ||
            (authenticatedUser && (
              <li>
                <Link to="/users-admin" className={styles.link}>
                  Administración
                </Link>
              </li>
            ))}
        </ul>

        {/* MENÚ hamburguesa en móvil */}
        <div className="md:hidden ml-auto">
          {isMenuOpen ? (
            <RiCloseLargeFill size={20} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <GiHamburgerMenu size={20} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* MOVIL */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-800 ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="flex flex-col text-center space-y-3 mt-4 px-4">
          <li>
            <Link to="/servicios" className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/talleres" className={styles.link}>
              Talleres
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/galeria" className={styles.link}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/conocenos" className={styles.link}>
              Conócenos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={styles.link}>
              Contacto
            </Link>
          </li>
          {isAdmin ||
            (authenticatedUser && (
              <li>
                <Link to="/users-admin" className={styles.link}>
                  Administración
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

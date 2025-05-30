import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import { UserResponse } from "../models/user-response";
import { useAuth } from "../context/auth-context";
import authService from "../services/auth.service";

const styles = {
  link: "block py-2 px-2 text-[var(--color-secondary)] text-xl font-bold transition-transform duration-300 hover:scale-110",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [authenticatedUser, setAuthenticatedUser] =
    useState<UserResponse | null>(null);

  let isLoggedIn = false;
  let setIsLoggedIn: (val: boolean) => void = () => {};

  try {
    ({ isLoggedIn, setIsLoggedIn } = useAuth());
  } catch (err) {
    console.warn("Auth context not ready in Navbar:", err);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await userService.getAuthenticatedUser();
        if (userResponse) {
          setAuthenticatedUser(userResponse);
        } else {
          setAuthenticatedUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setAuthenticatedUser(null);
      }
    };

    if (isLoggedIn) {
      fetchUser();
    } else {
      setAuthenticatedUser(null);
    }
  }, [isLoggedIn]);

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
            <Link to="/conocenos" className={styles.link}>
              Conócenos
            </Link>
          </li>

          <li>
            <Link to="/contacto" className={styles.link}>
              Contacto
            </Link>
          </li>

          <li className="relative group">
            <span className={`${styles.link} cursor-pointer`}>Más ▾</span>
            <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[var(--color-bg)] shadow-md rounded-lg z-50 pt-2 px-4 min-w-[160px]">
              <li>
                <Link to="/galeria" className={styles.link}>
                  Galería
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
            </ul>
          </li>

          {isLoggedIn && authenticatedUser && (
            <div className={`${styles.link} relative group`}>
              <span className="cursor-pointer text-md!">
                {authenticatedUser.username} ▾
              </span>
              <ul
                className="absolute left-0 top-full bg-[var(--color-bg)] 
              shadow-md rounded-md hidden group-hover:block z-50"
              >
                {isAdmin && (
                  <li>
                    <Link
                      to="/users-admin"
                      className="block px-4 py-2 hover:bg-[var(--color-primary)]"
                    >
                      Administración
                    </Link>
                  </li>
                )}

                <li
                  className="px-4 py-2 hover:bg-[var(--color-primary)] cursor-pointer"
                  onClick={async () => {
                    await authService.logout();
                    setIsLoggedIn(false);
                    navigate("/login");
                  }}
                >
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
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
            ? "max-h-[600px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul
          className="flex flex-col text-center gap-4 py-6 px-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <li>
            <Link to="/servicios" className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/conocenos" className={styles.link}>
              Conócenos
            </Link>
          </li>

          <li>
            <Link to="/galeria" className={styles.link}>
              Galería
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
            <Link to="/contacto" className={styles.link}>
              Contacto
            </Link>
          </li>

          {isAdmin && (
            <li>
              <Link to="/users-admin" className={styles.link}>
                Administración
              </Link>
            </li>
          )}

          {isLoggedIn && authenticatedUser && (
            <li
              className={styles.link}
              onClick={async () => {
                await authService.logout();
                setIsLoggedIn(false);
                navigate("/login");
              }}
            >
              Cerrar sesión ({authenticatedUser.username})
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

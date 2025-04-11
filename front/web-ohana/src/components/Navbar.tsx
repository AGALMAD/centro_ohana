import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const styles = {
  link: "hover:bg-white hover:text-slate-800 py-1 px-2 rounded-md transition-colors duration-700 block",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-bg)] text-[var(--color-secondary)] shadow-lg relative w-full z-2">
      <div className="flex justify-between container items-center mx-auto">
        <img src="/logo-ohana.webp" alt="Logo" className="w-16" />

        {/* PANTALLA GRANDE */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className={styles.link}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Talleres
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Conócenos
            </a>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer">
          {isMenuOpen ? (
            <RiCloseLargeFill
              size={20}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <GiHamburgerMenu
              size={20}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>
      {/* MOVIL */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col text-center space-y-3 mt-4">
          <li>
            <a href="/" className={styles.link}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Talleres
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Conócenos
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

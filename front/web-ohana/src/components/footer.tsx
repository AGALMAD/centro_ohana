import LOGOLetras from "/ohana-letras.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* borde superior SVG */}
      <div className="w-full overflow-hidden leading-none ">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 350"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 bg-[var(--color-bg)]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#e56260" />
              <stop offset="95%" stopColor="#9dfbe9" />
            </linearGradient>
          </defs>
          <path
            d="M 0 384 L 0 125 C 62.2934 145.9337 124.5867 166.8674 184 171 C 243.4133 175.1326 299.9464 162.4641 377 146 C 454.0536 129.5359 551.6276 109.2762 628 113 C 704.3724 116.7238 759.5431 144.4311 829 156 C 898.4569 167.5689 982.1999 162.9993 1048 162 C 1113.8001 161.0007 1161.6572 163.5716 1224 158 C 1286.3428 152.4284 1363.1714 138.7142 1440 125 L 1440 384 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150"
          />
          <path
            d="M 0 500 L 0 291 C 84.7461 278.3707 169.4923 265.7413 243 255 C 316.5077 244.2587 378.7771 235.4054 435 247 C 491.2229 258.5946 541.3995 290.6372 617 301 C 692.6005 311.3628 793.6249 300.0457 859 311 C 924.3751 321.9543 954.101 355.18 1020 342 C 1085.899 328.82 1187.9711 269.2343 1264 253 C 1340.0289 236.7657 1390.0144 263.8829 1440 291 L 1440 500 Z"
            stroke="none"
            strokeWidth="0"
            fill="white"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150"
          />
        </svg>
      </div>

      <div className="w-full bg-white -top-1 relative text-[var(--color-secondary)]">
        <div className="max-w-6xl justify-items-center items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: info */}
          <div>
            <img className="mb-8 mt-2 w-42 m-auto" src={LOGOLetras} />
            <p className="mb-1">
              📍 C/ Pintor Cipriano Maldonado,
              <br /> 7, bajo C, Torre del Mar, España
            </p>
            <p className="mb-1">📅🕒 Lun - Vie: 15:15 - 20:00</p>
          </div>

          {/* Columna 2: contacto */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-3">
              <a
                href="https://www.facebook.com/OhanaCentrodeLogopediayPsicopedagogia"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook size={42} className="text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/centro_ohana_"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram size={42} className="text-pink-500" />
              </a>
              <a
                href="https://wa.me/34690643196"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={42} className="text-green-500" />
              </a>
            </div>
            <p className="mb-1 pt-4">📞+34 690 64 31 96</p>
            <p>📞+34 647 49 46 81</p>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-2 text-center text-[var(--color-primary)] pt-10">
          <a href="/aviso-legal">Aviso legal</a> |{" "}
          <a href="/privacidad">Política de privacidad</a>
        </div>

        <div className="mt-4 text-center text-xs text-[var(--color-primary)]">
          © {new Date().getFullYear()} Todos los derechos reservados.  Diseño
          web: María Rosales y Alejandro Gálvez
        </div>
        <br />
      </div>
    </footer>
  );
}

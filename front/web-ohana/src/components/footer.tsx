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
          viewBox="0 0 1440 490"
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
            d="M 0,500 L 0,125 C 62.29336997595328,145.93369975953283 124.58673995190657,166.86739951906563 184,171 C 243.41326004809343,175.13260048093437 299.94641016832696,162.46410168327034 377,146 C 454.05358983167304,129.53589831672966 551.6276193747854,109.27619374785296 628,113 C 704.3723806252146,116.72380625214704 759.5431123325318,144.43112332531777 829,156 C 898.4568876674682,167.56887667468223 982.1999312950877,162.999312950876 1048,162 C 1113.8000687049123,161.000687049124 1161.6571624871178,163.57162487117827 1224,158 C 1286.3428375128822,152.42837512882173 1363.1714187564412,138.71418756441085 1440,125 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150"
          />
          <path
            d="M 0,500 L 0,291 C 84.74613534867743,278.3706630024046 169.49227069735485,265.7413260048093 243,255 C 316.50772930264515,244.2586739951907 378.7770525592579,235.40535898316733 435,247 C 491.2229474407421,258.59464101683267 541.3995190656132,290.6372380625215 617,301 C 692.6004809343868,311.3627619374785 793.6248711782893,300.0456887667468 859,311 C 924.3751288217107,321.9543112332532 954.1009962212297,355.18000687049124 1020,342 C 1085.8990037787703,328.81999312950876 1187.9711439367916,269.2342837512882 1264,253 C 1340.0288560632084,236.76571624871178 1390.0144280316042,263.8828581243559 1440,291 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="white"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150"
          />
        </svg>
      </div>

      <div className="text-[var(--color-secondary)]">
        <div className="max-w-6xl justify-items-center items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: info */}
          <div>
            <img className="mb-8 w-42 m-auto" src={LOGOLetras} />
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
        <div className="mt-2 text-center text-[var(--color-primary)] hover:text-white pt-10">
          <a href="#" className="">
            Aviso legal
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white">
            Política de privacidad
          </a>
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

import LOGOLetras from "/ohana-letras.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* borde SVG */}
      <div className="rotate-180 w-full overflow-hidden leading-none  -translate-y-full z-10 top-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,160C672,181,768,171,864,154.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div>
        <div className="max-w-6xl justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: info */}
          <div>
            <img className="mb-2 w-42 m-auto" src={LOGOLetras} />
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
            <p className=" mb-1">📞 +34 690 64 31 96</p>
            <p>📞 +34 647 49 46 81</p>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-2 text-center text-red-400 pt-4">
          <a href="#" className="underline hover:text-white">
            Aviso legal
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-white">
            Política de privacidad
          </a>
        </div>

        <div className="mt-4 text-center text-xs text-red-400 border-t border-gray-400 pt-4">
          © {new Date().getFullYear()} Todos los derechos reservados.  Diseño
          web: María Rosales y Alejandro Gálvez
        </div>
        <br />
      </div>
    </footer>
  );
}

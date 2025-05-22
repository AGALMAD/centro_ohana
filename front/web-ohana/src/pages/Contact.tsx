import React, { useState } from "react";
import Mail from "../assets/mail_icon.svg";
import Phone from "../assets/phone_icon.svg";
import Location from "../assets/location_icon.svg";
import { Helmet } from "react-helmet";

function Contact() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "34647494681";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Centro Ohana en Torre del Mar</title>
        <meta
          name="description"
          content="¿Tienes dudas? Ponte en contacto con nosotras. Estamos en Torre del Mar y ofrecemos atención personalizada en logopedia y psicopedagogía."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para compartir en redes */}
        <meta
          property="og:title"
          content="Contacto | Centro Ohana en Torre del Mar"
        />
        <meta
          property="og:description"
          content="Llámanos, escríbenos o visítanos. Encuentra aquí toda la información de contacto de Centro Ohana."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.centrohana.com/contacto" />
        <meta
          property="og:image"
          content="https://www.centrohana.com/gallery/image69.webp"
        />
      </Helmet>

      <main className="min-h-screen bg-[--color-bg] text-[--color-text-dark] font-[--font-body] p-4 mt-15">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Columna Información */}
          <div className="flex-1 p-6 ">
            <h2 className="text-2xl font-[--font-title] text-[--color-primary] text-center mb-4">
              Contacta con nosotras
            </h2>

            <div className="flex items-start gap-4 mb-6">
              <img src={Mail} alt="Mail" className="w-8 h-8 mt-1 opacity-80" />
              <p>
                Puedes escribirnos a{" "}
                <a
                  href="mailto:centroohana@gmail.com"
                  className="text-[--color-secondary] font-bold underline-offset-2 hover:underline hover:text-[--color-primary] transition-colors duration-200"
                >
                  centroohana@gmail.com
                </a>{" "}
                o visitarnos de <b>15:00–20:30</b>.
              </p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <img
                src={Phone}
                alt="Phone"
                className="w-8 h-8 mt-1 opacity-80"
              />
              <p>
                Llámanos o pide cita al:{" "}
                <b>
                  {" "}
                  <a
                    href="tel:+34690643196"
                    className="text-[--color-secondary] font-bold underline-offset-2 hover:underline hover:text-[--color-primary] transition-colors duration-200"
                  >
                    690 64 31 96
                  </a>{" "}
                  /{" "}
                  <a
                    href="tel:+34647494681"
                    className="text-[--color-secondary] font-bold underline-offset-2 hover:underline hover:text-[--color-primary] transition-colors duration-200"
                  >
                    647 49 46 81
                  </a>
                </b>
              </p>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <img
                src={Location}
                alt="Location"
                className="w-8 h-8 mt-1 opacity-80"
              />
              <div>
                <b>Puedes visitarnos en:</b>
                <p>
                  Calle Pintor Cipriano Maldonado, 7, bajo C, Torre Del Mar,
                  Andalucía, España 29740
                </p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2201570820557!2d-4.0987497!3d36.74128629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7247ba5f43361d%3A0x8eb1354f9211f803!2sCentro%20Ohana!5e0!3m2!1ses!2ses!4v1746011121647!5m2!1ses!2ses"
              width="100%"
              height="300"
              className="rounded-md mt-4"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Columna Formulario */}
          <div className="flex-1 p-6 bg-[#f3e5dc] rounded-xl shadow-xl">
            <h2 className="text-2xl font-[--font-title] text-[#6A0572] text-center mb-10">
              ¿Tienes alguna duda?
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                className="border-3 border-[#6A0572] rounded-md p-3 resize-none min-h-[150px] 
                focus:outline-none focus:ring-2 focus:ring-[--color-secondary]"
                placeholder="Escribe tu mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                type="submit"
                className="mt-4 cursor-pointer w-full py-2 bg-[#9a4c52] text-white text-lg font-semibold rounded-lg hover:bg-[#7f3d44] focus:outline-none focus:ring-2 focus:ring-[#9a4c52] transition duration-300"
              >
                Enviar{" "}
                <img
                  src="whatsapp.webp"
                  className="inline"
                  width="25px"
                  alt="icono de whatsapp"
                />
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />

      <div className="h-full bg-[var(--color-bg)] relative">
        {/*imagen y titulo*/}
        <section className="flex">
          {/* Imagen  */}
          <img
            src="/home/home-top.png"
            alt="Imagen"
            className="w-full max-sm:mt-20 h-full object-cover"
          />
          <div
            className="absolute  max-sm:top-0 max-sm:right-0  
          top-15 right-20 flex items-center justify-end m-10"
          >
            <h1
              className="text-center text-[var(--color-primary)] 
            lg:text-4xl text-lg! md:text-lg font-bold"
            >
              CENTRO DE LOGOPEDIA <br /> Y PSICOPEDAGOGÍA
            </h1>
          </div>
        </section>

        {/* segunda seccion */}
        <section className="m-auto max-w-6xl  flex flex-col md:flex-row items-center gap-10 px-8 py-16">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-100 rounded-[30%] border-4 border-[var(--color-terciary))]"
            src="https://img.freepik.com/foto-gratis/aula-virtual-espacio-estudio_23-2149178680.jpg?t=st=1744989495~exp=1744993095~hmac=081fdd77ae8f9fc94f79fc650378fc19fdff8021b5073908e420543d7be5ef9f&w=996"
            alt="imagen niño"
          />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" text-center md:text-left text-xl text-[var(--color-text-dark)]"
          >
            Somos un centro especializado en psicopedagogía, logopedia y terapia
            ocupacional, con una gran experiencia en evaluación e intervención
            en edad infantil, juvenil, adolescente y tercera edad.
          </motion.p>
        </section>

        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src="/home/line.png"
          alt="linea"
          className=" max-w-lvw mb-8 md:mb-0"
        />

        {/* Diverlexia */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center md:px-8 md:py-12 p-3 md:ml-50 sm:m-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-dark)]">
            SOMOS CENTRO DIVERLEXIA
          </h2>
          <p className="max-w-2xl sm:p-5 mx-auto text-xl text-[var(--color-text-dark)]">
            ️En Centro Ohana contamos con profesionales cualificados y formados
            en diverlexia. ️Diverlexia es un método que facilita el aprendizaje
            y desarrollo de la lectoescritura. Además, somos centro distribuidor
            de material diverlexia.
          </p>
        </motion.section>

        {/* collage de imagenes */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-end mt-20 md:mt-0"
        >
          <img src="/home/collage.png" alt="collage" />
        </motion.section>

        {/* Servicios */}
        <section
          className="px-3 md:px-40 relative z-0 top:0 md:-top-20 text-center 
        text-md md:text-xl grid grid-cols-2 grid-rows-4 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-start-2 col-end-3 row-start-1 row-end-3"
          >
            <img
              src="/home/abc.png"
              className="mx-auto mb-2 max-w-25"
              alt="icono"
            />
            <h3 className="font-bold mb-1 text-[var(--color-text-dark)]">
              LOGOPEDIA
            </h3>
            <p className="text-[var(--color-primary)]">
              Experto en Motricidad orofacial <br /> Máster en Atención temprana
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-start-1 col-end-2 row-start-2 row-end-4"
          >
            <h3 className="max-sm:text-lg! max-sm:gap-4! font-bold mb-1 text-[var(--color-text-dark)]">
              PSICOPEDAGOGÍA
            </h3>
            <p className="text-[var(--color-primary)]">
              Experto en psicología infantil <br />
              Mediación familiar y de pareja
              <br />
              Rehabilitación Neuropsicológica
            </p>
            <img
              src="/home/psico.png"
              className="mx-auto mb-2 max-w-25"
              alt="icono"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-start-2 col-end-3 row-start-3 row-end-5"
          >
            <img
              src="/home/cerebro.png"
              className="mx-auto mb-2 max-w-25"
              alt="icono"
            />
            <h3 className="font-bold mb-1 text-[var(--color-text-dark)]">
              TERAPIA OCUPACIONAL
            </h3>
            <p className="text-[var(--color-primary)]">
              Atención temprana <br /> Daño cerebral adquirido <br />
              Integración sensorial
              <br />
              Estimulación Basal <br />
              TEA <br />
              Bobath
            </p>
          </motion.div>
        </section>

        {/* Talleres */}
        <section className="py-8 text-center rounded-t-[60px] relative -top-20 md:-top-60 overflow-hidden">
          {/**decoracion */}
          <motion.div
            initial={{ opacity: 0, x: -300, rotate: -90 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-30 relative
               w-full h-48 sm:h-56 md:h-64 z-1
               max-sm:left-0"
            style={{
              backgroundImage: "url('/vector2.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-2xl  max-sm:mt-5 font-bold mb-4 text-[var(--color-primary)] relative z-2"
          >
            DESCUBRE NUESTRO TALLERES
          </motion.h2>
          <div className="flex flex-wrap items-center w-fit m-auto justify-center gap-x-4 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-sm mx-auto h-75 mb-6 text-[var(--color-primary)]  relative z-2
            flex items-center justify-center text-center px-4"
              style={{
                backgroundImage: "url('/vector3.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="m-10">
                Diseñados para estimular el desarrollo cognitivo, la creatividad
                y la motivación, nuestros talleres ofrecen un entorno
                cooperativo y enriquecedor que promueve valores para afrontar el
                mundo que nos rodea. ¡Ven a descubrirlos!
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className=" relative z-2 text-[var(--color-text-dark)] 
            font-semibold px-6 border border-5 border-[var(--color-terciary)] 
            py-2 rounded-xl hover:scale-105 transition h-fit"
            >
              NUESTROS TALLERES
            </motion.button>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;

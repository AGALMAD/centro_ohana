import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full max-w-screen-xl m-auto relative -mb-20 xl:-mb-60">
        {/*imagen y titulo*/}
        <section
          className="relative flex max-xl:items-center h-[78vh] max-xl:flex-col max-xl:gap-70 
          max-xl:items-start items-end gap-10 xl:gap-45 xl:h-[84vh] "
        >
          {/* Imagen */}
          <div className="absolute right-0 top-40 md:top-5 h-full ">
            <img
              src="/home/portada-ohana.webp"
              alt="Centro ohana"
              className="h-8/10 md:h-full w-full object-cover max-sm:object-[90%_100%] opacity-80"
            />
          </div>

          {/*texto*/}
          <div className="flex flex-col items-center md:items-start relative mt-20 z-10 px-10 max-sm:w-full max-sm:px-4">
            <h1
              className="text-[var(--color-primary)]
            font-bold text-2xl! sm:text-3xl! xl:text-5xl! text-center"
            >
              CENTRO DE LOGOPEDIA <br /> Y PSICOPEDAGOGÍA
            </h1>

            <br />

            {/**linea decoracion */}
            <div className="mt-50 hidden xl:block">
              <img
                src="home/line.png"
                alt="Línea de decoración"
                className="w-50 md:w-90"
              />
            </div>
          </div>

          <motion.button
            onClick={() => navigate("/servicios")}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className=" z-10 text-white bg-[var(--color-terciary)] text-xl
            font-semibold px-6 w-fit border border-5 border-white
            py-2 rounded-xl md:mr-20 hover:scale-105 transition h-fit cursor-pointer mb-8 max-md:self-center max-xl:self-end"
          >
            CONOCER MÁS
          </motion.button>
        </section>

        {/* segunda seccion */}
        <section className="m-auto mt-10 max-w-5xl flex flex-col md:flex-row items-center gap-10 px-8 py-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[350px] max-h-[260px]"
          >
            <img
              src="/home/recurso1.png"
              alt="imagen niño"
              className="object-cover object-bottom rounded-[30%] border-4 border-[var(--color-terciary)]"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left text-xl text-[var(--color-text-dark)]"
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
          <img src="/home/collage-ohana.webp" alt="collage" />
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
            <h3 className="max-sm:text-lg! max-sm:gap-4! font-bold mb-1 text-[var(--color-text-dark)]">
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
            <h3 className="max-sm:text-lg! max-sm:gap-4! font-bold mb-1 text-[var(--color-text-dark)]">
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
              onClick={() => navigate("/talleres")}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className=" relative z-2 text-[var(--color-text-dark)] 
            font-semibold px-6 border border-5 border-[var(--color-terciary)] 
            py-2 rounded-xl hover:scale-105 transition h-fit cursor-pointer"
            >
              NUESTROS TALLERES
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

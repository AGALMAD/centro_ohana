import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <main>
        <div className="relative max-w-5xl mx-auto px-4 py-16 ">
          <h1 className="text-center text-4xl font-title text-[#9a4c52] mb-10 pb-2">
            NUESTROS SERVICIOS
          </h1>

          {/* LOGOPEDIA */}
          <section className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row items-center gap-15">
              <motion.img
                src="/services/image3.webp"
                alt="Logopedia"
                className="w-full md:w-1/3 rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/services/logopedia_icono.png"
                    alt="Icono Logopedia"
                    className="size-12"
                  />
                  <h2 className="text-2xl font-bold text-[#A94D56]">
                    Logopedia
                  </h2>
                </div>
                <p className="text-lg text-[#6e2f36]">
                  La logopedia se centra en la prevención, evaluación y
                  tratamiento de los trastornos de la comunicación, el lenguaje,
                  el habla y la voz. Los logopedas trabajan con personas de
                  todas las edades para mejorar sus habilidades comunicativas y
                  su calidad de vida.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="space-y-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#6e2f36]">
                Entre las áreas que abarca la logopedia se incluyen:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-lg text-[#6e2f36]">
                  <strong>Trastornos del habla:</strong> dificultades en la
                  articulación de sonidos, fluidez (tartamudez) o voz.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Trastornos del lenguaje:</strong> problemas en la
                  comprensión y expresión del lenguaje, tanto en su forma oral
                  como escrita.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Trastornos de la deglución:</strong> dificultades para
                  tragar alimentos o líquidos.
                </li>
              </ul>
              <p className="text-lg text-[#6e2f36]">
                Utilizamos técnicas personalizadas que pueden incluir ejercicios
                de articulación, actividades de mejora de la comprensión y
                expresión, y estrategias para fortalecer los músculos implicados
                en la deglución. El objetivo es proporcionar una atención
                integral que abarque todas las áreas de la comunicación y el
                lenguaje.
              </p>
            </motion.div>

            <div className="flex justify-end">
              <motion.img
                src="/services/wave.png"
                alt="Wave"
                className="h-10 md:h-14 my-12 object-contain"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </section>

          {/* PSICOPEDAGOGÍA */}
          <section className=" mt-12 space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#A94D56]">
                    Psicopedagogía
                  </h2>
                  <img
                    src="/services/psicopedagogia_icono.png"
                    alt="Icono Psicopedagogía"
                    className="size-12"
                  />
                </div>
                <p className="text-lg text-[#6e2f36]">
                  La psicopedagogía se ocupa del estudio de los procesos de
                  aprendizaje y de las dificultades que pueden surgir en este
                  ámbito.
                </p>
              </motion.div>
              <motion.img
                src="/services/image4.webp"
                alt="Psicopedagogía"
                className="w-full md:w-1/3 rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div
              className="space-y-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#6e2f36]">
                Intervenimos en casos de:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-lg text-[#6e2f36]">
                  <strong>Dificultades de aprendizaje:</strong> problemas en la
                  adquisición de habilidades académicas como la lectura,
                  escritura o matemáticas.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Trastornos del desarrollo:</strong> como el Trastorno
                  por Déficit de Atención e Hiperactividad (TDAH) o trastornos
                  del espectro autista.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Orientación educativa y vocacional:</strong>{" "}
                  asesoramiento en la elección de itinerarios formativos y
                  profesionales.
                </li>
              </ul>
              <p className="text-lg text-[#6e2f36]">
                Realizamos evaluaciones individualizadas para identificar las
                necesidades específicas de cada estudiante. Diseñamos planes de
                intervención personalizados que pueden incluir técnicas de
                estudio, estrategias de organización, actividades para mejorar
                la atención y concentración, y apoyo en habilidades sociales.
                Además, colaboramos estrechamente con familias y escuelas para
                garantizar un enfoque integral en el proceso educativo del niño.
              </p>
            </motion.div>

            <div className="flex justify-start">
              <motion.img
                src="/services/wave.png"
                alt="Wave"
                className="h-10 md:h-14 my-12 object-contain"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </section>

          {/* TERAPIA OCUPACIONAL */}
          <section className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              <motion.img
                src="/services/image1.webp"
                alt="Terapia Ocupacional"
                className="w-full md:w-1/3 object-cover rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/services/terapia_ocupacional_icono.png"
                    alt="Icono Terapia Ocupacional"
                    className="size-12"
                  />
                  <h2 className="text-2xl font-bold text-[#A94D56] uppercase">
                    Terapia Ocupacional
                  </h2>
                </div>
                <p className="text-lg text-[#6e2f36]">
                  La terapia ocupacional tiene como objetivo promover la
                  autonomía y participación de las personas en las actividades
                  de la vida diaria.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="space-y-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#6e2f36]">
                Trabajamos en áreas como:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-lg text-[#6e2f36]">
                  <strong>Desarrollo psicomotor:</strong> mejora de habilidades
                  motoras finas y gruesas.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Integración sensorial:</strong> ayuda en el
                  procesamiento adecuado de estímulos sensoriales.
                </li>
                <li className="text-lg text-[#6e2f36]">
                  <strong>Actividades de la vida diaria:</strong> entrenamiento
                  en tareas como vestirse, alimentarse o higiene personal.
                </li>
              </ul>
              <p className="text-lg text-[#6e2f36]">
                Diseñamos programas personalizados que pueden incluir
                actividades lúdicas para mejorar la motricidad, ejercicios de
                integración sensorial y entrenamiento en habilidades de
                autonomía. El objetivo es que el niño adquiera la máxima
                independencia posible en su vida diaria, mejorando su calidad de
                vida y facilitando su participación en entornos escolares y
                sociales.
              </p>
            </motion.div>
          </section>

          {/* Contacto */}
          <section className="pt-30 text-center relative rounded-xl overflow-hidden">
            {/**decoracion */}
            <motion.div
              className="absolute top-0 left-0 sm:left-100 md:left-120 lg:left-180 
               w-full h-40 sm:h-56 md:h-64 z-0"
              style={{
                backgroundImage: "url('/vector2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, x: -300, rotate: -90 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#A94D56] z-2 relative">
                CONTÁCTANOS
              </h3>
              <p className="text-lg text-[#6e2f36]  mt-4 z-2 relative">
                Si deseas conocer más a fondo nuestros métodos de trabajo y cómo
                podemos ayudarte, estaremos encantadas de atenderte. Puedes
                visitarnos en nuestro centro o escribirnos a través de los
                canales de comunicación que prefieras.
              </p>

              <a
                href="/contact"
                className="inline-block text-xl relative z-2 mt-6 bg-[#A94D56] 
              text-white px-6 py-2 rounded-full shadow-md hover:bg-[#913E47] 
              transform transition-transform duration-300 hover:scale-105"
              >
                ¡Hablemos!
              </a>
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Services;

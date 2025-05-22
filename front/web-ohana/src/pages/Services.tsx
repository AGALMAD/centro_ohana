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
              <img
                src="/services/logopedia.jpg"
                alt="Logopedia"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="w-full md:w-1/2 space-y-4">
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
              </div>
            </div>

            <div className="space-y-4 mt-12">
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
            </div>

            <div className="flex justify-end">
              <img
                src="/services/wave.png"
                alt="Wave"
                className="h-10 md:h-14 my-12 object-contain"
              />
            </div>
          </section>

          {/* PSICOPEDAGOGÍA */}
          <section className=" mt-12 space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 space-y-4">
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
              </div>
              <img
                src="/services/psicopedagogia.jpg"
                alt="Psicopedagogía"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
            </div>

            <div className="space-y-4 mt-12">
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
            </div>

            <div className="flex justify-start">
              <img
                src="/services/wave.png"
                alt="Wave"
                className="h-10 md:h-14 my-12 object-contain"
              />
            </div>
          </section>

          {/* TERAPIA OCUPACIONAL */}
          <section className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              <img
                src="/services/terapia_ocupacional.jpg"
                alt="Terapia Ocupacional"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="w-full md:w-1/2 space-y-4">
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
              </div>
            </div>

            <div className="space-y-4 mt-12">
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
            </div>
          </section>

          {/* Contacto */}
          <section className="pt-30 text-center relative rounded-xl overflow-hidden">
            {/**decoracion */}
            <div
              className="absolute top-0 left-20 sm:left-80 md:left-120 lg:left-160 
               w-full h-48 sm:h-56 md:h-64 z-0"
              style={{
                backgroundImage: "url('/vector2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <h3 className="text-xl font-semibold text-[#A94D56] z-2 relative">
              CONTÁCTANOS
            </h3>
            <p className="text-md text-[#6e2f36] mt-4 z-2 relative">
              Si deseas conocer más a fondo nuestros métodos de trabajo y cómo
              podemos ayudarte, estaremos encantadas de atenderte. Puedes
              visitarnos en nuestro centro o escribirnos a través de los canales
              de comunicación que prefieras.
            </p>

            <a
              href="/contact"
              className="inline-block relative z-2 mt-6 bg-[#A94D56] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#913E47]"
            >
              ¡Hablemos!
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default Services;

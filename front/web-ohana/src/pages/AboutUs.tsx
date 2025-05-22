import about from "../data/aboutUs.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import workers from "../data/workers.json";
import { motion } from "framer-motion";
import Slider from "react-slick";

function AboutUs() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
        <div className="max-w-5xl mx-auto px-4 py-16 ">
          {/* Título e introducción */}
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h1 className="uppercase tracking-widest mb-4">Conócenos</h1>
            <p className="max-w-2xl text-xl">
              Ohana nace de la inquietud y el entusiasmo profesional y personal
              de dos jóvenes enamoradas de sus profesiones, con ganas de
              compartir sus conocimientos y experiencias para mejorar el
              bienestar de las familias.
            </p>
          </div>

          {/* Tarjetas alternadas */}
          <div className="flex flex-col gap-20">
            {about.about.map((worker, index) => (
              <div
                key={worker.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-start md:items-center gap-10`}
              >
                {/* Imagen estilo polaroid */}
                <motion.div
                  className="w-full md:w-1/2 flex md:justify-start justify-center"
                  initial={{ rotate: -2 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`bg-white rounded-xl shadow-md p-4 w-full max-w-md flex flex-col items-center self-center ${
                      index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                    }`}
                  >
                    <div className="bg-white  shadow transform overflow-hidden w-full">
                      <img
                        src={`/workers/${worker.image}`}
                        alt={worker.name}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-center text-xl">{worker.name}</h3>
                  </div>
                </motion.div>

                {/* Texto */}
                <motion.div
                  className="w-full md:w-1/2 flex flex-col gap-4 self-center max-w-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {worker.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-xl text-gray-700 leading-relaxed"
                    >
                      {p.text}
                    </p>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* tarjetas con trabajadores */}
          <motion.div
            className="w-3/4 m-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mt-20">
              <Slider {...settings}>
                {workers.workers.map((d) => (
                  <div
                    key={d.name}
                    className="bg-white h-[300px] text-[var(--color-primary)] rounded-xl"
                  >
                    <div className="h-56 bg-[var(--color-terciary)] flex justify-center items-center rounded-t-xl">
                      <img
                        src={d.img}
                        alt=""
                        className="h-44 object-cover w-44 rounded-full"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 p-2">
                      <p className="text-xl font-semibold">{d.name}</p>
                      <p className="text-center">{d.especialidad}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default AboutUs;

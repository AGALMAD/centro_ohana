import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

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
            className="w-full h-full object-cover"
          />
          <div className="absolute top-15 right-20 flex items-center justify-end m-10">
            <h1 className="text-center text-[var(--color-primary)] lg:text-4xl md:text-2xl md:text-lg font-bold">
              CENTRO DE LOGOPEDIA <br /> Y PSICOPEDAGOGÍA
            </h1>
          </div>
        </section>

        {/* segunda seccion */}
        <section className="ml-20 mr-20 flex flex-col md:flex-row items-center gap-10 px-8 py-16">
          <img
            className="w-100 rounded-[30%] border-4 border-[var(--color-terciary))]"
            src="https://img.freepik.com/foto-gratis/aula-virtual-espacio-estudio_23-2149178680.jpg?t=st=1744989495~exp=1744993095~hmac=081fdd77ae8f9fc94f79fc650378fc19fdff8021b5073908e420543d7be5ef9f&w=996"
            alt="imagen niño"
          />
          <p className=" text-center md:text-left text-xl text-[var(--color-text-dark)]">
            Somos un centro especializado en psicopedagogía, logopedia y terapia
            ocupacional, con una gran experiencia en evaluación e intervención
            en edad infantil, juvenil, adolescente y tercera edad.
          </p>
        </section>

        {/* Diverlexia */}
        <section className="text-center px-8 py-12 ml-50">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-dark)]">
            SOMOS CENTRO DIVERLEXIA
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[var(--color-text-dark)]">
            ️En Centro Ohana contamos con profesionales cualificados y formados
            en diverlexia. ️Diverlexia es un método que facilita el aprendizaje
            y desarrollo de la lectoescritura. Además, somos centro distribuidor
            de material diverlexia.
          </p>
        </section>
        <section className="flex justify-end">
          <img src="/home/collage.png" alt="collage" />
        </section>

        {/* Servicios */}
        <section className="px-40 relative z-0 -top-20 text-center text-xl grid grid-cols-2 grid-rows-4 ">
          <div className="col-start-2 col-end-3 row-start-1 row-end-3">
            <img
              src="/home/abc.png"
              className="mx-auto mb-2 w-25"
              alt="icono"
            />
            <h3 className="font-bold mb-1 text-[var(--color-text-dark)]">
              LOGOPEDIA
            </h3>
            <p className="text-[var(--color-primary)]">
              Experto en Motricidad orofacial <br /> Máster en Atención temprana
            </p>
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-4">
            <h3 className="font-bold mb-1 text-[var(--color-text-dark)]">
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
              className="mx-auto mb-2 w-25"
              alt="icono"
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-3 row-end-5">
            <img
              src="/home/cerebro.png"
              className="mx-auto mb-2 w-25"
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
          </div>
        </section>

        {/* Talleres */}
        <section className=" py-8 text-center rounded-t-[60px] relative -top-60 overflow-hidden">
          {/**decoracion */}
          <div
            className="absolute top-0 left-30 relative
               w-full h-48 sm:h-56 md:h-64 z-1"
            style={{
              backgroundImage: "url('/vector2.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)] relative z-2">
            DESCUBRE NUESTRO TALLERES
          </h2>
          <div className="flex items-center w-fit m-auto justify-center gap-x-4 px-4">
            <div
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
            </div>

            <button
              className=" relative z-2 text-[var(--color-text-dark)] 
            font-semibold px-6 border border-5 border-[var(--color-terciary)] 
            py-2 rounded-xl hover:scale-105 transition h-fit"
            >
              NUESTROS TALLERES
            </button>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;

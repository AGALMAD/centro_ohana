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
            <h1 className="text-center text-[var(--color-primary)] text-4xl font-bold">
              CENTRO DE LOGOPEDIA <br /> Y PSICOPEDAGOGÍA
            </h1>
          </div>
        </section>
        {/* segunda seccion */}
        <section className="ml-20 mr-20 flex flex-col md:flex-row items-center gap-10 px-8 py-16">
          <img
            className="w-70 rounded-[30%] border-4 border-[var(--color-terciary))]"
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
            de material diverlexia
          </p>
        </section>
        <section className="flex justify-end">
          <img
            src="https://scontent-mad1-1.xx.fbcdn.net/v/t51.75761-15/468531860_18256549774280703_7568970456997503422_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sibjBzet36UQ7kNvwFbnELZ&_nc_oc=AdmOw6cpqYACpufqGUgu6-UfQPhXtG4ckG9Qvf4apvLmunLori4OFUPCon6Wxo_UklU&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=eZh8tJmdVvlGVaI5g46SwQ&oh=00_AfHSmViD9xwGSnhjTu2gskgpKWJQXajXmzR_QOaXPdZA2Q&oe=6808309D"
            alt="collage"
          />
        </section>

        {/* Servicios */}
        <section className="px-40 text-center text-xl grid grid-cols-2 grid-rows-4 ">
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
        <section className="px-8 py-16 text-center rounded-t-[60px]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            DESCUBRE NUESTRO TALLERES
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-[var(--color-primary)]">
            Diseñados para estimular el desarrollo cognitivo, la creatividad y
            la motivación, nuestros talleres ofrecen un entorno cooperativo y
            enriquecedor que promueve valores para afrontar el mundo que nos
            rodea. ¡Ven a descubrirlos!
          </p>
          <button className="text-[var(--color-text-dark)] font-semibold px-6 border border-5 border-[var(--color-terciary)] py-2 rounded-xl hover:scale-105 transition">
            NUESTROS TALLERES
          </button>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;

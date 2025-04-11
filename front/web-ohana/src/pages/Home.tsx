import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="h-full bg-[var(--color-bg)]">
        {/*imagen y titulo*/}
        <section className="flex">
          <div className="relativew-[600px] h-[500px] overflow-hidden">
            {/* Imagen base */}
            <img
              src="/home/home-top.jpg"
              alt="Decorativa"
              className="w-full h-full object-cover"
            />

            {/* Clip SVG esquina superior derecha */}
            <svg
              className="absolute top-0 right-0 w-full h-full z-10"
              viewBox="0 0 15 50"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 4 7 C 5.3333 8 5.6667 8 6 8 S 8 8 8 10 A 5 0 0 0 0 8 12 T 8 6 C 5 6 0 6 0 6 C 3 6 2 6 4 7"
                fill="#f8efea"
                fillOpacity="1"
              />
            </svg>
          </div>

          <h1>CENTRO DE LOGOPEDIA Y PSICOPEDAGOGÍA</h1>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;

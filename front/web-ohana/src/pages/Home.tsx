import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-[url('/src/assets/mountain.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-slate-900 before:opacity-50">
        <div className="z-50"></div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;

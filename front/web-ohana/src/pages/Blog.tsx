import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import userService from "../services/user.service";
import CreateActivityForm from "../components/CreateOrUpdateActivityForm";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Post } from "../models/post";
import blogService from "../services/blog.service";

function Blog() {
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);

  console.log("User", userService.currentUser);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const user = await userService.getAuthenticatedUser();
        userService.currentUser = user;
      } catch (error) {
        console.error("Sin usuario autenticado");
      }
    };

    checkUserRole();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const fetchedPosts = await blogService.getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  function parseCustomDate(dateString: string): Date {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  const allPosts = posts.sort(
    (a, b) =>
      parseCustomDate(a.date).getTime() - parseCustomDate(b.date).getTime()
  );

  const renderPostCard = (post: Post) => (
    <div
      key={post.id}
      className="flex items-center gap-6 p-6 max-w-lg mx-auto hover:shadow-lg transition duration-300"
    >
      {/* Columna de la imagen */}
      <div className="w-1/3">
        <img
          src={BASE_URL + post.imageUrl}
          alt={post.title}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      <div className="w-2/3 flex flex-col justify-between">
        {/* Título */}
        <h4 className="text-xl font-bold text-[var(--color-primary)] uppercase mb-2 text-left">
          {post.title}
        </h4>

        {/* Texto del post*/}
        <p className="text-sm text-[var(--color-text-dark)] mb-4 text-left">
          {post.text.length > 150 ? post.text.slice(0, 150) + "..." : post.text}
        </p>

        {/* Botón "Ver publicación" */}
        <div className="text-left">
          <a
            onClick={() => navigate(`/blog/${post.id}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline cursor-pointer"
          >
            Ver publicación
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          NUESTRAS PUBLICACIONES
        </h1>

        {posts.length === 0 && (
          <div className="text-center text-lg text-gray-500 mb-4">
            No hay publicaciones disponibles en este momento.
            <br />
            Por favor, vuelve más tarde.
          </div>
        )}

        {/* Blog */}
        {!loading && (
          <div className="w-full max-w-7xl">
            {posts.length > 0 && <>{allPosts.map(renderPostCard)}</>}
          </div>
        )}

        {/* Botón de añadir nuevo post */}
        {userService.currentUser?.role === "ADMIN" && (
          <div>
            <button
              type="button"
              onClick={() => setShowAdminView(true)}
              className="bg-[#9a4c52] text-white text-3xl font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#7f3d44] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:ring-opacity-50 fixed bottom-8 right-8 z-20"
            >
              +
            </button>
          </div>
        )}

        {/* Spinner de carga */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="w-16 h-16 border-4 border-[#9a4c52] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Vista de creación de publicacion */}
        <Modal
          title={"Crea una nueva publicación "}
          open={showAdminView}
          onClose={() => setShowAdminView(false)}
        >
          <CreateActivityForm />
        </Modal>
      </main>

      <Footer />
    </>
  );
}

export default Blog;

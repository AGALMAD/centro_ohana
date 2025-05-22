import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import userService from "../services/user.service";
import { Post } from "../models/post";
import blogService from "../services/blog.service";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import CreatePostForm from "../components/CreateOrUpdatePostForm";

function Blog() {
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "0", 5);

  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      try {
        if (userService.currentUser === null) {
          const user = await userService.getAuthenticatedUser();
          userService.currentUser = user;
        }
      } catch (error) {
        console.error("Sin usuario autenticado");
      }
    };

    getAuthenticatedUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await blogService.getAllPosts(currentPage, 5);
        if (result.success) {
          setPosts(
            result.data.content.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB.getTime() - dateA.getTime();
            })
          );
          setTotalPages(result.data.totalPages);
        } else {
          console.error("Failed to fetch posts:", result.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

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
      className="flex items-center justify-center gap-6 p-6 flex-wrap max-w-6xl mx-auto"
    >
      {/*imagen */}
      <div className="w-112 md:p-8">
        <img
          src={BASE_URL + post.imageUrl}
          alt={post.title}
          className="rounded-2xl w-full h-64 object-cover"
        />
      </div>

      <div className="max-w-1/2 flex flex-col justify-between">
        {/* Título */}
        <h4
          className="cursor-pointer text-xl w-fit font-bold !text-[var(--color-secondary)] mb-2 text-center"
          onClick={() => navigate(`/blog/${post.id}?page=${currentPage}`)}
        >
          {post.title}
        </h4>

        {/* Texto del post*/}
        <p className="text-md mt-2 font-bold text-[var(--color-text-dark)] mb-4 text-left">
          {post.text.length > 250 ? post.text.slice(0, 250) + "..." : post.text}
        </p>

        {/* Botón "Ver publicación" */}

        <button
          onClick={() => navigate(`/blog/${post.id}?page=${currentPage}`)}
          rel="noopener noreferrer"
          className="text-sm font-semibold bg-[var(--color-secondary)] 
           cursor-pointer text-white p-2 rounded-3xl w-fit"
        >
          Ver publicación
        </button>
      </div>
    </div>
  );

  return (
    <>
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
          <CreatePostForm />
        </Modal>

        {/*paginación*/}
        {posts.length !== 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            setSearchParams={(params: any) => console.log(params)}
          />
        )}
      </main>
    </>
  );
}

export default Blog;

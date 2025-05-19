import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import Footer from "../components/Footer";
import { Edit, Trash } from "lucide-react";
import Swal from "sweetalert2";
import Modal from "../components/Modal";
import { Post } from "../models/post";
import CreatePostForm from "../components/CreateOrUpdatePostForm";
import blogService from "../services/blog.service";
import { useSearchParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;

  const [post, setPost] = useState<Post | null>(null);
  // @ts-ignore
  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);

  const [searchParams] = useSearchParams();
  const pageFromQuery = searchParams.get("page");

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
    const fetchPost = async () => {
      setLoading(true);
      try {
        const post = await blogService.getPost(id!);
        if (!post) throw new Error("Publicación no encontrada");
        setPost(post);
      } catch (error) {
        console.error("Error al obtener la publicación:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async (postId: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la publicación permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const deletedPost = await blogService.deletePost(postId);
        if (!deletedPost) throw new Error("Publicación no encontrada");

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Publicación eliminada correctamente",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        setTimeout(() => {
          navigate("/blog");
        }, 2000);
      } catch (error) {
        console.error("Error al eliminar la publicación:", error);
        Swal.fire("Error", "No se pudo eliminar la publicación.", "error");
      }
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full flex flex-col items-center px-4 py-10">
        {post && (
          <div className="relative  max-w-6xl w-full p-6 md:p-10">
            {/* Fondo decorativo*/}
            <div
              className="absolute top-0 left-30 w-full h-82 z-0"
              style={{
                backgroundImage: "url('/vector1.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Botones de edición */}
            {userService.currentUser?.role === "ADMIN" && (
              <div className="absolute top-4 right-4 flex space-x-2 z-2">
                <button
                  onClick={() => setShowAdminView(true)}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  title="Editar"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:text-red-800 cursor-"
                  title="Eliminar"
                >
                  <Trash size={20} />
                </button>
              </div>
            )}

            {/* Título */}
            <h1
              className="text-center text-xl md:text-2xl  z-2 relative
            font-bold text-[#842029] mb-6 tracking-wide"
            >
              {post.title}
            </h1>

            {/* Imagen */}
            <div className="flex justify-center mb-12 relative z-2">
              <img
                src={BASE_URL + post.imageUrl}
                alt={post.title}
                className="rounded-xl shadow-md w-115 mt-8 h-72 object-cover"
              />
            </div>

            {/* Texto */}
            <p
              className="whitespace-pre-line text-sm md:text-base 
            !text-[var(--color-text-dark)] leading-relaxed mb-8"
            >
              {post.text}
            </p>

            <p className="text-gray-600">
              Fecha de publicación: &nbsp;
              {new Date(post.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        )}

        {/* Vista de edición de la publicacion */}
        <Modal
          title={"Editar taller"}
          open={showAdminView}
          onClose={() => setShowAdminView(false)}
        >
          <CreatePostForm initialPost={post} />
        </Modal>

        <button
          onClick={() => navigate(`/blog?page=${pageFromQuery || 0}`)}
          className="!text-[var(--color-primary)]"
        >
          {" "}
          ← Volver al blog
        </button>
      </main>

      <Footer />
    </>
  );
}

export default BlogPost;

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Post } from "../models/post";
import { NewPostRequest } from "../models/new-post-request";
import blogService from "../services/blog.service";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  initialPost?: Post;
}
function CreatePostForm({ initialPost }: Props) {
  const [data, setFormData] = useState<NewPostRequest>(() => {
    if (!initialPost) {
      return {
        title: "",
        text: "",
        image: new File([], ""),
      };
    }

    return {
      title: initialPost.title,
      text: initialPost.text,
      image: new File([], ""),
    };
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...data, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validación manual si no hay texto
    if (!data.text.trim()) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "El texto no puede estar vacío.",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      return;
    }

    try {
      let response;
      if (initialPost) {
        response = await blogService.updatePost(initialPost.id, data);
      } else {
        response = await blogService.createPost(data);
      }

      if (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: initialPost
            ? "Publicación actualizada exitosamente"
            : "Publicación creada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        // Recargar la página después de éxito
        window.location.reload();
      } else {
        throw new Error("No se recibió respuesta");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: initialPost
          ? "Error al actualizar la publicación"
          : "Error al crear la publicación",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Título:
          </label>
          <ReactQuill
            theme="snow"
            value={data.text}
            onChange={(content) => setFormData({ ...data, text: content })}
            className="mt-2 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Texto:
          </label>
          <textarea
            id="text"
            name="text"
            value={data.text}
            onChange={handleInputChange}
            required
            maxLength={5000}
            className="mt-2 p-2 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            required={!initialPost}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full py-2 bg-[#9a4c52] text-white text-lg font-semibold rounded-lg hover:bg-[#7f3d44] focus:outline-none focus:ring-2 focus:ring-[#9a4c52] transition duration-300"
        >
          {loading
            ? "Cargando..."
            : initialPost
            ? "Actualizar publicación"
            : "Crear publicación"}
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;

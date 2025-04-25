import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import activityService from "../services/activity.service";
import { CreateActivityRequest } from "../models/create-activity-request";
import { CreateParagraphRequest } from "../models/create-paragraph-request";

function CreateActivityForm() {
  const [data, setFormData] = useState<CreateActivityRequest>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    startTimeStr: "",
    endTimeStr: "",
    postLink: "",
    image: new File([], ""),
    paragraphs: [],
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  };

  const handleDateChange = (
    date: Date | null,
    field: "startDate" | "endDate"
  ) => {
    if (date) {
      setFormData({
        ...data,
        [field]: date.toISOString().split("T")[0], // yyyy-mm-dd format
      });
    }
  };

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "startTimeStr" | "endTimeStr"
  ) => {
    setFormData({ ...data, [field]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...data, image: e.target.files[0] });
    }
  };

  const addParagraph = () => {
    const newParagraph: CreateParagraphRequest = { title: "", text: "" };
    setFormData({
      ...data,
      paragraphs: [...data.paragraphs, newParagraph],
    });
  };

  const handleParagraphChange = (
    index: number,
    field: "title" | "text",
    value: string
  ) => {
    const updatedParagraphs = [...data.paragraphs];
    updatedParagraphs[index] = {
      ...updatedParagraphs[index],
      [field]: value,
    };
    setFormData({ ...data, paragraphs: updatedParagraphs });
  };

  const deleteParagraph = (index: number) => {
    const updatedParagraphs = data.paragraphs.filter((_, i) => i !== index);
    setFormData({ ...data, paragraphs: updatedParagraphs });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await activityService.createActivity(data);

      if (response) {
        alert("Actividad creada exitosamente");
      } else {
        alert("Error al crear la actividad");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al crear la actividad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#9a4c52] mb-6">
        Crea una nueva actividad
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Título:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={handleInputChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={data.description}
            onChange={handleInputChange}
            required
            className="mt-2 p-2 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Fecha de inicio:
          </label>
          <DatePicker
            selected={data.startDate ? new Date(data.startDate) : null}
            onChange={(date: Date | null) =>
              handleDateChange(date, "startDate")
            }
            dateFormat="yyyy-MM-dd"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Fecha de finalización:
          </label>
          <DatePicker
            selected={data.endDate ? new Date(data.endDate) : null}
            onChange={(date: Date | null) => handleDateChange(date, "endDate")}
            dateFormat="yyyy-MM-dd"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="startTimeStr"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Hora de inicio:
          </label>
          <input
            type="time"
            id="startTimeStr"
            name="startTimeStr"
            value={data.startTimeStr}
            onChange={(e) => handleTimeChange(e, "startTimeStr")}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="endTimeStr"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Hora de finalización:
          </label>
          <input
            type="time"
            id="endTimeStr"
            name="endTimeStr"
            value={data.endTimeStr}
            onChange={(e) => handleTimeChange(e, "endTimeStr")}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="postLink"
            className="block text-sm font-semibold text-[#9a4c52]"
          >
            Enlace para el post:
          </label>
          <input
            type="url"
            id="postLink"
            name="postLink"
            value={data.postLink}
            onChange={handleInputChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        {/* Párrafos */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-[#9a4c52]">Párrafos:</h3>
          {data.paragraphs.map((paragraph, index) => (
            <div key={index} className="flex flex-col space-y-2 mt-2">
              <input
                type="text"
                placeholder="Título del párrafo"
                value={paragraph.title}
                onChange={(e) =>
                  handleParagraphChange(index, "title", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
              />
              <textarea
                placeholder="Texto del párrafo"
                value={paragraph.text}
                onChange={(e) =>
                  handleParagraphChange(index, "text", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
              />
              <button
                type="button"
                onClick={() => deleteParagraph(index)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Eliminar párrafo
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addParagraph}
            className="mt-2 p-2 bg-[#9a4c52] text-white rounded-lg hover:bg-[#7f3d44] transition duration-300"
          >
            Añadir párrafo
          </button>
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
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:border-[#9a4c52]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full py-2 bg-[#9a4c52] text-white text-lg font-semibold rounded-lg hover:bg-[#7f3d44] focus:outline-none focus:ring-2 focus:ring-[#9a4c52] transition duration-300"
        >
          {loading ? "Cargando..." : "Crear actividad"}
        </button>
      </form>
    </div>
  );
}

export default CreateActivityForm;

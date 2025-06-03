import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import { Activity } from "../models/activity";
import activityService from "../services/activity.service";
import { Edit, Trash } from "lucide-react";
import Swal from "sweetalert2";
import Modal from "../components/Modal";
import CreateActivityForm from "../components/CreateOrUpdateActivityForm";
import InstagramIcon from "../assets/instagram.png";

function ActivityPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity | null>(null);
  // @ts-ignore
  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const user = await userService.getAuthenticatedUser();
        userService.currentUser = user;
      } catch (error) {}
    };
    checkUserRole();
  }, []);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      try {
        const activity = await activityService.getActivity(id!);
        if (!activity) throw new Error("Actividad no encontrada");
        setActivity(activity);
      } catch (error) {
        console.error("Error al obtener la actividad:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchActivity();
  }, [id]);

  const handleDelete = async (activityId: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el taller permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const deletedActivity = await activityService.deleteActivity(
          activityId
        );
        if (!deletedActivity) throw new Error("Actividad no encontrada");

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Taller eliminado correctamente",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        setTimeout(() => {
          navigate("/talleres");
        }, 2000);
      } catch (error) {
        console.error("Error al eliminar la actividad:", error);
        Swal.fire("Error", "No se pudo eliminar el taller.", "error");
      }
    }
  };

  return (
    <>
      <main className="min-h-screen w-full flex flex-col items-center px-4 py-10">
        {activity && (
          <div className="relative  max-w-xl w-full p-6 md:p-10">
            {/* Botones de edición */}
            {userService.currentUser?.role === "ADMIN" && (
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setShowAdminView(true)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Editar"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(activity.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Eliminar"
                >
                  <Trash size={20} />
                </button>
              </div>
            )}

            {/* Título */}
            <h1 className="text-center text-xl md:text-2xl font-bold text-[#842029] mb-6 uppercase tracking-wide">
              {activity.title}
            </h1>

            {/* Imagen */}
            <div className="flex justify-center mb-12">
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="rounded-xl shadow-md w-72 h-72 object-cover"
              />
            </div>

            {/* Descripción */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
              {activity.description}
            </p>

            {/* Horario */}
            <div className="mb-8">
              <p className="text-sm text-gray-800 mb-2">
                📅 <strong>Cuándo:</strong> Del {activity.startDate} al{" "}
                {activity.endDate}
              </p>
              <p className="text-sm text-gray-800 mb-4">
                🕒 <strong>Horario:</strong> {activity.startTime} a{" "}
                {activity.endTime}
              </p>
            </div>

            {/* Párrafos dinámicos */}
            {activity.paragraphs.map((p) => (
              <div key={p.id} className="mb-4">
                {p.title && <h4 className="font-semibold">{p.title}</h4>}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}

            {/* Botón e Icono de Instagram */}
            <div className="flex justify-center items-center mt-12">
              <a
                href={`https://wa.me/34647494681?text=${encodeURIComponent(
                  `Hola, estoy interesado en inscribirme en el taller "${activity.title.toLowerCase()}"`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Contactar por WhatsApp"
                className="bg-[var(--color-primary)] text-white text-xl font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#7f3d44] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:ring-opacity-50"
              >
                Inscribirse
              </a>

              <a
                href={activity.postLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
                title="Ver publicación en Instagram"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-20 h-12 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        )}

        {/* Vista de edición de la actividad */}
        <Modal
          title={"Editar taller"}
          open={showAdminView}
          onClose={() => setShowAdminView(false)}
        >
          <CreateActivityForm initialActivity={activity} />
        </Modal>
      </main>
    </>
  );
}

export default ActivityPage;

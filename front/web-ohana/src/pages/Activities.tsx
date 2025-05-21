import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import activityService from "../services/activity.service";
import Modal from "../components/Modal";
import userService from "../services/user.service";
import CreateActivityForm from "../components/CreateOrUpdateActivityForm";
import { useNavigate } from "react-router-dom";

function Activities() {
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;
  const navigate = useNavigate();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);

  console.log("User", userService.currentUser);

  // Recoge el usuario autenticado al cargar la página
  // y lo almacena en el servicio de usuario
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
    const fetchActivities = async () => {
      setLoading(true);

      try {
        const fetchedActivities = await activityService.getActivities();
        setActivities(fetchedActivities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  function parseCustomDate(dateString: string): Date {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  const now = new Date();

  const upcomingActivities = activities
    .filter((activity) => parseCustomDate(activity.endDate) >= now)
    .sort(
      (a, b) =>
        parseCustomDate(a.startDate).getTime() -
        parseCustomDate(b.startDate).getTime()
    );

  const pastActivities = activities
    .filter((activity) => parseCustomDate(activity.endDate) < now)
    .sort(
      (a, b) =>
        parseCustomDate(b.startDate).getTime() -
        parseCustomDate(a.startDate).getTime()
    );

  const renderActivityCard = (activity: Activity) => (
    <div
      key={activity.id}
      className="relative bg-[var(--color-bg)] rounded-xl shadow-xl p-6 flex items-start gap-4 max-w-lg mx-auto hover:shadow-2xl transition duration-300"
    >
      <img
        src={BASE_URL + activity.imageUrl}
        alt={activity.title}
        className="rounded-lg w-1/2 h-auto min-h-48 object-cover"
      />

      <div className="flex flex-col w-1/2 text-center overflow-hidden">
        <h4 className="text-md font-bold text-[var(--color-primary)] uppercase mb-1 leading-snug">
          {activity.title}
        </h4>

        <p className="text-xs text-green-700 mb-2">
          {parseCustomDate(activity.startDate).toLocaleDateString()} al{" "}
          {parseCustomDate(activity.endDate).toLocaleDateString()}
        </p>

        <p className="text-sm text-[var(--color-text-dark)] mb-2 leading-tight text-center line-clamp-4">
          {activity.description}
        </p>

        <a
          onClick={() => navigate(`/activity/${activity.id}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[var(--color-primary)] hover:underline text-center cursor-pointer"
        >
          Leer más...
        </a>
      </div>
    </div>
  );

  return (
    <>
      <main className="flex flex-col items-center px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          NUESTROS TALLERES
        </h1>

        {activities.length === 0 && (
          <div className="text-center text-lg text-gray-500 mb-4">
            No hay talleres disponibles en este momento.
            <br />
            Por favor, vuelve más tarde.
          </div>
        )}

        {/* Talleres */}
        {!loading && (
          <div className="w-full max-w-7xl">
            {upcomingActivities.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-[#9a4c52] mb-4">
                  Próximos talleres
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {upcomingActivities.map(renderActivityCard)}
                </div>
              </>
            )}

            {pastActivities.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-[#9a4c52] mt-8 mb-4">
                  Talleres pasados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pastActivities.map(renderActivityCard)}
                </div>
              </>
            )}
          </div>
        )}

        {/* Botón de añadir actividad */}
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

        {/* Vista de creación de actividad */}
        <Modal
          title={"Crea un nuevo taller "}
          open={showAdminView}
          onClose={() => setShowAdminView(false)}
        >
          <CreateActivityForm />
        </Modal>
      </main>
    </>
  );
}

export default Activities;

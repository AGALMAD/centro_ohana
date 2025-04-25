import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Activity } from "../models/activity";
import activityService from "../services/activity.service";
import Modal from "../components/Modal";
import userService from "../services/user.service";
import authService from "../services/auth.service";

function Activities() {
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;
  const [activities, setActivities] = useState<Activity[]>([]);

  const [loading, setLoading] = useState(true);

  const [showAdminView, setShowAdminView] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState<Activity | null>(null);

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
      {/* Botón de edición solo para admins */}
      {(userService.currentUser?.role === "ADMIN" ||
        userService.currentUser?.role === "EDITOR") && (
        <button
          className="absolute top-2 right-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white p-1 rounded-full shadow-md"
          onClick={() => {
            setActivityToEdit(activity);
            setShowAdminView(true);
          }}
          title="Editar actividad"
        >
          ✏️
        </button>
      )}

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
          href={activity.postLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[var(--color-primary)] hover:underline text-center"
        >
          Leer más...
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          NUESTROS TALLERES
        </h1>

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

        {/* Spinner de carga */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="w-16 h-16 border-4 border-[#9a4c52] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Vista de edición de actividad */}
        <Modal
          title={"Realiza los cambios del taller "}
          open={showAdminView}
          children={""}
          onClose={() => setShowAdminView(false)}
        ></Modal>
      </main>
    </>
  );
}

export default Activities;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Activity } from "../models/activity";
import activityService from "../services/activity.service";

function Activities() {
  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await activityService.getActivities();
        console.log(activities);
        setActivities(activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          NUESTROS TALLERES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-[var(--color-bg)] rounded-xl shadow-xl p-6 flex items-start gap-4 max-w-lg mx-auto hover:shadow-2xl transition duration-300"
            >
              {/* Imagen alargada, ocupa el 50% de ancho y altura */}
              <img
                src={BASE_URL + activity.imageUrl}
                alt={activity.title}
                className="rounded-lg w-1/2 h-48 object-cover"
              />

              {/* Contenido a la derecha ocupando el 50% del espacio */}
              <div className="flex flex-col w-1/2 text-center overflow-hidden">
                <h4 className="text-md font-bold text-[#9a4c52] uppercase mb-1 leading-snug">
                  {activity.title}
                </h4>

                <p className="text-xs text-green-700 mb-2">
                  {activity.startDate}{" "}
                  {activity.endDate && `al ${activity.endDate}`}
                </p>

                <p className="text-sm text-gray-700 mb-2 leading-tight text-center line-clamp-4">
                  {activity.description}
                </p>

                <a
                  href={activity.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#9a4c52] hover:underline text-center"
                >
                  Leer más...
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Activities;

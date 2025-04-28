import React, { act, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import userService from "../services/user.service";
import { Activity } from "../models/activity";
import activityService from "../services/activity.service";

function ActivityPage() {
  const { id } = useParams<{ id: string }>();

  const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/`;

  const [activity, setActivity] = useState<Activity | null>(null);

  const [loading, setLoading] = useState(true);

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
    const fetchActivity = async () => {
      setLoading(true);

      try {
        const activity = await activityService.getActivity(id!);
        if (!activity) {
          throw new Error("Activity not found");
        }
        setActivity(activity);
      } catch (error) {
        console.error("Error fetching activity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-100">
        {activity && (
          <div className="flex flex-col items-center justify-start max-w-[800px] mt-12 mb-12">
            <div className=" flex flex-col items-center justify-center">
              <h1 className="mb-8 text-center">{activity.title}</h1>
              <img
                src={BASE_URL + activity.imageUrl}
                alt="Imagen Taller"
                className=" max-w-fit max-h-[500px] "
              />
            </div>

            <div>
              <div className="mt-8">
                <p className=" max-w-[500px]">{activity.description}</p>
                <p className=" mt-8 ">
                  📆Cuándo : Del {activity.startDate} al {activity.endDate}
                </p>
                <p className="mt-4">
                  🕛Horario: {activity.startTime} a {activity.endTime}
                </p>
              </div>

              <div className="mt-8">
                {activity.paragraphs.map((paragraph, index) => (
                  <div key={index} className=" mt-4">
                    {paragraph.title && (
                      <h4 className="text-xl font-semibold">
                        {paragraph.title}
                      </h4>
                    )}
                    <p>{paragraph.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-[var(--color-primary)] mr-4 text-white text-xl font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#7f3d44] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9a4c52] focus:ring-opacity-50 ">
                Inscribirse
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default ActivityPage;

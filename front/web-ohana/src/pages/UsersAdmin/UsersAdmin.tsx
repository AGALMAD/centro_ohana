import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { UserResponse } from "../../models/user-response";
import UserService from "../../services/user.service";
import Modal from "../../components/Modal";
import CreateOrUpdateUser from "../../components/CreateOrUpdateUserForm";
import userService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { UpdateUserRequest } from "../../models/update-user-request";

function UsersAdmin() {
  const [allUsers, setAllUsers] = useState<UserResponse[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authenticatedUser = await userService.getAuthenticatedUser();
        userService.currentUser = authenticatedUser;

        if (!authenticatedUser || authenticatedUser.role !== "ADMIN") {
          console.error(
            "Acceso denegado. Solo los administradores pueden acceder."
          );
          navigate("/");
          return;
        }

        const allUsers = await UserService.getAllUsers();
        const filtered = allUsers.filter(
          (user) => user.id !== authenticatedUser.id
        );
        setAllUsers(filtered);
      } catch (error) {
        console.error("Error de autenticación:", error);
        navigate("/");
      }
    };

    fetchData();
  }, []); // Aquí eliminamos `isUsersChanged`, ya que ahora vamos a actualizar manualmente

  const handleEditUser = (user: UserResponse) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    console.log("Delete user with ID:", userId);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-20 h-[100vh]">
        <div className="max-w-3xl w-full px-4 py-6 bg-[#f8efea] rounded-lg shadow-xl">
          {/* Apartado del Usuario Actual */}
          {userService.currentUser && (
            <div className="mb-6 p-4 bg-purple-100 rounded-md">
              <h2 className="text-xl font-semibold text-purple-900 mb-4 text-center">
                Usuario Actual
              </h2>
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                      Usuario
                    </th>
                    <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                      Rol
                    </th>
                    <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="text-sm text-gray-700 bg-purple-200 hover:bg-purple-300">
                    <td className="px-3 py-2 text-center">
                      {userService.currentUser.username}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {userService.currentUser.role}
                    </td>
                    <td className="px-3 py-2 text-center space-x-2">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleEditUser(userService.currentUser)}
                      >
                        Editar
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() =>
                          handleDeleteUser(userService.currentUser.id)
                        }
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tabla de usuarios */}
          <h1 className="text-2xl font-semibold text-center mb-6">
            Todos los Usuarios
          </h1>

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                  Usuario
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                  Rol
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-purple-900">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allUsers && allUsers.length > 0 ? (
                allUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`text-sm text-gray-700 ${
                      index % 2 === 0
                        ? "bg-purple-200 hover:bg-purple-300"
                        : "bg-pink-100 hover:bg-pink-200"
                    }`}
                  >
                    <td className="px-3 py-2 text-center">{user.username}</td>
                    <td className="px-3 py-2 text-center">{user.role}</td>
                    <td className="px-3 py-2 text-center space-x-2">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleEditUser(user)}
                      >
                        Editar
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-2 text-center text-gray-500"
                  >
                    No hay usuarios disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal para editar usuario */}
      <Modal
        title="Editar Usuario"
        open={isModalOpen}
        onClose={handleModalClose}
      >
        {selectedUser && (
          <div>
            <CreateOrUpdateUser
              user={selectedUser}
              onSubmit={async (updatedUser: UpdateUserRequest) => {
                // Actualiza el usuario
                await UserService.updateUserData(updatedUser);

                // Actualiza el usuario en el estado local
                setAllUsers(
                  (prevUsers) =>
                    prevUsers?.map((user) =>
                      user.id === updatedUser.id
                        ? { ...user, ...updatedUser }
                        : user
                    ) || []
                );

                setIsModalOpen(false);
                setSelectedUser(null);
              }}
              onClose={handleModalClose}
            />
          </div>
        )}
      </Modal>
    </>
  );
}

export default UsersAdmin;

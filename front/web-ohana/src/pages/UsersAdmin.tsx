import { useEffect, useState } from "react";
import { UserResponse } from "../models/user-response";
import Modal from "../components/Modal";
import CreateOrUpdateUser from "../components/CreateOrUpdateUserForm";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import Swal from "sweetalert2";

function UsersAdmin() {
  const [allUsers, setAllUsers] = useState<UserResponse[] | null>(null);

  // Modal para editar o crear usuario
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);

  // Modal para eliminar usuario
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<UserResponse | null>(null);

  // Para mostrar spin de carga
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const authenticatedUser = await userService.getAuthenticatedUser();
        userService.currentUser = authenticatedUser;

        if (!authenticatedUser || authenticatedUser.role !== "ADMIN") {
          console.error(
            "Acceso denegado. Solo los administradores pueden acceder."
          );
          navigate("/");
          return;
        }

        const allUsers = await userService.getAllUsers();
        const filtered = allUsers.filter(
          (user) => user.id !== authenticatedUser.id
        );
        setAllUsers(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error de autenticación:", error);
        navigate("/");
      }
    };

    fetchData();
  }, []);

  const handleEditUser = (user: UserResponse) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (user: UserResponse) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const confirmDeleteUser = async () => {
    if (userToDelete) {
      setLoading(true);
      setIsDeleteModalOpen(false);

      try {
        await userService.deleteUser(userToDelete.id);

        Swal.fire({
          title: "Usuario Eliminado",
          html: `Usuario <b>${userToDelete.username}</b> eliminado correctamente.`,
          icon: "success",
          confirmButtonText: "Continuar",
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        }).then(async () => {
          if (userToDelete.id === userService.currentUser?.id) {
            await authService.logout();
            navigate("/login");
          }
        });

        setAllUsers(
          (prevUsers) =>
            prevUsers?.filter((user) => user.id !== userToDelete.id) || []
        );
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      } finally {
        setLoading(false);
        setIsDeleteModalOpen(false);
        setUserToDelete(null);
      }
    }
  };

  return (
    <>
      {!loading && (
        <main className="flex justify-center h-[100vh]">
          <div className="max-w-3xl w-full mt-12 px-4 py-6 bg-[#f3f2f2] rounded-lg shadow-xl">
            {/* Apartado del Usuario Actual */}
            {!loading && userService.currentUser && (
              <div className="mb-6 p-4 rounded-md">
                <h2 className=" mb-8 text-center">Usuario Actual</h2>

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
                          onClick={() =>
                            handleEditUser(userService.currentUser)
                          }
                        >
                          Editar
                        </button>
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() =>
                            handleDeleteUser(userService.currentUser)
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

            <h1 className=" text-center mb-8">Todos los Usuarios</h1>

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
                          onClick={() => handleDeleteUser(user)}
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

            {/* Botón para agregar usuario */}
            <div className="flex justify-center mt-12">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
                onClick={() => {
                  setSelectedUser(null);
                  setIsModalOpen(true);
                }}
              >
                Agregar Usuario
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Modal para editar o crear usuario */}
      <Modal
        title={selectedUser ? "Editar Usuario" : "Agregar Usuario"}
        open={isModalOpen}
        onClose={handleModalClose}
      >
        <CreateOrUpdateUser
          user={selectedUser ?? undefined}
          onSubmit={async (userData) => {
            if ("id" in userData) {
              // Es edición
              await userService.updateUserData(userData);
              setAllUsers(
                (prevUsers) =>
                  prevUsers?.map((user) =>
                    user.id === userData.id ? { ...user, ...userData } : user
                  ) || []
              );
            } else {
              // Es nuevo
              const newUser = await userService.createUser(userData);
              setAllUsers((prevUsers) => [...(prevUsers || []), newUser]);
            }

            setIsModalOpen(false);
            setSelectedUser(null);
          }}
          onClose={handleModalClose}
        />
      </Modal>

      <Modal
        title="Confirmar Eliminación"
        open={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setUserToDelete(null);
        }}
      >
        <div className="text-center">
          <p className="mb-4">
            ¿Estás seguro que deseas eliminar al usuario{" "}
            <strong>{userToDelete?.username}</strong>?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={confirmDeleteUser}
            >
              Eliminar
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => {
                setIsDeleteModalOpen(false);
                setUserToDelete(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>

      {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  );
}

export default UsersAdmin;

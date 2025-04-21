import React, { useState } from "react";
import { UserResponse } from "../models/user-response";
import UserService from "../services/user.service";
import { NewUserRequest } from "../models/new-user-request";
import { UpdateUserRequest } from "../models/update-user-request";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";

type Props = {
  user: UserResponse;
  onSubmit?: (user: UpdateUserRequest) => void;
  onClose?: () => void;
};

function CreateOrUpdateUser({ user, onSubmit, onClose }: Props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const updatedUser: UpdateUserRequest = {
        id: user.id,
        username: username,
        password: password || undefined, // Si no hay contraseña, se envía como undefined
      };

      await onSubmit?.(updatedUser);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose?.(); // Cierra el modal
        // Si se actualiza el usuario actual, redirige a la página de inicio de sesión
        if (user.id === userService.currentUser?.id) {
          navigate("/login");
        }
      }, 1500);
    } catch (err) {
      setError("Error al actualizar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Usuario
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nueva Contraseña
        </label>
        <input
          type="password"
          value={password}
          placeholder="Dejar en blanco para no cambiar"
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm">¡Usuario actualizado!</p>
      )}

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
}

export default CreateOrUpdateUser;

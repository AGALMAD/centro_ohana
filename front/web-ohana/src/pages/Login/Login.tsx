import React, { useState } from "react";
import "./Login.css";
import { AuthRequest } from "../../models/auth-request";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";
import { Helmet } from "react-helmet";
import { useAuth } from "../../context/auth-context";

function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  //Para almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    apiService.jwt = null; // Limpiar el token JWT antes de iniciar sesión

    const requestBody: AuthRequest = {
      username: username,
      password: password,
    };

    try {
      const response = await authService.login(requestBody);

      if (response) {
        Swal.fire({
          title: "¡Éxito!",
          text: "Has iniciado sesión correctamente.",
          icon: "success",
          confirmButtonText: "Continuar",
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        }).then(() => {
          navigate("/");
        });
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      console.error("Error:", error);
      setError("Nombre de usuario o contraseña incorrectos.");

      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <Helmet>
        <title>Acceso | Centro Ohana</title>
      </Helmet>

      <main className="max-w-md mx-auto mt-20 p-6 bg-[#fde4ff] shadow-lg rounded-xl">
        <div className="flex justify-center gap-8 mb-12">
          <h1 className="text-2xl font-bold text-[#6A0572]">Iniciar Sesión</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Tu nombre de usuario"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="text-red-500 font-bold text-sm mt-2">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#6A0572] text-white py-2 px-4 rounded hover:bg-[#784a7b] font-bold cursor-pointer transition duration-200"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Spinner de carga */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="w-16 h-16 border-4 border-[#9a4c52] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>
    </>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { AuthRequest } from "../models/auth-request";
import AuthService from "../services/authService";

function Login() {
  const FORM_TYPES = {
    LOGIN: "login",
    SIGNUP: "signup",
  };

  const API_URL = import.meta.env.VITE_API_URL + "auth";

  //Para saber si quiere iniciar sesión o registrarse
  const [formType, setFormType] = useState(FORM_TYPES.LOGIN);

  //Para almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody: AuthRequest = {
      username: username,
      password: password,
    };

    try {
      const response =
        formType === FORM_TYPES.LOGIN
          ? await AuthService.login(requestBody)
          : await AuthService.register(requestBody);

      if (response) {
        console.log("Response:", response);
      }
    } catch (error: any) {
      console.error("Error:", error);
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
      <Navbar />

      <main className="max-w-md mx-auto mt-20 p-6 bg-[#fde4ff] shadow-lg rounded-xl">
        <div className="flex justify-center gap-8  mb-4">
          <h1
            onClick={() => setFormType(FORM_TYPES.LOGIN)}
            className={`${
              formType === FORM_TYPES.LOGIN ? "focus" : "not-focus"
            }`}
          >
            Iniciar Sesión
          </h1>
          <h1
            onClick={() => setFormType(FORM_TYPES.SIGNUP)}
            className={`${
              formType === FORM_TYPES.SIGNUP ? "focus" : "not-focus"
            }`}
          >
            Registro
          </h1>
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

          <button
            type="submit"
            className="w-full bg-[#6A0572] text-white py-2 px-4 rounded hover:bg-[#784a7b] font-bold cursor-pointer transition duration-200"
          >
            {FORM_TYPES.LOGIN === formType ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;

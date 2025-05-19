import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import Swal from "sweetalert2";
import apiService from "../services/api.service";

export default function TokenWatcher() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      if (apiService.isTokenExpired()) {
        authService.logout();

        Swal.fire({
          title: "¡Token expirado!",
          text: "¿Deseas iniciar sesión nuevamente?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, iniciar sesión",
          cancelButtonText: "No",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    };

    checkToken();
  }, [navigate]);

  return null;
}

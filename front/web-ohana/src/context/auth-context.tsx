import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import userService from "../services/user.service";
import { AuthRequest } from "../models/auth-request";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

interface AuthenticatedUser {
  username: string;
  role: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  authenticatedUser: AuthenticatedUser | null;
  setAuthenticatedUser: (user: AuthenticatedUser | null) => void;
  login: (request: AuthRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [authenticatedUser, setAuthenticatedUser] =
    useState<AuthenticatedUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (isLoggedIn) {
        try {
          const user = await userService.getAuthenticatedUser();
          setAuthenticatedUser(user);
        } catch (error) {
          console.error("Error fetching authenticated user:", error);
          setAuthenticatedUser(null);
          setIsLoggedIn(false);
        }
      } else {
        setAuthenticatedUser(null);
      }
    };

    fetchUser();
  }, [isLoggedIn]);

  const login = async (request: AuthRequest) => {
    await authService.login(request);
    const user = await userService.getAuthenticatedUser();
    setAuthenticatedUser(user);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await authService.logout();
    setAuthenticatedUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        authenticatedUser,
        setAuthenticatedUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

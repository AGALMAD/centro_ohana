import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
import TokenWatcher from "./components/TokenWatcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TokenWatcher />
        <Navbar />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

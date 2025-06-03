import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
import TokenWatcher from "./components/TokenWatcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/auth-context";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
import TokenWatcher from "./components/TokenWatcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <TokenWatcher />
      <Navbar></Navbar>
      <AppRoutes />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

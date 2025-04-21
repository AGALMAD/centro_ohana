import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

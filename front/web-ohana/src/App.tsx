import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
import TokenWatcher from "./components/TokenWatcher";

function App() {
  return (
    <BrowserRouter>
      <TokenWatcher />

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

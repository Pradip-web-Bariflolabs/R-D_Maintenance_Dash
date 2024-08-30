import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import MaintenanceMainPage from "./components/maintenance/MaintenanceMainPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/maintenance" element={<MaintenanceMainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

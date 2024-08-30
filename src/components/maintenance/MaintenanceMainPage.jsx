import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import LandingPage from "./LandingPage";
import LoraTesting from "./Lora/LoraTesting";

const MaintenanceMainPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loratesting" element={<LoraTesting />} />
        </Routes>
      </div>
    </div>
  );
};
export default MaintenanceMainPage;

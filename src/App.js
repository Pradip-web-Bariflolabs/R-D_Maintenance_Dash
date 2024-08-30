import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import LoraTesting from "./components/maintenance/Lora/LoraTesting";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoraTesting />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
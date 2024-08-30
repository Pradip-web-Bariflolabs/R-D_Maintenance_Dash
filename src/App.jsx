import "./App.css";
import SideBar from "./components/SideBar";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

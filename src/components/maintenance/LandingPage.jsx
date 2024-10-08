import React, { useState, useMemo, useRef, useEffect } from "react";
import "./LandingPage.css";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

// Function to get random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const LandingPage = () => {
  const [activePopup, setActivePopup] = useState(null);
  const deviceData = useRef(null);
  const colors = useMemo(
    () => ({
      lora: getRandomColor(),
      rpm: getRandomColor(),
      smps: getRandomColor(),
      proximity: getRandomColor(),
    }),
    []
  );
  const navigate = useNavigate();
  const location = useLocation();
  const {state}=location;
  console.log(state?.data);
  

  useEffect(() => {
    console.log("api called ");
  }, []);

  const togglePopup = (popupName) => {
    if (activePopup === popupName) {
      setActivePopup(null);
    } else {
      setActivePopup(popupName);
    }
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const data={
      "topic":deviceData.current?.value,
  
    }
    const response=await axios.post(`${process.env.REACT_APP_IP}/post_node_id/${state?.data}/`,data);
    console.log(response);
    if(response.status==201){
      navigate("/maintenance/loratesting/", { state: { data: deviceData.current?.value } });
    }
  
  };

  return (
    <div className="container-fluid">
      <div id="btn-grp" className={`d-flex ${activePopup ? "blurred" : ""}`}>
        <div className={`flex-grow-1 p-2 `}>
          <div className="bg-light text-center text-dark border border-dark rounded ml-lg-0 ml-md-0">
            <h3>COMPONENT</h3>
          </div>
          <div className=" d-flex gap-3 flex-wrap p-5 ml-40px">
            <button
              className="btn text-white btn-overlay"
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: colors.lora,
                fontSize: "40px",
              }}
              onClick={() => togglePopup("lora")}
            >
              <span className="btn-text">LORA</span>
              <div className="overlay"></div>
            </button>

            <button
              type="button"
              className="btn text-white btn-overlay"
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: colors.rpm,
                fontSize: "40px",
              }}
              onClick={() => togglePopup("rpm")}
            >
              <span className="btn-text">rpm ENCODER</span>
              <div className="overlay"></div>
            </button>

            <button
              type="button"
              className="btn text-white btn-overlay"
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: colors.smps,
                fontSize: "40px",
              }}
              onClick={() => togglePopup("smps")}
            >
              <span className="btn-text">SMPS</span>
              <div className="overlay"></div>
            </button>

            <button
              type="button"
              className="btn text-white btn-overlay"
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: colors.proximity,
                fontSize: "40px",
              }}
              onClick={() => togglePopup("proximity")}
            >
              <span className="btn-text">Proximity Sensor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Popup Content */}
      {activePopup === "lora" && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>
          <i class="bi bi-x-lg"></i>
          </button>
          <div className="popup-content">
  <h4>Node value:</h4>
  <form onSubmit={handleSubmit}>
    <input
      type="number"
      className="form-control"
      placeholder="Topic of the device"
      ref={deviceData}
      required
    />
    <button
      type="submit"
      className="btn btn-success"
      style={{ backgroundColor: "green", color: "white" }}
    >
      Submit
    </button>
  </form>
</div>

        </div>
      )}

      {activePopup === "rpm" && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>
          <i class="bi bi-x-lg"></i>
          </button>
          <div className="popup-content">
            <button>in rpm</button>
            <button>out rpm</button>
          </div>
        </div>
      )}

      {activePopup === "smps" && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>
          <i class="bi bi-x-lg"></i>
          </button>
          <div className="popup-content">
            <h2>SMPS Popup Content</h2>
          </div>
        </div>
      )}

      {activePopup === "proximity" && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>
          <i class="bi bi-x-lg"></i>
          </button>
          <div className="popup-content">
            <h2>Proximity Sensor Popup Content</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
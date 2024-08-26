import React, { useState } from 'react';
import './Body.css'; // Make sure you have the necessary styles in this file

// Function to get random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Body() {
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (popupName) => {
    if (activePopup === popupName) {
      setActivePopup(null); 
    } else {
      setActivePopup(popupName); 
    }
  };

  return (
    <div>
      <div id="btn-grp" className={`d-flex ${activePopup ? 'blurred' : ''}`}>
        <div className={`flex-grow-1 p-5`}>
          <div className='bg-light text-center text-dark border border-dark rounded'>
            <h3>COMPONENT</h3>
          </div>
          <div className="btn-grp d-flex gap-3 flex-wrap p-5 ml-40px">
            <button 
              type="button" 
              className='btn text-white btn-overlay'
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: getRandomColor(),
                fontSize: "40px"
              }}
              onClick={() => togglePopup('lora')}
            >
              <span className="btn-text">LORA</span>
              <div className="overlay"></div>
            </button>

            <button 
              type="button" 
              className='btn text-white btn-overlay'
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: getRandomColor(),
                fontSize: "40px"
              }}
              onClick={() => togglePopup('rpm')}
            >
              <span className="btn-text">rpm ENCODER</span>
              <div className="overlay"></div>
            </button>

            <button 
              type="button" 
              className='btn text-white btn-overlay'
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: getRandomColor(),
                fontSize: "40px"
              }}
              onClick={() => togglePopup('smps')}
            >
              <span className="btn-text">SMPS</span>
              <div className="overlay"></div>
            </button>

            <button 
              type="button" 
              className='btn text-white btn-overlay'
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: getRandomColor(),
                fontSize: "40px"
              }}
              onClick={() => togglePopup('proximity')}
            >
              <span className="btn-text">Proximity Sensor</span>
              <div className="overlay"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Popup Content */}
      {activePopup === 'lora' && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>X</button>
          <div className="popup-content">
            <h4>Node value:</h4>
            <input type="text" class="form-control" placeholder="First name"/>
          </div>
        </div>
      )}

      {activePopup === 'rpm' && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>X</button>
          <div className="popup-content">
            <button>in rpm</button>
            <button>out rpm</button>
          </div>
        </div>
      )}

      {activePopup === 'smps' && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>X</button>
          <div className="popup-content">
            <h2>SMPS Popup Content</h2>
          </div>
        </div>
      )}

      {activePopup === 'proximity' && (
        <div className="popup">
          <button className="close-btn" onClick={() => togglePopup(null)}>X</button>
          <div className="popup-content">
            <h2>Proximity Sensor Popup Content</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;

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
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="btn-grp" className="d-flex">
      <div className="flex-grow-1 p-5">
        <div className='bg-light text-center text-dark border border-dark rounded'>
          <h3>COMPONENT</h3>
        </div>
        <div className="d-flex gap-3 flex-wrap p-5 ml-40px">
          <button 
            type="button" 
            className='btn text-white btn-overlay'
            style={{
              height: "250px",
              width: "250px",
              backgroundColor: getRandomColor(),
              fontSize: "40px"
            }}>
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
            onClick={togglePopup}
          >
            <span className="btn-text">rpm ENCODER</span>
            <div className="overlay"></div>
          </button>
            {isOpen && (
            <div className="popup">
              <div className="popup-content">
                <button>in rpm</button>
                <button>out</button>
                <button onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
          
          <button 
            type="button" 
            className='btn text-white btn-overlay'
            style={{
              height: "250px",
              width: "250px",
              backgroundColor: getRandomColor(),
              fontSize: "40px"
            }}>
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
            }}>
            <span className="btn-text">Proximity Sensor</span>
            <div className="overlay"></div>
          </button>
        </div>
      </div>
      
  
    </div>
  );
}

export default Body;

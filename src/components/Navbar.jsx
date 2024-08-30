import React, { useState } from 'react';
import '../assets/css/NavBar.css'; 

function Navbar() {
  const [isConnected, setIsConnected] = useState(true);
  
  const dynamicImage = isConnected ? 
    <i class="bi bi-check2-circle " style = {{color:"green"}}></i>   : <i class="bi bi-x-circle" style = {{color:"red"}}></i>;

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light w-full " style={{height:"5rem"}}>
        <div className="w-full container-fluid d-flex align-items-center">
          {/* Round circle with logo  */}
          {/* <div className="rounded-circle bg-light shadow d-flex justify-content-center align-items-center" 
               style={{ width: '80px', height: '80px', marginLeft: '3rem', marginTop: '2rem' }}>
          </div> */}

          <div className=" navbar-collapse justify-content-end">
            <div className="d-flex flex-column justify-content-end align-items-end" style={{ right: '20px', top: '10px' }}>
              <button
                className="p-0 mb-0 username-button"
                style={{
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 'normal',
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                }}
              >
                USER NAME
              </button>
              <p className="mb-0">
                MQTT CONN {dynamicImage}
              </p>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

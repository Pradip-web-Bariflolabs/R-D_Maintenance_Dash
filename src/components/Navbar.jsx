import React, { useState } from 'react';

function Navbar() {
  const [isConnected, setIsConnected] = useState(true);
  
  const dynamicImage = isConnected ? (
    <img src="./right.jpeg" alt="Connected" className=" rounded-circle ml-2" style={{ width: '30px', height: '30px' }} />
  ) : null;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height:"5rem"}}>
        <div className="container-fluid d-flex align-items-center">
          {/* Round circle with logo  */}
          <div className="rounded-circle bg-light shadow d-flex justify-content-center align-items-center" 
               style={{ width: '80px', height: '80px', marginLeft: '3rem', marginTop: '2rem' }}>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <div className="d-flex align-items-center">
              <div className="">
                <button className="navbar-text font-weight-normal text-decoration-underline p-0 mb-0" 
                        style={{
                            border: 'none',             
                            fontSize: '2rem',           
                            fontWeight: 'normal',       
                            textDecoration: 'underline', 
                            backgroundColor: 'transparent',                  
                        }}>
                  USER NAME
                </button>
                <p className="mb-0">
                  MQTT CONN {dynamicImage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

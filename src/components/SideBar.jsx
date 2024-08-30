import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/SideBar.css';

function SideBar() {

  const [isOpen, setIsOpen] = useState(false); 

  const toggleOpen = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
    <button
      className='toggle-btn'
      onClick={toggleOpen}
    >
    <i className="bi bi-list "></i>
    </button>

   
      <aside className="d-flex flex-column bg-light col-auto min-vh-100 border border-top-0 ">
        <div className="  flex-column flex-grow-1 side-bar" style={{ marginTop: '57px', marginLeft: '24px' }}>
          <button
          className='side-btn'
          >
          <i className="bi bi-collection icon" style={{ marginRight: "0.7rem" }}></i> 
            Dashboard
          </button>
          <button
          className='side-btn'
          >
            <i className="bi bi-box-arrow-right icon" style={{ marginRight: "0.7rem"}}></i>
            Logout
          </button>
          
        </div>
      </aside>

      {/* for toggle button  */}
      {isOpen && (
        <div className='float-div'>
          <div className='side-btn'>
            <i className="bi bi-collection icon p-6" style={{ marginRight: "0.7rem"}}></i> 
            Dashboard
          </div>
          <div className='side-btn'>
            <i className="bi bi-box-arrow-right icon p-6" style={{ marginRight: "0.7rem"}}></i>
            Logout
          </div>
        </div>
      )}

    </>
  );
}

export default SideBar;

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/SideBar.css';

function SideBar() {

  const [isOpen, setIsOpen] = useState(true); 

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

    {isOpen && (
      <aside className="d-flex flex-column bg-light col-auto min-vh-100 border border-top-0 ${isOpen ? 'open' : 'closed'}">
        <div className="  flex-column flex-grow-1 side-bar" style={{ marginTop: '57px', marginLeft: '24px' }}>
          <div className='side-btn'>
            <i className="bi bi-collection icon"></i> 
            Dashboard
          </div>
          <div className='side-btn'>
            <i className="bi bi-box-arrow-right icon"></i>
            Logout
          </div>
        </div>
      </aside>
      )}
    </>
  );
}

export default SideBar;

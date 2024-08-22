import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

// Styled component for the button
const CustomButton = styled.button`
  width: 10rem;          
  border: none;        
  border-radius: 10px;    
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f9fa; 
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  .icon {
    margin-right: 10px; 
  }
`;

function SideBar() {
  return (
    <aside className="d-flex flex-column bg-light col-auto min-vh-100 border border-top-0" style={{ width: '200px' }}>
      <div className="flex-grow-1" style={{ marginTop: '57px', marginLeft: '24px' }}>
        <CustomButton>
          <i className="bi bi-collection icon"></i> 
          Dashboard
        </CustomButton>

        <CustomButton>
          <i className="bi bi-box-arrow-right icon"></i>
          Logout
        </CustomButton>
        
      </div>
    </aside>
  );
}

export default SideBar;

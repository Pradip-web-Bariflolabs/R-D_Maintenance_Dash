import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../Chart';

const LoraTesting = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left side with the chart */}
        <div className="col-6 d-flex justify-content-center align-items-center position-relative">
          <Chart />
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: 'black',
            }}
          ></div>
        </div>

        {/* Right side with scrollable content */}
        <div className="col-6 overflow-auto" style={{ maxHeight: '100vh' }}>
          {/* Random data for testing scroll */}
          <div className="p-3">
            {[...Array(50)].map((_, index) => (
              <div key={index} className="mb-2 p-2 border border-gray-300">
                Random Data {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoraTesting;

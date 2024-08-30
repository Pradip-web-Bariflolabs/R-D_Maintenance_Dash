import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../Chart';
import './LoraTesting.css'

const LoraTesting = () => {
  return (
    <>
      {/* Device ID centered at the top */}
      <div className="d-flex justify-content-center">
        <p className="border border-primary border-3 mt-4 p-2 rounded fw-bold ">DeviceId: 123456789</p>
      </div>

      <div className="container-fluid vh-100">
        <div className="row h-100 d-flex justify-content-evenly">
          {/* Left side with the chart on larger screens; on smaller screens, this will be on top */}
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center p-3 border border-primary border-3 rounded-5 " style={{ maxHeight: '85vh', maxWidth:'95vh' }}>
            <Chart />
          </div>

          {/* Right side with scrollable content; on smaller screens, this will be below the chart */}
          <div className="col-lg-6 col-12 overflow-auto border border-primary border-3 rounded-5 hide-scrollbar" style={{ maxHeight: '85vh', maxWidth:'95vh' }}>
            {/* Random data for testing scroll */}
            <div className="p-3 text-center ">
              {[...Array(50)].map((_, index) => (
                <div key={index} className="mb-2 p-2 border border-gray-300 ">
                  Random Data {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoraTesting;

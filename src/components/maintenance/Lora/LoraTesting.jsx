import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "../Chart";
import { useLocation } from 'react-router-dom';
import './LoraTesting.css';

const LoraTesting = () => {
  const location = useLocation();
  const { state } = location;
  const topicid = state?.data;
  console.log(topicid);

  return (
    <div className="container-fluid">
      <div className='d-flex justify-content-center my-3'>
        <p className="border border-primary border-2 px-3 py-1 rounded">
          DeviceId: {topicid}
        </p>
      </div>

      <div className='d-flex flex-wrap justify-content-around'>

        <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center  border border-primary border-3 rounded-5 mb-3" style={{ height: '80vh', maxWidth: '80%' }}>
          <Chart />
        </div>

        <div className="col-lg-5 col-12 overflow-auto border border-primary border-3 rounded-5 hide-scrollbar mb-3" style={{ height: '80vh', maxWidth: '80%' }}>
          {/* Random data for testing scroll */}
          <div className="p-3 text-center">
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

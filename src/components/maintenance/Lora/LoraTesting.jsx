import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../Chart";
import "./LoraTesting.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
const LoraTesting = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { state } = location;
  const topic = state?.data;
  console.log(topic);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_IP}/get_lora_data/${topic}/`
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, [topic]);

  return (
    <>
      <div className="container-fluid">
      <div className='d-flex justify-content-center my-3'>
        <p className="border border-primary border-2 px-3 py-1 rounded">
          DeviceId: {topic}
        </p>
      </div>

      <div className='d-flex flex-wrap justify-content-around'>

      <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center  border border-primary border-3 rounded-5 mb-3" style={{ height: '80vh', maxWidth: '80%' }}>
          <Chart />
        </div>


          {/* Right side with scrollable content; on smaller screens, this will be below the chart */}
          <div className="col-lg-5 col-12 overflow-auto border border-primary border-3 rounded-5 hide-scrollbar mb-3" style={{ height: '80vh', maxWidth: '80%' }}>
            
            {/* Random data for testing scroll */}
            <div className="p-3 text-center ">
              {data.map((item, index) => (
                <div key={index} className="mb-2 p-2 border border-gray-300 ">
                  <p>
                    <strong>Data Point:</strong> {item.data.dataPoint},
                    <strong>Param Type:</strong> {item.data.paramType},
                    <strong>Param Value:</strong> {item.data.paramValue},
                    <strong>Device ID:</strong> {item.data.deviceId},
                  </p>
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

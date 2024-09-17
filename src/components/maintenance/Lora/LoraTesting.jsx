import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../../chart/Chart";
import "./LoraTesting.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BarChart from "../../chart/BarChart";
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
      <div className="container-fluid ">
        <div className='d-flex justify-content-around my-3'>
          <p className="border border-primary border-2 px-3 py-1 rounded">
            DeviceId: {topic}
          </p>
          <p className="border border-primary border-2 px-3 py-1 rounded">
            RPM Deviation Detected
          </p>
          <p className="border border-primary border-2 px-3 py-1 rounded">
            Current Spike
          </p>
        </div>

        <div className='d-flex flex-column'>

          <div className='d-flex flex-wrap justify-content-around'>
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center  border border-primary border-3 rounded-5 mb-3" style={{ maxWidth: '80%' }}>
              <Chart types={'line'} />
            </div>


            {/* Right side with scrollable content; on smaller screens, this will be below the chart */}
            <div className="col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center border border-primary border-3 rounded-5 mb-3 position-relative" style={{ maxWidth: '80%' }}>
              {/* Green boxes at the top-right corner */}
              <div className="position-absolute top-0 end-0 p-2" style={{ width: '200px' }}>
                <div className="d-flex justify-content-around mb-1 mt-1">
                  <div className="border border-1 rounded-1" style={{ width: '15px', height: '15px', backgroundColor: 'red' }}></div>
                  <div className="border border-1 rounded-1" style={{ width: '15px', height: '15px', backgroundColor: 'green' }}></div>
                  <div className="border border-1 rounded-1" style={{ width: '15px', height: '15px', backgroundColor: 'blue' }}></div>
                  <div className="border border-1 rounded-1" style={{ width: '15px', height: '15px', backgroundColor: 'skyblue' }}></div>
                  <div className="border border-1 rounded-1" style={{ width: '15px', height: '15px', backgroundColor: 'purple' }}></div>
                </div>
              </div>

              {/* Chart */}
              <div className="w-100 mt-5">
                <BarChart />
              </div>
            </div>


          </div>



          <div className="overflow-auto d-flex justify-content-center hide-scrollbar mb-3 text-center" >

            {/* Random data for testing scroll */}
            {/* <div className="p-3 text-center ">
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
            </div> */}

            <table className="table table-striped table-bordered" style={{ width: '65vw' }}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Timestamp</th>
                  <th scope="col">RPM</th>
                  <th scope="col">Current (A)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:01:00</td>
                  <td>1500</td>
                  <td>2.5</td>
                </tr>
                <tr>
                  <td>12:02:00</td>
                  <td>1750</td>
                  <td>3.1</td>
                </tr>
                <tr>
                  <td>12:03:00</td>
                  <td>1800</td>
                  <td>2.8</td>
                </tr>
                <tr>
                  <td>12:04:00</td>
                  <td>1600</td>
                  <td>2.9</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>


      </div>
    </>
  );
};

export default LoraTesting;

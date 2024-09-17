import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chart = ({types,data}) => {
  const areaChart = {
    chart: {
      type: types,
    },
    stroke: {
      curve: 'smooth',
    },
    series: [
      {
        name: 'one',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
      {
        name: 'two',
        data: [20, 30, 35, 10, 45, 50, 12, 70, 80],
      },
      {
        name: 'three',
    data: [15, 25, 35, 45, 55, 65, 75, 85, 95],
      },
      {
        name: 'four',
    data: [40, 50, 60, 70, 80, 90, 100, 110, 120],
      },
      {
        name: 'five',
    data: [5, 15, 25, 35, 45, 55, 65, 75, 85],
      },
      
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false, // Hides the data values on the graph
    },
  };

  return (
      <>
      {/* Left side with the chart */}
          <div style={{ width: '90%' }}>
            <ReactApexChart
              options={areaChart}
              series={areaChart.series}
              type={types}
              height={400}
            />
          </div>
   
      </>
  );
};

export default Chart;

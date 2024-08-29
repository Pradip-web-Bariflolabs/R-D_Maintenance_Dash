import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chart = () => {
  const areaChart = {
    chart: {
      type: 'area',
    },
    stroke: {
      curve: 'smooth',
    },
    series: [
      {
        name: 'sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
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
          <div style={{ width: '80%' }}>
            <ReactApexChart
              options={areaChart}
              series={areaChart.series}
              type="area"
              height={300}
            />
          </div>
   
      </>
  );
};

export default Chart;

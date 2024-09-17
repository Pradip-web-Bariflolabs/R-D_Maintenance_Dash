import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const BarChart = () => {
    const barchart = {
        chart: {
            type: 'bar',
        },

        series: [
            {
                name: 'one',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
            }

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
                    options={barchart}
                    series={barchart.series}
                    type='bar'
                    height={400}
                />
            </div>

        </>
    );
};

export default BarChart;

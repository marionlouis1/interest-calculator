import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function WealthChart({ data }) {
  if (!data || !data.labels) {
    return <div>Loading...</div>; // or any placeholder or loading indicator
  }

  const options = {
    scales: {
      x: {
        type: 'year', // Ensure that the x-axis scale is set to 'linear'
        // transform the 'x' value to a string
        ticks: {
          callback: function (value, index, values) {
            return value.toString();
          },
          //Start at the first x value only
          min: data.labels[0],
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
      <Line data={data} options={options} />
    
  );
}

export default WealthChart;

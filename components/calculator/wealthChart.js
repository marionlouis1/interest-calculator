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
        type: 'linear', // Ensure that the x-axis scale is set to 'linear'
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default WealthChart;

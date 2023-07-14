import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = ({ views = [] }) => {

  // const labels = ["abc", "def", "ghi", "jkl"]; //This will be done only the development 

  const labels = getLastYearMonths();

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', //It will show in the bottom.
    },
    title: {
      display: true,
      text: 'Yearly Views',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Views',
      data: [1,2,3,4], // This will be done only in the development mode
      borderColor: 'rgba(107,70,193,0.5)',
      backgroundColor: '#6b46c1',
    },
  ],
};

return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ['Subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: [30,93], //Values will be taken from subscription
        borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};


// Function to make the Lables in the line chart //

function getLastYearMonths() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();

  const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);  // to shift the month from start
    if (i === 0) break; //loop will break on becoming zero
  }
  
// This will insert the remaining months in the array

  for (let i = 11; i > remain; i--) {
    if (i === currentMonth) break; // break statement is inserted above as to avoid the first insert in the array
    const element = months[i];
    labels.unshift(element);
  }
  
  // console.log(labels); //This will be done only in development mode.
  
  return labels;
}

// getLastYearMonths(); //This will be done only in development mode.
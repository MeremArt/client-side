import React from 'react';
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
let userId2 = localStorage.getItem('userID');
const usdtValue = (1/730);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: '',
    },
  },
};


export function Chart() {
    const [userTransaction, setUserTransaction] = useState([]);

    useEffect(() => {
        const getUserTransactions = async () => {
          try {
            const response = await axios.get(
              `https://hyve-finance-demo.onrender.com/api/v1/transactions/user/${userId2}`
            );
            const historyData = response.data.data;
            setUserTransaction(response.data.data);
      
            if (response.status === 200) {
              console.log('The request was successful');
            } else {
              console.log('Failed to get transaction records');
            }
          } catch (error) {
            console.log('Error occurred while getting transaction records:', error);
          }
        };
      
        // Call the function immediately
        getUserTransactions();
        // const intervalId = setInterval(getUserTransactions, 5000);

        // return () => {
        //   clearInterval(intervalId); // Clear the interval on unmount
        // };
      }, []);

      const dates = userTransaction
      .filter(data => data.transactionType === 'withdrawal')
      .map(data => data.date);

    const amounts = userTransaction
      .filter(data => data.transactionType === 'withdrawal')
      .map(data => Math.floor((data.amount * usdtValue) * 100) / 100);
    
    const dataset = {
      labels: dates,
      datasets: [
        {
          label: 'Withdrawals',
          data: amounts,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

  
  return (
    <div>
    <Line options={options} data={dataset} />
  </div>
  );
}

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const CryptoPriceChart = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with the API URL for the cryptocurrency you want (e.g., Bitcoin)
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 1, // You can adjust the timeframe
            },
          }
        );

        if (!response.data.prices || response.data.prices.length === 0) {
          // Handle the case where prices are undefined or empty
          console.error("No price data available.");
          return;
        }

        const prices = response.data.prices.map((dataPoint) => dataPoint[1]);

        setCryptoData(prices);

        // Calculate price changes
        const priceChanges = prices.map((price, index) =>
          index === 0 ? 0 : price - prices[index - 1]
        );

        setChartData({
          labels: Array.from({ length: prices.length }, (_, i) => i + 1),
          datasets: [
            {
              label: "Crypto Price (USD)",
              data: prices,
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
            },
            {
              label: "Price Change",
              data: priceChanges,
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.2)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoPriceChart;

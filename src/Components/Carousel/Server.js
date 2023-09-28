const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001; // Choose a port for your proxy server

// Define a route that fetches data from CoinGecko and sends it to the client
app.get("/api/trendingCoins", async (req, res) => {
  try {
    const currency = "ngn"; // You can change this currency as needed
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

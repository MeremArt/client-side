import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CoinList } from "../../config/api";
import "./Carousel.css";
import { TrendingCoins } from "../../config/api";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const currency = "ngn"; // You can change this currency as needed

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
      // You can set an error state and display a user-friendly message here
    }
  };

  useEffect(() => {
    fetchdata();
  }, [currency]);

  const coinsToDisplay = ["bnb", "sol", "eth", "doge", "dot"];

  const coinItems = trending
    .filter((coin) => coinsToDisplay.includes(coin.symbol.toLowerCase()))
    .map((coin) => {
      if (!coin || !coin.id) {
        return null; // Skip rendering invalid data
      }

      const symbol = coin.symbol;
      const profit = coin.price_change_percentage_24h >= 0;
      const priceChange = coin.price_change_percentage_24h.toFixed(2);
      const nairaSymbol = "₦"; // Nigerian Naira symbol

      return (
        <div className="choose_section dark" key={coin.id}>
          <div className="choose1">
            <div className="center">
              <img
                src={coin.image}
                alt={coin.name}
                height={60}
                width={60}
                style={{ marginBottom: 10 }}
              />
              <span>
                {coin.symbol}&nbsp;
                <span
                  style={{
                    color: profit ? "rgb(14, 203, 129)" : "red",
                    fontWeight: 500,
                  }}
                >
                  {profit && "+"}
                  {priceChange}%
                </span>
              </span>
              <span style={{ fontSize: 22, fontWeight: 500, color: "#808080" }}>
                {symbol} {nairaSymbol}
                {coin.current_price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className="currencysawp">
        <div className="second_section_header">
          <h3>Where Local Meets Digital</h3>
          <p>
            We leverage groundbreaking blockchain technology to simplify and
            accelerate the conversion of your local currency into
            cryptocurrency. Our focus on security and cost-efficiency,
            especially for smaller amounts, is unwavering. We are dedicated to
            transforming currency exchanges to provide a seamless experience for
            all your digital asset requirements.
          </p>
        </div>
      </div>
      <div className="carousel-container dark ">
        {/* You can add your JSX here to display the trending coins */}
        {coinItems}
      </div>
    </>
  );
};

export default Carousel;

import React from "react";
import { Link } from "react-router-dom";

import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";

import "./Coins.css";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p className="">Price</p>
          <p className="">24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinItem coin={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;

import React from 'react';

import './MarketData.scss';

export const MarketData = ({ cryptoData }) => {
  const name = (cryptoData && cryptoData.asset_id_base) || '-';
  const quote = (cryptoData && cryptoData.asset_id_quote) || '-';
  const symbol = `${name}/${quote}`;

  const price = (cryptoData && '$' + cryptoData.rate) || '-';
  const time = (cryptoData && new Date(cryptoData.time)) || '-';
  const data =
    cryptoData &&
    +time.getDate() +
      '/' +
      (time.getMonth() + 1) +
      '/' +
      time.getFullYear() +
      ' ' +
      time.getHours() +
      ':' +
      time.getMinutes() +
      ':' +
      time.getSeconds();
  return (
    <section className="MarketData">
      <h2 className="MarketData__title">Market data:</h2>
      <div className="MarketData__crypto-data">
        <p className="MarketData__crypto-data-type">
          <span className="MarketData__crypto-data-type-title">Symbol:</span>
          <span className="MarketData__crypto-data-type-value">{symbol}</span>
        </p>
        <p className="MarketData__crypto-data-type">
          <span className="MarketData__crypto-data-type-title">Price:</span>
          <span className="MarketData__crypto-data-type-value">{price}</span>
        </p>
        <p className="MarketData__crypto-data-type">
          <span className="MarketData__crypto-data-type-title">Time:</span>
          <span className="MarketData__crypto-data-type-value">{data}</span>
        </p>
      </div>
    </section>
  );
};

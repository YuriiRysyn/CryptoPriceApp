import React from 'react';

import './CurrencyPicker.scss';

export const CurrencyPicker = ({
  currentCryptoCurrency,
  setCurrentCryptoCurrency,
  listOfAssets,
}) => {
  const assetsNames = listOfAssets.map(asset => asset.asset_id);

  const handleChange = event => {
    setCurrentCryptoCurrency(event.target.value);
  };
// also can be added one more select to select the currency to be counted

  return (
    <section className="CurrencyPicker">
      <select onChange={handleChange} value={currentCryptoCurrency}>
        {assetsNames.map(asset => (
          <option key={asset}>{asset}</option>
        ))}
      </select>
      <span> / USD</span>
    </section>
  );
};

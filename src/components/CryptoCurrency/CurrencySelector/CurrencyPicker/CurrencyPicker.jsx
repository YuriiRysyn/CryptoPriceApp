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
  // also can be added one more select to select other currency to be counted, if we want not only compare to USD

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

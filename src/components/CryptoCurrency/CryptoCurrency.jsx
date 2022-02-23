import React, { useEffect, useState } from 'react';

import './CryptoCurrency.scss';
import { CurrencySelector } from './CurrencySelector/CurrencySelector';
import { MarketData } from './MarketData/MarketData';
import { ChartingData } from './ChartingData/ChartingData';

import { getListOfAssets } from '../../api/getListOfAssets';

export const CryptoCurrency = () => {
  const [currentCryptoCurrency, setCurrentCryptoCurrency] = useState('BTC');
  const [listOfAssets, setListOfAssets] = useState([]);

  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getListOfAssets();

      setListOfAssets(data);
    })();
  }, []);

  return (
    <section className="CryptoCurrency">
      <CurrencySelector
        listOfAssets={listOfAssets}
        cryptoData={cryptoData}
        setCryptoData={setCryptoData}
        currentCryptoCurrency={currentCryptoCurrency}
        setCurrentCryptoCurrency={setCurrentCryptoCurrency}
      />

      <MarketData cryptoData={cryptoData} />
      <ChartingData currentCryptoCurrency={currentCryptoCurrency} />
    </section>
  );
};

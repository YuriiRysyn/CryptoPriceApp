import React, { useEffect, useState } from 'react';

import './CryptoCurrency.scss';
import { CurrencySelector } from './CurrencySelector/CurrencySelector';
import { MarketData } from './MarketData/MarketData';
import { ChartingData } from './ChartingData/ChartingData';

import { getListOfAssets } from '../../api/getListOfAssets';

export const CryptoCurrency = () => {
  const [currentCryptoCurrency, setCurrentCryptoCurrency] = useState('BTC');
  const [listOfAssets, setListOfAssets] = useState();

  const [cryptoData, setCryptoData] = useState();

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    (async () => {
      setIsPending(true);
      const data = await getListOfAssets();
      setIsPending(false);
      setListOfAssets(data);
    })();
  }, []);

  return (
    <section className="CryptoCurrency">
      <CurrencySelector
        listOfAssets={listOfAssets}
        setCryptoData={setCryptoData}
        currentCryptoCurrency={currentCryptoCurrency}
        setCurrentCryptoCurrency={setCurrentCryptoCurrency}
        isPending={isPending}
      />
      {isPending ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <MarketData cryptoData={cryptoData} />
          <ChartingData currentCryptoCurrency={currentCryptoCurrency} />
        </>
      )}
    </section>
  );
};

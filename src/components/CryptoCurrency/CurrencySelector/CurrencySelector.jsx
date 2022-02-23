import React, { useRef } from 'react';
import { useState } from 'react';
import {
  subscribeForCurrencyData,
  unSubscribeForCurrencyData,
} from '../../../api/getCurrencyData';

import './CurrencySelector.scss';
import { CurrencyPicker } from './CurrencyPicker/CurrencyPicker';
import { DefaultCurrency } from './DefaultCurrency/DefaultCurrency';

export const CurrencySelector = ({
  listOfAssets,
  cryptoData,
  setCryptoData,
  currentCryptoCurrency,
  setCurrentCryptoCurrency,
}) => {
  const socket = useRef(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubscribe = () => {
    if (!isSubscribed) {
      const url = 'ws://ws-sandbox.coinapi.io/v1/';
      socket.current = new WebSocket(url);

      subscribeForCurrencyData(
        socket.current,
        setCryptoData,
        setIsSubscribed,
        currentCryptoCurrency
      );
    } else {
      unSubscribeForCurrencyData(socket.current, setIsSubscribed);
    }
  };

  return (
    <section className="CurrencySelector">
      {listOfAssets && !isSubscribed ? (
        <CurrencyPicker
          currentCryptoCurrency={currentCryptoCurrency}
          setCurrentCryptoCurrency={setCurrentCryptoCurrency}
          listOfAssets={listOfAssets}
        />
      ) : (
        <DefaultCurrency currentCryptoCurrency={currentCryptoCurrency} />
      )}

      <button className="CurrencySelector__subscribe-btn" onClick={onSubscribe}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </section>
  );
};

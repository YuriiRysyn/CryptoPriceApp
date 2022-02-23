import React from 'react';

import './App.scss';

import { CryptoCurrency } from './CryptoCurrency/CryptoCurrency';

export const App = () => {

  return (
    <section className="app">
      <CryptoCurrency />
    </section>
  );
};

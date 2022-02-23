import React from 'react';

// import './DefaultCurrency.scss';

export const DefaultCurrency = ({
  currentCryptoCurrency,
  setCurrentCryptoCurrency,
}) => {
  return (
    <section className="DefaultCurrency">
      <span>{currentCryptoCurrency} / USD</span>
    </section>
  );
};

import React from 'react';

// import './DefaultCurrency.scss';

export const DefaultCurrency = ({ currentCryptoCurrency }) => {
  return (
    <section className="DefaultCurrency">
      <span>{currentCryptoCurrency} / USD</span>
    </section>
  );
};

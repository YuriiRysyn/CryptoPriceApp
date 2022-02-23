import React from 'react';

export const DefaultCurrency = ({ currentCryptoCurrency }) => {
  return (
    <section className="DefaultCurrency">
      <span>{currentCryptoCurrency} / USD</span>
    </section>
  );
};

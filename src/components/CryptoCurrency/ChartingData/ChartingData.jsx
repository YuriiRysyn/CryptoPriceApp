import React, { useEffect, useState } from 'react';
import { getHistoryData } from '../../../api/getHistoryData';

import './ChartingData.scss';
import { HistoryGraph } from './HistoryGraph/HistoryGraph';

export const ChartingData = ({
  currentCryptoCurrency,
  setIsPendingForHistoryData,
}) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      if (currentCryptoCurrency) {
        setIsPendingForHistoryData(true);
        const data = await getHistoryData(currentCryptoCurrency);
        setIsPendingForHistoryData(false);

        setData(data);
      }
    })();
  }, [currentCryptoCurrency]);

  return (
    <section className="ChartingData">
      <h2 className="ChartingData__title">Charting data:</h2>
      {currentCryptoCurrency && data && data.length && (
        <HistoryGraph data={data} />
      )}
    </section>
  );
};

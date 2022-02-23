import React, { useEffect, useState } from 'react';
import { getHistoryData } from '../../../api/getHistoryData';

import './ChartingData.scss';
import { HistoryGraph } from './HistoryGraph/HistoryGraph';

export const ChartingData = ({ currentCryptoCurrency }) => {
  const [data, setData] = useState([
    [
      {
        time_period_start: '2022-02-01T00:00:00.0000000Z',
        time_period_end: '2022-02-02T00:00:00.0000000Z',
        time_open: '2022-02-01T00:00:00.0000000Z',
        time_close: '2022-02-01T23:59:00.0000000Z',
        rate_open: 38525.64585874746,
        rate_high: 39266.97661516118,
        rate_low: 38056.46185492907,
        rate_close: 38722.49333673388,
      },
      {
        time_period_start: '2022-02-02T00:00:00.0000000Z',
        time_period_end: '2022-02-03T00:00:00.0000000Z',
        time_open: '2022-02-02T00:00:00.0000000Z',
        time_close: '2022-02-02T23:59:00.0000000Z',
        rate_open: 38723.170851436706,
        rate_high: 38874.4879612218,
        rate_low: 36681.930653194424,
        rate_close: 36940.429608869585,
      },
      {
        time_period_start: '2022-02-03T00:00:00.0000000Z',
        time_period_end: '2022-02-04T00:00:00.0000000Z',
        time_open: '2022-02-03T00:00:00.0000000Z',
        time_close: '2022-02-03T23:59:00.0000000Z',
        rate_open: 36940.424615755874,
        rate_high: 37122.25346573742,
        rate_low: 36286.93683086868,
        rate_close: 37095.84587766856,
      },
      {
        time_period_start: '2022-02-04T00:00:00.0000000Z',
        time_period_end: '2022-02-05T00:00:00.0000000Z',
        time_open: '2022-02-04T00:00:00.0000000Z',
        time_close: '2022-02-04T23:59:00.0000000Z',
        rate_open: 37356.01284321557,
        rate_high: 41709.392835912426,
        rate_low: 37058.20354968254,
        rate_close: 41593.11669091544,
      },
      {
        time_period_start: '2022-02-05T00:00:00.0000000Z',
        time_period_end: '2022-02-06T00:00:00.0000000Z',
        time_open: '2022-02-05T00:00:00.0000000Z',
        time_close: '2022-02-05T23:59:00.0000000Z',
        rate_open: 41587.22096139546,
        rate_high: 41926.63188267236,
        rate_low: 40995.52614983227,
        rate_close: 41453.2525810384,
      },
      {
        time_period_start: '2022-02-06T00:00:00.0000000Z',
        time_period_end: '2022-02-07T00:00:00.0000000Z',
        time_open: '2022-02-06T00:00:00.0000000Z',
        time_close: '2022-02-06T23:59:00.0000000Z',
        rate_open: 41412.975745158714,
        rate_high: 42585.08918752576,
        rate_low: 41187.252025504065,
        rate_close: 42584.68039684817,
      },
      {
        time_period_start: '2022-02-07T00:00:00.0000000Z',
        time_period_end: '2022-02-08T00:00:00.0000000Z',
        time_open: '2022-02-07T00:00:00.0000000Z',
        time_close: '2022-02-07T23:59:00.0000000Z',
        rate_open: 42583.832485685736,
        rate_high: 44466.28015594735,
        rate_low: 41703.02497419603,
        rate_close: 43801.7577466853,
      },
      {
        time_period_start: '2022-02-08T00:00:00.0000000Z',
        time_period_end: '2022-02-09T00:00:00.0000000Z',
        time_open: '2022-02-08T00:00:00.0000000Z',
        time_close: '2022-02-08T23:59:00.0000000Z',
        rate_open: 43854.04889077,
        rate_high: 45376.46227189305,
        rate_low: 42787.72680121928,
        rate_close: 44132.37769618248,
      },
      {
        time_period_start: '2022-02-09T00:00:00.0000000Z',
        time_period_end: '2022-02-10T00:00:00.0000000Z',
        time_open: '2022-02-09T00:00:00.0000000Z',
        time_close: '2022-02-09T23:59:00.0000000Z',
        rate_open: 44066.98078546669,
        rate_high: 44830.547701448675,
        rate_low: 43203.700370099235,
        rate_close: 44412.319945951975,
      },
      {
        time_period_start: '2022-02-10T00:00:00.0000000Z',
        time_period_end: '2022-02-11T00:00:00.0000000Z',
        time_open: '2022-02-10T00:00:00.0000000Z',
        time_close: '2022-02-10T23:59:00.0000000Z',
        rate_open: 44421.83705429957,
        rate_high: 45816.66722989814,
        rate_low: 43539.740220735526,
        rate_close: 43549.46546833886,
      },
      {
        time_period_start: '2022-02-11T00:00:00.0000000Z',
        time_period_end: '2022-02-12T00:00:00.0000000Z',
        time_open: '2022-02-11T00:00:00.0000000Z',
        time_close: '2022-02-11T23:59:00.0000000Z',
        rate_open: 43549.46531685079,
        rate_high: 43925.62319641167,
        rate_low: 42033.04799659078,
        rate_close: 42405.50471817498,
      },
      {
        time_period_start: '2022-02-12T00:00:00.0000000Z',
        time_period_end: '2022-02-13T00:00:00.0000000Z',
        time_open: '2022-02-12T00:00:00.0000000Z',
        time_close: '2022-02-12T23:59:00.0000000Z',
        rate_open: 42408.792004732844,
        rate_high: 43020.91171985706,
        rate_low: 41776.91468890196,
        rate_close: 42229.0870636433,
      },
      {
        time_period_start: '2022-02-13T00:00:00.0000000Z',
        time_period_end: '2022-02-14T00:00:00.0000000Z',
        time_open: '2022-02-13T00:00:00.0000000Z',
        time_close: '2022-02-13T23:59:00.0000000Z',
        rate_open: 42229.08751754719,
        rate_high: 42738.367562964966,
        rate_low: 41888.21902728939,
        rate_close: 42185.141946212985,
      },
      {
        time_period_start: '2022-02-14T00:00:00.0000000Z',
        time_period_end: '2022-02-15T00:00:00.0000000Z',
        time_open: '2022-02-14T00:00:00.0000000Z',
        time_close: '2022-02-14T23:59:00.0000000Z',
        rate_open: 42066.00741195951,
        rate_high: 42846.95339454796,
        rate_low: 41572.69961748903,
        rate_close: 42580.79385443845,
      },
      {
        time_period_start: '2022-02-15T00:00:00.0000000Z',
        time_period_end: '2022-02-16T00:00:00.0000000Z',
        time_open: '2022-02-15T00:00:00.0000000Z',
        time_close: '2022-02-15T23:59:00.0000000Z',
        rate_open: 42580.79364893722,
        rate_high: 44742.86623703288,
        rate_low: 42488.6931020414,
        rate_close: 44675.139062692884,
      },
      {
        time_period_start: '2022-02-16T00:00:00.0000000Z',
        time_period_end: '2022-02-17T00:00:00.0000000Z',
        time_open: '2022-02-16T00:00:00.0000000Z',
        time_close: '2022-02-16T23:59:00.0000000Z',
        rate_open: 44675.141842712175,
        rate_high: 44712.28244721898,
        rate_low: 43367.863363457116,
        rate_close: 43953.92763139889,
      },
      {
        time_period_start: '2022-02-17T00:00:00.0000000Z',
        time_period_end: '2022-02-18T00:00:00.0000000Z',
        time_open: '2022-02-17T00:00:00.0000000Z',
        time_close: '2022-02-17T23:59:00.0000000Z',
        rate_open: 43924.385454021685,
        rate_high: 44163.28065691572,
        rate_low: 40344.776920835466,
        rate_close: 40490.28947553186,
      },
      {
        time_period_start: '2022-02-18T00:00:00.0000000Z',
        time_period_end: '2022-02-19T00:00:00.0000000Z',
        time_open: '2022-02-18T00:00:00.0000000Z',
        time_close: '2022-02-18T23:59:00.0000000Z',
        rate_open: 40553.10112621887,
        rate_high: 40972.12746115715,
        rate_low: 39467.561577714645,
        rate_close: 40018.46556308178,
      },
      {
        time_period_start: '2022-02-19T00:00:00.0000000Z',
        time_period_end: '2022-02-20T00:00:00.0000000Z',
        time_open: '2022-02-19T00:00:00.0000000Z',
        time_close: '2022-02-19T23:59:00.0000000Z',
        rate_open: 40014.4927862659,
        rate_high: 40449.96853374425,
        rate_low: 39678.49899817835,
        rate_close: 40115.29884493703,
      },
      {
        time_period_start: '2022-02-20T00:00:00.0000000Z',
        time_period_end: '2022-02-21T00:00:00.0000000Z',
        time_open: '2022-02-20T00:00:00.0000000Z',
        time_close: '2022-02-20T23:59:00.0000000Z',
        rate_open: 40113.93994969958,
        rate_high: 40132.49414478523,
        rate_low: 38042.479584581866,
        rate_close: 38614.64946379128,
      },
      {
        time_period_start: '2022-02-21T00:00:00.0000000Z',
        time_period_end: '2022-02-22T00:00:00.0000000Z',
        time_open: '2022-02-21T00:00:00.0000000Z',
        time_close: '2022-02-21T23:59:00.0000000Z',
        rate_open: 38617.19153998362,
        rate_high: 39480.842600610675,
        rate_low: 36921.059035999286,
        rate_close: 37108.91407557099,
      },
      {
        time_period_start: '2022-02-22T00:00:00.0000000Z',
        time_period_end: '2022-02-23T00:00:00.0000000Z',
        time_open: '2022-02-22T00:00:00.0000000Z',
        time_close: '2022-02-22T23:59:00.0000000Z',
        rate_open: 37054.7046859276,
        rate_high: 38439.35626388259,
        rate_low: 36385.32660424299,
        rate_close: 38253.87163226184,
      },
      {
        time_period_start: '2022-02-23T00:00:00.0000000Z',
        time_period_end: '2022-02-24T00:00:00.0000000Z',
        time_open: '2022-02-23T00:00:00.0000000Z',
        time_close: '2022-02-23T14:56:00.0000000Z',
        rate_open: 38254.43300944346,
        rate_high: 39218.68197238966,
        rate_low: 37622.914653796855,
        rate_close: 38836.4033998253,
      },
    ],
  ]);

  // useEffect(() => {
  //   (async () => {
  //     if (currentCryptoCurrency) {
  //       const data = await getHistoryData(currentCryptoCurrency);
  //       console.log(data);
  //       setData(data);
  //     }
  //   })();
  // }, [currentCryptoCurrency]);

  return (
    <section className="ChartingData">
      <h2 className="ChartingData__title">Charting data:</h2>

      <HistoryGraph data={data} />
    </section>
  );
};

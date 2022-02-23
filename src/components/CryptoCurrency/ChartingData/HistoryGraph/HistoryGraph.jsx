import React from 'react';
import ReactApexChart from 'react-apexcharts';

import './HistoryGraph.scss';

export const HistoryGraph = ({ data = [] }) => {
  let temp = [
    {
      time_period_start: '2021-03-02T00:00:00.0000000Z',
      time_period_end: '2021-03-02T00:01:00.0000000Z',
      time_open: '2021-03-02T00:00:00.0000000Z',
      time_close: '2021-03-02T00:01:00.0000000Z',
      rate_open: 49642.89075974334,
      rate_high: 49642.89075974334,
      rate_low: 49642.89075974334,
      rate_close: 49642.89075974334,
    },
    {
      time_period_start: '2021-03-02T00:01:00.0000000Z',
      time_period_end: '2021-03-02T00:02:00.0000000Z',
      time_open: '2021-03-02T00:01:00.0000000Z',
      time_close: '2021-03-02T00:02:00.0000000Z',
      rate_open: 49649.71537706716,
      rate_high: 49649.71537706716,
      rate_low: 49649.71537706716,
      rate_close: 49649.71537706716,
    },
    {
      time_period_start: '2021-03-02T23:59:00.0000000Z',
      time_period_end: '2021-03-03T00:00:00.0000000Z',
      time_open: '2021-03-02T23:59:00.0000000Z',
      time_close: '2021-03-03T00:00:00.0000000Z',
      rate_open: 48348.04226728628,
      rate_high: 48348.04226728628,
      rate_low: 48348.04226728628,
      rate_close: 48348.04226728628,
    },
  ];
  const dates = temp.map(oneDayData => oneDayData.time_period_end);
  const prices = temp.map(oneDayData => oneDayData.rate_close);

  const options = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'price',
        data: prices,
      },
    ],
    xaxis: {
      name: 'dates',

      dates: dates,
    },
  
    dataLabels: {
      enabled: true,
    },
  };

  return (
    <div className="HistoryGraph">
      {data && (
        <ReactApexChart
          options={options}
          series={options.series}
          type="area"
          height={400}
          width={600}
        />
      )}
    </div>
  );
};

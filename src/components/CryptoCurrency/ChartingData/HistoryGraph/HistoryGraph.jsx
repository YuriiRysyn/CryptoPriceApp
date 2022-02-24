import React from 'react';
import ReactApexChart from 'react-apexcharts';

import './HistoryGraph.scss';

export const HistoryGraph = ({ data }) => {
  const prices = data && data.map(oneDayData => oneDayData.rate_close);
  const dates = data &&  data.map(oneDayData => {
    const date = new Date(oneDayData.time_close).getDate();

    return date;
  });

  const config = {
    series: [
      {
        name: 'Price',
        data: prices,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Currency history prices per day for current month',
        align: 'left',
      },
      xaxis: {
        name: 'Day of month',
        categories: dates,
        labels: {
          formatter: day => (day ? day + ' Feb' : ''),
        },
      },

      yaxis: {
        labels: {
          formatter: value => value + '$',
        },
      },
    },
  };

  return (
    <div className="HistoryGraph">
      <ReactApexChart
        options={config.options}
        series={config.series}
        width={600}
      />
    </div>
  );
};

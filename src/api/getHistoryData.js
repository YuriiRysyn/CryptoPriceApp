import { APIKey } from './apiKey';

export const getHistoryData = async currencyName => {
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${currencyName}/USD/history?period_id=1DAY&time_start=2022-02-01&time_end=2022-02-28`;
  // Set time range for current month with period per day, can be changed if needed

  try {
    const res = await fetch(url, {
      headers: {
        'X-CoinAPI-Key': APIKey,
      },
    });
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

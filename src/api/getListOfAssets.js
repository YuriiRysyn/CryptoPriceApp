import { APIKey } from './apiKey';

export const getListOfAssets = async () => {
  const url = 'https://rest.coinapi.io/v1/assets/';

  try {
    const res = await fetch(url, {
      headers: {
        'X-CoinAPI-Key': APIKey,
      },
    });

    const list = await res.json();

    const filteredList = list
      .filter(asset => asset.type_is_crypto === 1)
      .slice(0, 29);
    // get only crypto and limit assets list to 30, for example we don't need all assets

    return filteredList;
  } catch (e) {
    console.log(e);

    return null;
  }
};

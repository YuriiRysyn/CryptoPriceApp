import { APIKey } from './apiKey';

export const subscribeForCurrencyData = (
  socket,
  setCryptoData,
  setIsSubscribed,
  currentCryptoCurrency
) => {
  const params = {
    type: 'hello',
    apikey: APIKey,
    heartbeat: false,
    subscribe_data_type: ['exrate'],
    subscribe_filter_asset_id: [`${currentCryptoCurrency}/USD`],
  };

  socket.onopen = function (e) {
    console.log('[open] Connection established');
    console.log('Sending to server');
    socket.send(JSON.stringify(params));
    setIsSubscribed(true);
  };

  socket.onmessage = function (event) {
    console.log('Data received from server');
    const data = JSON.parse(event.data);

    setCryptoData(data);
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      );
    } else {
      console.log('[close] Connection died');
    }
  };

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
  };
};

export const unSubscribeForCurrencyData = (socket, setIsSubscribed) => {
  socket.close();
  setIsSubscribed(false);
};

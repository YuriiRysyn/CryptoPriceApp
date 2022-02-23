(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=(a(12),a(1)),u=a.n(o),i=a(3),l=a(2),p=(a(14),"EEFC7A6D-D612-4983-BAAF-A30016847ECC"),m=(a(15),a(16),function(e){var t=e.currentCryptoCurrency,a=e.setCurrentCryptoCurrency,n=e.listOfAssets.map((function(e){return e.asset_id}));return r.a.createElement("section",{className:"CurrencyPicker"},r.a.createElement("select",{onChange:function(e){a(e.target.value)},value:t},n.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("span",null," / USD"))}),y=function(e){var t=e.currentCryptoCurrency;return r.a.createElement("section",{className:"DefaultCurrency"},r.a.createElement("span",null,t," / USD"))},f=function(e){var t=e.listOfAssets,a=e.setCryptoData,c=e.currentCryptoCurrency,s=e.setCurrentCryptoCurrency,o=e.isPending,u=e.isPendingForHistoryData,i=Object(n.useRef)(null),f=Object(n.useState)(!1),d=Object(l.a)(f,2),b=d[0],C=d[1];return r.a.createElement("section",{className:"CurrencySelector"},t&&t.length&&!b?r.a.createElement(m,{currentCryptoCurrency:c,setCurrentCryptoCurrency:s,listOfAssets:t}):r.a.createElement(y,{currentCryptoCurrency:c}),r.a.createElement("button",{className:"CurrencySelector__subscribe-btn",onClick:function(){if(b)!function(e,t){e.close(),t(!1)}(i.current,C);else{i.current=new WebSocket("wss://ws-sandbox.coinapi.io/v1/"),function(e,t,a,n){var r={type:"hello",apikey:p,heartbeat:!1,subscribe_data_type:["exrate"],subscribe_filter_asset_id:["".concat(n,"/USD")]};e.onopen=function(t){console.log("[open] Connection established"),console.log("Sending to server"),e.send(JSON.stringify(r)),a(!0)},e.onmessage=function(e){console.log("Data received from server");var a=JSON.parse(e.data);t(a)},e.onclose=function(e){e.wasClean?console.log("[close] Connection closed cleanly, code=".concat(e.code," reason=").concat(e.reason)):console.log("[close] Connection died")},e.onerror=function(e){console.log("[error] ".concat(e.message))}}(i.current,a,C,c)}},disabled:o||u},b?"Unsubscribe":"Subscribe"))},d=(a(17),function(e){var t=e.cryptoData,a=t?t.asset_id_base:"-",n=t?t.asset_id_quote:"-",c="".concat(a,"/").concat(n),s=t?"$"+t.rate:"-",o=t?new Date(t.time):"-",u=t?+o.getDate()+"/"+(o.getMonth()+1)+"/"+o.getFullYear()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds():"-";return r.a.createElement("section",{className:"MarketData"},r.a.createElement("h2",{className:"MarketData__title"},"Market data:"),r.a.createElement("div",{className:"MarketData__crypto-data"},r.a.createElement("p",{className:"MarketData__crypto-data-type"},r.a.createElement("span",{className:"MarketData__crypto-data-type-title"},"Symbol:"),r.a.createElement("span",{className:"MarketData__crypto-data-type-value"},c)),r.a.createElement("p",{className:"MarketData__crypto-data-type"},r.a.createElement("span",{className:"MarketData__crypto-data-type-title"},"Price:"),r.a.createElement("span",{className:"MarketData__crypto-data-type-value"},s)),r.a.createElement("p",{className:"MarketData__crypto-data-type"},r.a.createElement("span",{className:"MarketData__crypto-data-type-title"},"Time:"),r.a.createElement("span",{className:"MarketData__crypto-data-type-value"},u))))}),b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://rest-sandbox.coinapi.io/v1/exchangerate/".concat(t,"/USD/history?period_id=1DAY&time_start=2022-02-01&time_end=2022-02-28"),e.prev=1,e.next=4,fetch(a,{headers:{"X-CoinAPI-Key":p}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),C=(a(18),a(6)),_=a.n(C),g=(a(23),function(e){var t=e.data;console.log(t);var a={series:[{name:"Price",data:t&&t.map((function(e){return e.rate_close}))}],options:{chart:{height:350,type:"area",zoom:{enabled:!0}},dataLabels:{enabled:!0},stroke:{curve:"straight"},title:{text:"Currency history prices per day for current month",align:"left"},xaxis:{name:"Day of month",categories:t&&t.map((function(e){return new Date(e.time_close).getDate()})),labels:{formatter:function(e){return e?e+" Feb":""}}},yaxis:{labels:{formatter:function(e){return e+"$"}}}}};return r.a.createElement("div",{className:"HistoryGraph"},r.a.createElement(_.a,{options:a.options,series:a.series,width:600}))}),h=function(e){var t=e.currentCryptoCurrency,a=e.setIsPendingForHistoryData,c=Object(n.useState)(),s=Object(l.a)(c,2),o=s[0],p=s[1];return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return a(!0),e.next=4,b(t);case 4:n=e.sent,a(!1),p(n);case 7:case"end":return e.stop()}}),e)})))()}),[t]),r.a.createElement("section",{className:"ChartingData"},r.a.createElement("h2",{className:"ChartingData__title"},"Charting data:"),t&&o&&o.length&&r.a.createElement(g,{data:o}))},E=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rest.coinapi.io/v1/assets/",e.prev=1,e.next=4,fetch("https://rest.coinapi.io/v1/assets/",{headers:{"X-CoinAPI-Key":p}});case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,console.log(a),n=a.filter((function(e){return 1===e.type_is_crypto})).slice(0,29),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(n.useState)("BTC"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),o=Object(l.a)(s,2),p=o[0],m=o[1],y=Object(n.useState)(),b=Object(l.a)(y,2),C=b[0],_=b[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),D=v[0],O=v[1],k=Object(n.useState)(!1),j=Object(l.a)(k,2),N=j[0],x=j[1];return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,E();case 3:t=e.sent,O(!1),m(t);case 6:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("section",{className:"CryptoCurrency"},r.a.createElement(f,{listOfAssets:p,setCryptoData:_,currentCryptoCurrency:a,setCurrentCryptoCurrency:c,isPending:D,isPendingForHistoryData:N}),D?r.a.createElement("h2",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{cryptoData:C}),r.a.createElement(h,{currentCryptoCurrency:a,setIsPendingForHistoryData:x})))},D=function(){return r.a.createElement("section",{className:"app"},r.a.createElement(v,null))};s.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a594a4e8.chunk.js.map
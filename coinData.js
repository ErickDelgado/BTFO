const request = require('request');

const re = /(se).*?(,")/g;
let store = {};
request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.BTC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
let parse = JSON.parse(response.body);
console.log(parse.Data)
let data = [];
for(i=0; i<parse.Data.length; i++) {
  data.push(parse.Data[i].close)
};
  store.ETH = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=MANA&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.MANA = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.XMR = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=POLY&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.POLY = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=NULS&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.NULS = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.NEO = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.BCH = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=BNB&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.BNB = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=WAVES&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.WAVES = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.XRP = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XLM&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.XLM = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.DASH = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ZEC&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.ZEC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ETC&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.ETC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=550&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  console.log(parse.Data)
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.LTC = data;
});

module.exports = store;

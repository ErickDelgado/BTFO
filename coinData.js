const request = require('request');
const fs = require('fs');

let store = {};
request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=787; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.BTC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
let parse = JSON.parse(response.body);
let data = [];
for(i=171; i<parse.Data.length; i++) {
  data.push(parse.Data[i].close);
};
  store.ETH = data;
  console.log(store.ETH)
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=MANA&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.MANA = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.XMR = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=POLY&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.POLY = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=NULS&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.NULS = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=174; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.NEO = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.BCH = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=BNB&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.BNB = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=WAVES&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.WAVES = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.XRP = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=XLM&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.XLM = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close)
  };
  store.DASH = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ZEC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.ZEC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=ETC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.ETC = data;
});

request('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let data = [];
  for(i=367; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.LTC = data;
  const file = JSON.stringify(store);
  fs.writeFile("output.json", file, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("JSON file has been saved.");
  });
});
setTimeout(() => {

}, 10000);

module.exports = store;

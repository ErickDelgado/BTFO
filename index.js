(async () => {
  const request = require('request');
  let re = /(se).*?(,")/g;
  let store = {};
  request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
    let parse = response.body.match(re);
    for(i=0; i<parse.length; i++) {
     parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
    };
    store.BTC = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.ETH = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=MANA&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.MANA = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.XMR = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=POLY&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.POLY = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=NULS&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.NULS = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.NEO = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.BCH = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=BNB&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.BNB = parse;
  });

  request('https://min-api.cryptocompare.com/data/histoday?fsym=WAVES&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/[^0-9.]/g,''));
  };
  store.WAVES = parse;
  console.log(store.WAVES)
  });
})();

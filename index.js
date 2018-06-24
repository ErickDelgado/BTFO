(async () => {
  const request = require('request');
  let re = /(se).*?(,")/g;
  let store = {};
   request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
    let parse = response.body.match(re);
    for(i=0; i<parse.length; i++) {
     parse[i] = parseInt(parse[i].replace(/\D/g,''))
    };
    store.BTC = parse;
});
   request('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
   let parse = response.body.match(re);
   for(i=0; i<parse.length; i++) {
    parse[i] = parseInt(parse[i].replace(/\D/g,''))
   };
   store.ETH = parse;
  });
  request('https://min-api.cryptocompare.com/data/histoday?fsym=MANA&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = response.body.match(re);
  for(i=0; i<parse.length; i++) {
   parse[i] = parseInt(parse[i].replace(/\D/g,''))
  };
  store.ETH = parse;
 });
})();

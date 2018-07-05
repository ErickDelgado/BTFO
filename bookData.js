const request = require('request');
let book = {
  BTC: {
    buy: {},
    sell: {}
  }
}
request('https://www.bitmex.com/api/v1/orderBook/L2?symbol=XBT&depth=0', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let sell = {
    size:[],
    price:[]
  };
  let buy = {
    size: [],
    price: [],
  };
  for(i=0; i<parse.length; i++) {
    if(parse[i].side == "Sell" ) {
      sell.size.push(parse[i].size);
      sell.price.push(parse[i].price);
    } else {
      buy.size.push(parse[i].size);
      buy.price.push(parse[i].price);
    }
  }
book.BTC.sell = sell;
book.BTC.buy = buy;
console.log(book.BTC.sell);

});

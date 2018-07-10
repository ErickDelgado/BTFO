const request = require('request');
const fs = require('fs');
const writeFile = (fileName, file) => {
  return fs.writeFile(fileName, file, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("JSON file has been saved.");
  });
}

request('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
  let parse = JSON.parse(response.body);
  let store = {};
  let data = [];
  for(i=0; i<parse.Data.length; i++) {
    data.push(parse.Data[i].close);
  };
  store.BTC = data;
  const file = JSON.stringify(store);
  writeFile('BTC.json', file);
});

// request('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.LTC = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("LTC.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=MANA&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.MANA = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("MANA.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=XMR&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.XMR = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("XMR.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });

// request('https://min-api.cryptocompare.com/data/histoday?fsym=POLY&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.POLY = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("POLY.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=NULS&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.NULS = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("NULS.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=NEO&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.NEO = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("NEO.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=BCH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.BCH = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("BCH.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
// //
// request('https://min-api.cryptocompare.com/data/histoday?fsym=BNB&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.BNB = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("BNB.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=WAVES&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.WAVES = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("WAVES.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.XRP = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("XRP.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });

// request('https://min-api.cryptocompare.com/data/histoday?fsym=XLM&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.XLM = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("XLM.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });

// request('https://min-api.cryptocompare.com/data/histoday?fsym=DASH&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.DASH = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("DASH.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=ZEC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.ZEC = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("ZEC.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=ETC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.ETC = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("ETC.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });
//
// request('https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&allData=true&aggregate=3&e=CCCAGG', function (error, response, body) {
//   let parse = JSON.parse(response.body);
//   let store = {};
//   let data = [];
//   for(i=0; i<parse.Data.length; i++) {
//     data.push(parse.Data[i].close);
//   };
//   store.LTC = data;
//   const file = JSON.stringify(store);
//   fs.writeFile("LTC.json", file, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log("JSON file has been saved.");
//   });
// });

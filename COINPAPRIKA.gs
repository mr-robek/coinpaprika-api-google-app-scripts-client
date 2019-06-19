var HEADERS = {
  'Accept': 'application/json',
  'Accept-Charset': 'utf-8',
  'Accept-Encoding': 'deflate, gzip'
};

var URL = 'https://api.coinpaprika.com/v1';
var GLOBAL= URL+'/global';
var TICKER= URL+'/ticker';

function getTicker(coinId, property) {
  
  function fetchJSON(url) {
    return JSON.parse(UrlFetchApp.fetch(url, {headers: HEADERS}).getContentText());
  }
  
  function fetchTicker(coinId) {
    if (!(coinId && coinId.length))
      throw "NO COIN_ID";
    return fetchJSON(TICKER+"/"+coinId);
  }
  
  var ticker = fetchTicker(coinId);
  
  if (!ticker[property])
    throw "NO " + property;
  
  if (isNaN(ticker[property]))
    return ticker[property];
  
  return parseFloat(ticker[property]);
}

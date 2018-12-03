document.addEventListener("DOMContentLoaded", function(event) {

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function runGet() {
    var strResponse = httpGet('https://api.coinbase.com/v2/prices/BTC-USD/buy');
    var requestJson = JSON.parse(strResponse);
    var data = requestJson['data']

    console.log(data)

    var price = data['amount']
    var coin = data['base']
    var currency= data['currency']
    // var information = (price + " " + currency + " For " + coin);
    return [price, coin, currency]
}

function main() {
    doc = document;
    var info = runGet();

    var priceEle = $('#price')
    priceEle.html(info[0] + " " + info[2])

    var coinEle = $('#coin')
    coinEle.html(info[1])
}

main();
});
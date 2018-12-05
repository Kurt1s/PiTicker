document.addEventListener("DOMContentLoaded", function (event) {

    main();


    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    function fetch(coin) {
        var strResponse = httpGet('https://api.coinbase.com/v2/prices/' + coin + '-USD/buy');
        var requestJson = JSON.parse(strResponse);
        var data = requestJson['data']
        var price = data['amount']
        var coin = data['base']
        var currency = data['currency']
        return [price, coin, currency];
    }

    function addListeners() {
        var bar = $('#bar');
        var buttons = bar.children();
        // console.log(buttons)
        for (var i = 0; i < 3; i++) {
            var button = buttons.eq(i);
            console.log(button)
            var coin = button.text();
            button.click(function(){
                console.log(coin, "COIN")
                var info = fetch(coin);
                update(info[0], info[1], info[2])
            });
        }
    }

    function update(price, coin, currency) {
        //update text
        console.log("updating " + coin + " at " + price)
        var priceEle = $('#price')
        priceEle.html(price + " " + currency)

        var coinEle = $('#coin')
        coinEle.html(coin)
    }


    function main() {
        addListeners();
        var info = fetch('btc');
        update(info[0], info[1], info[2]);
    }


});
// function main() {
//     var bar = $('#bar');
//     var buttons = bar.children();
//     // console.log(buttons)
//     for(var i = 0; i < 3; i++){
//         var button = buttons.eq(i);
//         var coin = button.text();
//         button.click(function(coin){
//             update(coin)}
//             );
//     }
//     setInterval(function(){update(coin)}, 1000 * 1.5)
// }
// main();

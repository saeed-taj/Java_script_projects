
const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

var setting = {
    "async" : true,
    "crossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    "method" : "GET",
    "headers" : {}
}

$.ajax(setting).done(function(response) {
  console.log(response); 
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

// $.ajax(setting) → this sends the request using the setting object.

// .done(function(response) {...}) → this runs when the API responds successfully.

// response contains the JSON data from the API.


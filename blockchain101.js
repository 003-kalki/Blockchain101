
const passageElements = document.querySelectorAll(".button");

passageElements.forEach((passage) => {
  passage.addEventListener("mouseenter", function (event) {
    passage.style.color = "white";
  });

  passage.addEventListener("mouseleave", function (event) {
    passage.style.color = "#E48D0A";
  });
});

const button = document.getElementById("button1");
button.addEventListener("click", function () {
  
  const referenceMaterialURL = "reference.html";

  // Open a new window or tab with the reference.html file
  window.open(referenceMaterialURL, "_blank");
});

const button2 = document.getElementById("button2"); 
button2.addEventListener("click", function () {symbolsymbol
 
  const referenceMaterialURL = "basic.html";

 
                                               
  window.open(referenceMaterialURL, "_blank");
});

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

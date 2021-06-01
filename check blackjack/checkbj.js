let arrSelectedCards = []

let btnDraw = document.getElementById('btnDraw')
let btnSent = document.getElementById('btnSent')
let eleCards = document.getElementById('cards')
let eleTotal = document.getElementById('total')

function displayCards(){
    let str = ''
    for (var i = 0 ;i < arrSelectedCards.length; i ++){
        str += arrSelectedCards[i] + ','
    }
    console.log(str)
    eleCards.innerHTML = str

}

let cards = ["A", '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K"];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnDraw.addEventListener('click', () => {
    let index = getRandomNumber(0, cards.length - 1);
    console.log(index, cards[index])
    arrSelectedCards.push( cards[index]);
    console.log(arrSelectedCards)
    displayCards()

});
/*
let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let sec = document.getElementById('sec')
let sbtnrandom = document.getElementById("1")
let send = document.getElementById("2")




function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let sec = Math.floor(step2) + min;

    return sec;
}
sbtnrandom.addEventListener('click', () => {
    let index = getRandomNumber(0, cards.length - 1);
    sec.innerText = (cards[index] + result.innerText);
}
)
function finish() {
    var txt;
    if (confirm("You sure finish?")) {
      txt = "You toatal is result.innerText" ;
    } 
    else{
        txt = "good luck";}
    document.getElementById("text").innerHTML = txt;
  }
  */

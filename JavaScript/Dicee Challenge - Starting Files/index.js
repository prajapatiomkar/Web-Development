var randomNumber1  =Math.floor(Math.random()*6)+1;
var randomNumber2  =Math.floor(Math.random()*6)+1;


var h1 = document.querySelector("h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

if(randomNumber1>randomNumber2){
    h1.innerText = "🚩Player1 wins!"
}else if(randomNumber1<randomNumber2){
    h1.innerText = "Player2 wins!🚩"
}else{
    h1.innerText = "Draw!"

}

img1.setAttribute("src",`images/dice${randomNumber1}.png`);
img2.setAttribute("src",`images/dice${randomNumber2}.png`);
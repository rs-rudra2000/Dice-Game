var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image1 = document.querySelector(".img2");
image1.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2)
{
    var winner = document.querySelector("h1");
    winner.innerHTML = "🏆 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    var winner = document.querySelector("h1");
    winner.innerHTML = "🏆 Player 2 Wins!";
}
else
{
    var winner = document.querySelector("h1");
    winner.innerHTML = "It's a Tie";
}
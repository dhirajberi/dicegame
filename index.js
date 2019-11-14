//random 1-6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

//Now, this random number helps me to choose dice image
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = " ✔ " + player1 + " Wins";
}
else if (randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draws";
}
else
{
  document.querySelector("h1").innerHTML = " ✔ " + player2 + " Wins";
}

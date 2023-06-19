var randomnumber1= Math.floor(Math.random()*6)+1; // 1-6
var randomImgSource = "images/"+"dice"+randomnumber1+".png"; //random img src
document.querySelectorAll("img")[0].setAttribute("src" , randomImgSource );  //dice1



var randomnumber2=Math.floor(Math.random()*6)+1; //1-6
var randomImgSource1= "images/"+"dice"+randomnumber2+".png"; //random img src
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource1); //dice2



//player1wins
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
//player2wins
else if(randomnumber1<randomnumber2)
{
   document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
//draw
else {
    document.querySelector("h1").innerHTML="Its a draw!🏳️";
}
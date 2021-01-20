
var numWon = 0;
var numLost = 0;

for(var i =1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor(Math.random()*5)+1;
    
    if(guessNumber==randomNumber)
    {
        console.log("You have won");
        numWon++;
    }
    else{
        console.log("You have lost. Random number was : " + randomNumber);
        numLost++;
    }
}
document.write("Won : "+numWon+"<br>");
document.write("Lost : "+numLost+"<br>");

//my initial solution:
/*
//create right answer
var rightAnswer = 7;

//ask user for guess
var userAnswer = Number(prompt("Guess a number!"));

//check if lower
if(userAnswer < rightAnswer){
  alert("Too low. Try again!");
}
//check if higher
else if(userAnswer > rightAnswer){
  alert("Too high. Try again!");
}
//check otherwise (equality)
else {
  alert("You guessed it!")
}
*/

//proposed solution:
var secretNumber = 7;

//ask user for guess
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

//check if it is euqal
if(Number(guess) === secretNumber){
  alert("You guessed it!");
}
//check if higher
else if(Number(guess) > secretNumber){
  alert("Too high. Try again!");
}
//check otherwise (lower)
else {
  alert("Too low. Try again!")
}
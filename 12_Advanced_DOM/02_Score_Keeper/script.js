////////////////////////////////////////////////////////////////////////////////////
// All implemented by myself before watching the implementation part of the video!!!
////////////////////////////////////////////////////////////////////////////////////
// Buttons
var p1Button = document.querySelectorAll("button")[0];
var p2Button = document.querySelectorAll("button")[1];
var resetButton = document.querySelectorAll("button")[2];

//Scores
var p1ScoreBoard = document.getElementById("p1Score");
var p2ScoreBoard = document.getElementById("p2Score");
var defaultMaxScore = 5;

var p1Score = 0;
var p2Score = 0;
var isOver = false;

p1Button.addEventListener("click", function(){
  if(!isOver){
    p1Score++;
    p1ScoreBoard.textContent = p1Score;
    if(p1Score === defaultMaxScore){
      p1ScoreBoard.style = "color: green;"; 
      isOver = true;
    };
  };
});

p2Button.addEventListener("click", function(){
  if(!isOver){
    p2Score++;
    p2ScoreBoard.textContent = p2Score;
    if(p2Score === defaultMaxScore){
      p2ScoreBoard.style = "color: green;";
      isOver = true;
    };
  };
});

resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  isOver = false;
  p1ScoreBoard.style = "color: black;";
  p2ScoreBoard.style = "color: black;";
  p1ScoreBoard.textContent = "0";
  p2ScoreBoard.textContent = "0";
});

// Couldn't handle the 'Specifying new max score' scenario yet...
document.querySelector(".form-control").addEventListener("click", function(){
  defaultMaxScore = Number(document.querySelector(".form-control").textContent);
});
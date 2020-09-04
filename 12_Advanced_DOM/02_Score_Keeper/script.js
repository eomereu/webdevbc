// Buttons
// Here we may also work with 'id's of buttons in terms of specifity but I wanted to make it another way
var p1Button = document.querySelectorAll("button")[0];
var p2Button = document.querySelectorAll("button")[1];
var resetButton = document.querySelectorAll("button")[2];

// Score boards
var p1ScoreBoard = document.getElementById("p1Score");
var p2ScoreBoard = document.getElementById("p2Score");
var defaultMaxScore = 5;

// Scores
var p1Score = 0;
var p2Score = 0;

// Game status flag
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

// The following 'reset' function created in the solution because we want to use it multiple times, both with 'reset button' and when we change the max score during the game. We better handle the issue of changing the max score during the game because since we didn't handle the comparison as 'more than or equal' it may cause for scores to go infinite. Instead of changing the comparison in that way it makes more sense to reset the current game due to the reason the max score isn't to be changed during the game most of the time...
function reset() {
  p1Score = 0;
  p2Score = 0;
  isOver = false;
  p1ScoreBoard.style = "color: black;";
  p2ScoreBoard.style = "color: black;";
  p1ScoreBoard.textContent = 0;
  p2ScoreBoard.textContent = 0;
}

// Reset button event
resetButton.addEventListener("click", reset);

// **Couldn't handle the 'Specifying new max score' scenario yet...
// **Sorted out after watching: We must use 'value' ATR to get the content of inputs!!!
document.querySelector(".form-control").addEventListener("change", function(){
  document.querySelector("#maxScore").textContent = Number(this.value);
  defaultMaxScore = Number(this.value);
  reset();
  // Following condition may be added to prevent it from unnecessary resetting but maybe it would be redundant,
  //if(!(p1Score === 0 && p2Score === 0)) reset();
});
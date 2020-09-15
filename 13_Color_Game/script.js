// --- VARIABLES --- \\
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var colors = generateRandomColors(6);
var pickedColor = pickColor();

var alreadyWon = false;


// --- MAIN --- \\
colorDisplay.textContent = pickedColor;
colorDisplay.style = "text-transform: uppercase;";

// colorize squares for the first time
colorizeSquares();
functionalizeThings();


// ___FUNCTIONS___ \\
function colorizeSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
}

function functionalizeThings(){
  // --- Functionalize Squares --- \\
  for(var i = 0; i < squares.length; i++){
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      console.log(clickedColor, pickedColor);
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
  // --- Functionalize Reset Button --- \\
  resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change the displayed color content
    colorDisplay.textContent = pickedColor;
    // reset textContent of the ResetButton
    resetButton.textContent = "New Colors";
    // reset the h1 background
    h1.style.backgroundColor = "#232323";
    // change colors of the squares
    colorizeSquares();
  });
}

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red" within [0,255]
  var red = Math.floor(Math.random() * 256);
  // pick a "green" within [0,255]
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" within [0,255]
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
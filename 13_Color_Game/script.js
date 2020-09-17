// ___ELEMENTS___ \\
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("modeBtn");


// ___MAIN___ \\
var numSquares = 6; //by default it's hard mode so there must be 6 squares
var colors = [];
var pickedColor;

init();
// __________ \\


// ___FUNCTIONS___ \\
function init(){
  setupSquares();
  setupButtons();
  reset();
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor if match, arrange the message, change all colors of all squares and background of h1 to that color and arrange resetBtn text
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else { // if no match, change color of the selected square into the background color and edit the message
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function setupButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      // arrange the selected styling
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // figure out how many squares to show
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // setup resetBtn
      resetButton.addEventListener("click", reset);
      // reset
      reset();
    });
  }
}

function reset(){
  // recolorize squares
  colorizeSquares();
  // reset the displays/visuals
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

function colorizeSquares(){
  // generate all new colors based on the selected game mode (number of squares actually), colorize squares and pick a new color
  colors = generateRandomColors(numSquares);
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  pickedColor = pickColor();
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
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

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
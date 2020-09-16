// ___ELEMENTS___ \\
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("modeBtn");


// ___MAIN___ \\
var numSquares = 6; //by default it's hard mode so there must be 6 squares
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

reset();
functionalizeThings();
// __________ \\


// ___FUNCTIONS___ \\
function reset(){
  // generate all new colors based on the selected game mode (number of squares actually), colorize squares and pick a new color
  colors = generateRandomColors(numSquares);
  // colorizeSquares()
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  pickedColor = pickColor();
  // change/reset the displays/visuals
  // changeDisplaysViuals();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

function functionalizeThings(){
  // ___Functionalize Squares___ \\
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
  // ___Functionalize Reset Button___ \\
  resetButton.addEventListener("click", reset);
  // ___Functionalize Mode Buttons___ \\
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      // arrange the selected styling
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // figure out how many squares to show
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // reset
      reset();
    });
  }
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
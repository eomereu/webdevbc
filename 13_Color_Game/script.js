// ___ELEMENTS___ \\
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


// ___MAIN___ \\
var numSquares = 6; //by default it's hard mode so there must be 6 squares
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
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
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
  // ___Functionalize Reset Button___ \\
  resetBtn.addEventListener("click", function(){
    // generate all new colors based on the selected game mode (number of squares actually), colorize squares and pick a new color
    colors = generateRandomColors(numSquares);
    colorizeSquares();
    pickedColor = pickColor();
    // change/reset the displays/visuals
    changeDisplaysViuals();
  });
  // ___Functionalize Easy Button___ \\
  easyBtn.addEventListener("click", function(){
    // arrange the selected styling
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    // create 3 colors colorozing only first 3 squares and pick a new color
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    colorizeSquares(); //here it won't recolorize the last 3 square! It's not a big deal because we'll hide them anyway...
    pickedColor = pickColor();
    // change/reset the displays/visuals
    changeDisplaysViuals();
    // hide last 3 non-remodified squares
    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";
  });
  // ___Functionalize Hard Button___ \\
  hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    // create 6 colors, colorizing all squares again and pick a new color
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorizeSquares();
    pickedColor = pickColor();
    // change/reset the displays/visuals and the game mode
    changeDisplaysViuals();
    gameModeHard = true;
    // unhide the last 3 squares
    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";
  });
}

function changeDisplaysViuals(){
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "#232323";
  resetBtn.textContent = "New Colors";
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
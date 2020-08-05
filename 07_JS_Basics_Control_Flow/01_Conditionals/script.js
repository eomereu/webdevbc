// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is below zero
if(age < 0){
  console.log("Error!");
}

// If age is 21
if(age === 21){
  console.log("Happy 21st birthday!");
}

// If age is odd
if(age % 2 === 1){
  console.log("Your age is odd.")
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
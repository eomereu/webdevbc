//my-solution
function isEven(num) {
  if(num % 2 === 0) return true;
  else return false;
}

//proposed-solution
function isEvenPs(num) {
  return num % 2 === 0;
}

//my-solution
function factorial(num) {
  if(num === 0) return 1;
  else if(num === 1) return 1;
  else {
    var total = 1;
    for(var i = num; i > 1; i--){
      total *= i;
    }
  }
  return total;
}

//proposed-solution
function factorialPs(num) {
  var result = 1;
  for(var i = 2; i <= num; i++) {
    result*= i;
  }
  return result;
}

//my-solution
function kebabToSnake(str) {
  if(str.indexOf("-") === -1) return str;
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "-") newStr += "_";
    else newStr += str[i];
  }
  return newStr;
}

//proposed-solution
function kebabToSnakePs(str) {
  return str.replace(/-/g, "_");
}
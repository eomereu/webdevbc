function printReverse(array){
  for(var i = array.length-1; i > -1; i--) console.log(array[i]);
}

function isUniform(array){
  var flag = true;
  for(var i = 0; i < array.length; i++){
    if(array[0] !== array[i]){
      flag = false;
      break;
    }
  }
  if(flag === true ) return true;
  return false;
}

function sumArray(array){
  var sum = 0;
  array.forEach(function(item){
    sum += item;
  });
  return sum;
}

function max(array){
  var max = array[0];
  if(array.length === 0) return 0;
  else if(array.length === 1) return array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i] > max) max = array[i];
  }
  return max;
}
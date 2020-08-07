//1. Print all numbers between -10 and 19 [-10,19]
console.log("1. Print all numbers between -10 and 19:");
for(var i = -10; i < 20; i++) {
  console.log(i);
}

//2. Print all even numbers between 10 and 40 [10,40]
console.log("2. Print all even numbers between 10 and 40:");
for(var i = 10; i < 41; i+=2) {
  console.log(i);
}
/*
for(var i = 10; i < 41; i+=2) {
  if(i % 2 === 0) {
    console.log(i);
  }
}
*/

//3. Print all odd numbers between 300 and 333 [300,333]
console.log("3. Print all odd numbers between 300 and 333:");
for(var i = 301; i < 334; i+=2) {
  console.log(i);
}

//4. Print all numbers divisible by 5 AND 3 between 5 and 50 [5,50]
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50:");
for(var i = 5; i < 51; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log(i);
  }
}
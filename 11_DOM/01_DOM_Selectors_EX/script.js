// Different ways to select the fist <p> tag
var way1 = document.getElementById("first");
var way2 = document.getElementsByClassName("special")[0];
var way3 = document.getElementsByTagName("p")[0];
var way4 = document.querySelector("#first");
var way5 = document.querySelector(".special");
var way6 = document.querySelector("p");
var way7 = document.querySelectorAll(".special")[0];
var way8 = document.querySelectorAll("p")[0];
var way9 = document.querySelector("h1 + p");

// Printing results
console.dir(way1);
console.dir(way2);
console.dir(way3);
console.dir(way4);
console.dir(way5);
console.dir(way6);
console.dir(way7);
console.dir(way8);
console.dir(way9);
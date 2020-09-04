var button = document.querySelector("button");

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});

// Another Solution
//var isPurple = false;
//button.addEventListener("click", function(){
//  if(isPurple){
//    document.body.style.backgroundColor = "white";
//  } else {
//    document.body.style.backgroundColor = "purple";
//  }
//  isPurple = !isPurple;
//});
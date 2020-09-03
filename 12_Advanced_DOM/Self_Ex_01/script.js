//////////////////////////////////////////////////////////////
var lis = document.querySelectorAll("li");
function toggleClassClicked(){
  this.classList.toggle("clicked");
}
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", toggleClassClicked);
}
//////////////////////////////////////////////////////////////
document.querySelector("h1").addEventListener("click", function(){
  this.style.color = "pink";
});
//////////////////////////////////////////////////////////////
var clickCount = 0;
document.querySelector("body").addEventListener("click", function(){
  clickCount++;
});
//////////////////////////////////////////////////////////////
document.getElementsByTagName("button")[0].addEventListener("click", function(){
  alert("We counted " + clickCount + " until now!");
});
//////////////////////////////////////////////////////////////
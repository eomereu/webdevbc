var lis = document.querySelectorAll("li");

//function highlight(element){
//  element.style.color = "green";
//}

for(i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("hovered");
  });
}

for(i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("hovered");
  });
}

for(i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });
}
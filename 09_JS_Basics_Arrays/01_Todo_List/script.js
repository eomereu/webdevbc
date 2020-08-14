var todos = [];

window.setTimeout(function() {
  while(true) {
    var choice = prompt("Was hättest du machen?");
    if(choice === "auflisten") console.log(todos);
    else if(choice === "verlassen") break;
    else if(choice === "neu") {
      var newItem = prompt("Screiben Sie eine neue Aufgabe");
      todos.push(newItem);
    }
    else alert("Machen Sie eine gültige Wahl bitte!");
  }
}, 500);
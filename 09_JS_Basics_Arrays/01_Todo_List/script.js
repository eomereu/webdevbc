var todos = [];

window.setTimeout(function() {
  while(true) {
    var choice = prompt("Was hättest du machen?");
    if(choice === "auflisten") {
      listTodos();
    }
    else if(choice === "verlassen") break;
    else if(choice === "neu") {
      addTodo();
    }
    else if(choice === "löschen") {
      deleteTodo();
    }
    else alert("Machen Sie eine gültige Wahl bitte!");
  }

  //My Functions
  function listTodos() {
    console.log("**********");
    todos.forEach(function(el, i){
      console.log(i + ": " + el);
    });
    console.log("**********");
  }
  function deleteTodo() {
    var itemIndex = prompt("Was war der Index?");
    todos.splice(itemIndex, 1);
    console.log("Aufgabe wird gelöscht");
  }
  function addTodo() {
    var newItem = prompt("Screiben Sie eine neue Aufgabe");
    todos.push(newItem);
    console.log("\"" + newItem + "\" wird der Aufgabenliste hinzugefügt")
  }
}, 500);
// Check odd specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

// Click on X to delete Todos
$("ul").on("click", ".delBtn", function(event){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span class=\"delBtn\"><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
  }
});
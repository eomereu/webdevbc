// Check odd specific todos by clicking
$("li").on("click", function(){
  $(this).toggleClass("done");
});

// Click on X to delete Todos
$(".delBtn").click(function(e){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  e.stopPropagation();
});
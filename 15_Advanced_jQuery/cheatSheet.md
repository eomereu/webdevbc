### [jQuery Events](https://api.jquery.com/category/events/)
- [`click()`](https://api.jquery.com/click/)  
  Does the same thing as `.addEventListener("click", func)` in DOM to an or a set of elements:
  ```javascript
  $("#submit").click(function(){
    console.log("Submitted");
  });
  $("button").click(function(){
    console.log("Clicked");
  });
  ```
  > While jQuery-specified methods is going to be used like `.css()` method, in case we want to refer to the object that we are adding an event (just like above) then we need to use `$(this)` keyword instead of alone `this` in DOM!
  ```javascript
  $("button").click(function(){
    $(this).css("background", "green");
    console.log("You clicked on: " + $(this).text());
  });
  ```
- [`keypress()`](https://api.jquery.com/keypress/)  
- [`on()`](https://api.jquery.com/on/)  
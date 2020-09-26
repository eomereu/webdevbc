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
- [`keypress()`](https://api.jquery.com/keypress/) - [`keydown()`](https://api.jquery.com/keydown/) - [`keyup()`](https://api.jquery.com/keyup/)  
  `keydown()` is immediately triggered whenever any key is pressed `keyup()` will similarly be triggered when any key is released. But differently `keypress()` will not be triggered when any key is just simply pressed down and released; instead it will be triggered whenever a character is inputted.
  > For example when we want to give input as ***'Shift + a'*** to make an uppercase ***a***, if we use `keydown()` and `keyup()` they will both be trigerred when we press and release ***Shift*** button. However if we use `keypress()` it will only be triggered as the uppercase ***a*** is inputted.  
  
  > So briefly when to work with non-character keys like ***arrow keys*** etc. we definetly want to use `keydown()` and `keyup()` but in other scenarios it's better to prefer `keypress()`
  ```javascript
  $("input").keypress(function(){
    console.log("A key pressed!");
  });
  ```
  With the help of an object to be passed to the function inside the **keypress** *(actually it's always passed but at this point we ought to use it explicity, generally given as 'e' or 'event')* we can detect the pressed key and use it for our benefit like automatically getting the input and clearing the box content as the user press **Enter**:
  ```javascript
  $("input").keypress(function(event){
    console.log(event);
  });
  ```
  Here inside *event* object there are three attributes referring to the code of the entered character: ***charCode***, ***keyCode*** and ***which***. Ignoring their slight differences *(maybe to be mentioned later)* they most of the time show us the code of the entered character.
  > Here is a great website to show the code of the key we press interactively:  
  [Javascript Char Codes (Key Codes)](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)  
  
  By making use of the website we can detect when user hits Enter and behave accordingly:
  ```javascript
  $("input").keypress(function(e){
    if(e.which === 13){
      alert("\'Enter\' is pressed!");
    }
  });
  ```
- [`on()`](https://api.jquery.com/on/)  
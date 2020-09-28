### [jQuery Events](https://api.jquery.com/category/events/)
- [`.click()`](https://api.jquery.com/click/)  
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
- [`.keypress()`](https://api.jquery.com/keypress/) - [`.keydown()`](https://api.jquery.com/keydown/) - [`.keyup()`](https://api.jquery.com/keyup/)  
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
- [`.on()`](https://api.jquery.com/on/)  
  Works in the same way as `addEventListener` in DOM. It lets us specify the type of event to listen for. 
  > This is the method used 99% of the time!
  ```javascript
  $("#submit").on("click", function(){
    console.log("Another click!");
  });
  $("button").on("dbclick", function(){
    console.log("Button double clicked!");
  });

  // hover: mouseenter + mouseleave
  $("button").on("mouseenter", function(){
    console.log("Mouse has once moved over button!");
  });
  $("button").on("mouseleave", function(){
    console.log("Mouse left button!");
  });

  $("button").on("dragstart", function(){
    console.log("Drag started!");
  });
  $("input[type='text']").on("keypress", function(){
    console.log("Key press in an input!");
  });
  ```
  > **`on()`** allows us to add listeners for all potential future elements on the contrary of `click()` which only adds listeners for existing elements when the page loads. That's why we will broadly use **`on("click", func)`** instead of `click()`!
***

### [jQuery Effects](https://api.jquery.com/category/effects/)
- [`.fadeOut()`](https://api.jquery.com/fadeOut/)  
  The `.fadeOut()` method animates the opacity of the matched elements.
  
  > Once the opacity reaches 0, the `display` style property is set to `none`, so the element no longer affects the layout of the page!

  > To completely remove the element(s) we can use `$(this).remove()` within the callback function of fadeOut!

  Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings *fast* and *slow* can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").fadeOut();
    $("#myDiv2").fadeOut(1000);
    $("#myDiv3").fadeOut("slow");
    $("#myDiv4").fadeOut("fast");
    $("#myDiv5").fadeOut(200, function(){
      console.log("fade out completed");
    });
    $("#myDiv6").fadeOut(600, function(){
      console.log("fade out completed");
      $(this).remove();
    });
  });
  ```
- [`.fadeIn()`](https://api.jquery.com/fadeIn/)  
  The `.fadeIn()` method animates the opacity of the matched elements. It is similar to the `.fadeTo()` method but that method does not unhide the element and can specify the final opacity level.

  > As expected, the `display` property of the elements to be affected is supposed to be set to `none`!

  Same duration rules apply as in `.fadeOut()`
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").fadeIn();
    $("#myDiv2").fadeIn(1000);
    $("#myDiv3").fadeIn("slow");
    $("#myDiv4").fadeIn("fast");
    $("#myDiv5").fadeIn(200, function(){
      console.log("fade in completed");
    });
  });
  ```
- [`.fadeToggle()`](https://api.jquery.com/fadeToggle/)  
  Knows wheteher to fade the element(s) in or out based on their current value of `display` property.
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").fadeToggle();
    $("#myDiv2").fadeToggle(1000);
    $("#myDiv3").fadeToggle("slow");
    $("#myDiv4").fadeToggle("fast");
    $("#myDiv5").fadeToggle(200, function(){
      console.log("fade completed");
    });
  });
  ```
- [`.slideUp()`](https://api.jquery.com/slideUp/)
  Actually it's the sliding *(rather than fading)* version of `.fadeOut()`. So it slides up (wipes out) the selected element(s).
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").slideUp();
    $("#myDiv2").slideUp(1000);
    $("#myDiv3").slideUp("slow");
    $("#myDiv4").slideUp("fast");
    $("#myDiv5").slideUp(200, function(){
      console.log("slide up completed");
      $(this).remove();
    });
  });
  ```
- [`.slideDown()`](https://api.jquery.com/slideDown/)  
  Similarly it's the sliding *(rather than fading)* version of `.fadeIn()`. So it slides down (brings in) the selected element(s). Again as expected the `display` propoerty of the matched elements is supposed to be `none`.
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").slideDown();
    $("#myDiv2").slideDown(1000);
    $("#myDiv3").slideDown("slow");
    $("#myDiv4").slideDown("fast");
    $("#myDiv5").slideDown(200, function(){
      console.log("slide down completed");
    });
  });
  ```
- [`.slideToggle()`](https://api.jquery.com/slideToggle/)
  Works with the same logic as all toggle classes and similarly to `.fadeToggle()`. So it again decides whether to slide down or up based on the `display` property.
  ```javascript
  $("button").on("click", function(){
    $("#myDiv1").slideToggle();
    $("#myDiv2").slideToggle(1000);
    $("#myDiv3").slideToggle("slow");
    $("#myDiv4").slideToggle("fast");
    $("#myDiv5").slideToggle(200, function(){
      console.log("slide completed");
    });
  });
  ```
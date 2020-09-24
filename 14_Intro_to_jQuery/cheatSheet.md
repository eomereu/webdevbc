## [jQuery](https://jquery.com/)
jQuery is a DOM manipulation library.

### [Why use jQuery?](http://youmightnotneedjquery.com/)
1. Fixes "broken" DOM API
1. Brevity and Clarity
1. Ease of use
1. Cross-Browser Support
1. AJAX
1. Lots of people use jQuery!
***

### [Why not use jQuery?](http://youmightnotneedjquery.com/)
1. The DOM API is no longer "broken"
1. It doesn't do anything you can't do on your own
1. It's an unnecessary dependency
1. Performance
1. Lots of people are moving away from jQuery!
***

### Adding jQuery
First way is downloading jQuery and liking to it locally:
```javascript
<script type="text/javascript" src="jquery.js"></script>
```
Or linking to a [CDN(a hosted copy)](https://code.jquery.com/) directly:
```javascript
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```
>We must include jQuery at the heading and our js file at the end of the body!

>To check simply if the jQuery is added correctly, on the console on the page we can type `jQuery` and hit enter. It must return sth like `function (a,b){return new n.fn.init(a,b)}` if correctly included...

Meanings of different versions are like the following:

- ***uncompressed:*** The version that generally for developers with a proper coding and explaining comments inside but with more than 9k lines. Takes a longer time to load compared to minified (compressed) version.
- ***minified:*** The compressed (minified) version of the original one. All blank spaces, line breaks and comments are gone, variable names are reduced to single character and thus 9k lines are reduced to a couple of lines which provides us a faster loading time
- ***slim:*** The version that just contains some main features
- ***slim minified:*** The compressed (minified) version of the ***slim*** one.
***

### jQuery Selectors
&nbsp;-&nbsp;Selecting with jQuery is like ***querySelectorAll***, in that we provide a CSS style selector and jQuery will return all matching elements:
```javascript
$("selectorGoesHere");
// to select all img tags,
$("img");
// to select all elements with class 'sale',
$(".sale");
// to select element with id "bonus",
$("#bonus");
// to select all a tags inside of li's,
$("li a");
```
***

### Manipulating Style
&nbsp;-&nbsp;`.css(prop)` - `css(prop, val)` - `css(prop, obj)` method is jQuery's interface to styling.  
Passing in just property will return us its value,
```javascript
> $("img").css("width");
"1533px"
```
Passing in both *property* and *value* will either apply or set/change the property to given value:
```javascript
// select element with id "special" and give it a border,
$("selector").css(property, value); //or,
$("selector").css(styleObject);
// i.e.:
$("#special").css("border", "2px solid red");
```
Passing in an object with styles in it allows us to manipulate multiple properties in one go:
```javascript
var styles = {
  backgroundColor: "pink",
  fontWeight: "bold"
};
$("#special").css(styles);
```
We can select and manipulate all elements of a kind in one line,
```javascript
$("li").css("color", "purple");

$("p").css({
  fontSize: "10px",
  textTransform: "uppercase",
  background: "#232323",
  color: "white"
});
```
To select only all the divs with specified class,
```javascript
$("div.highlight");
```
To select the first element of a group,
```javascript
$("div").first();
```
To select the last element we can use `.last()` method:
```javascript
$("div").last();
```
Here inside inside this *styling object* or *property* we must use the properties that contains a *dash (-)* with removing the dash and converting the first letter of the following word to uppercase as seen above with *fontSize* and *textTransform* properties. Otherwise we get an error!
***

### [Common jQuery Methods](https://api.jquery.com/)
- [`text()` - `text(val)`](https://api.jquery.com/text/)  
  Actually does the same thing as `.textContent`. It retrieves just the strings inside of an element and if we pass a value it will modify the content with it. This method is called as *HTML safe* and actually provides us a safe way while getting **input** from user!
  ```javascript
  //<h1>Grüß dich!</h1>
  > $("h1").text();
  "Grüß dich!"
  > $("h1").text("Servus!");
  > $("h1").text();
  "Servus!"
  ```

- [`html()` - `html(val)`](https://api.jquery.com/html/)
  Works in the same way with `.innerHTML` from DOM. It retrieves the content with HTML stuff included and again if we pass a value with HTML stuff it modifies the content accordingly:
  ```javascript
  //<h1>... <strong>keiner</strong> meiner Freunde ...</h1>
  > $("h1").html();
  "... <strong>keiner</strong> meiner Freunde ..."
  > $("h1").html("... keiner <em>meiner</em> Freunde ...");
  > $("h1").html();
  "... keiner <em>meiner</em> Freunde ..."
  ```

- [`attr(atr)` - `attr(atr, val)`](https://api.jquery.com/attr/)  
  Gets the value of the specified attribute of the selected element if *atr* is given as only parameter:
  ```javascript
  // <a href="https://www.google.com">Take me to Google!</a>
  > $("a").attr("href");
  "https://www.google.com"
  ```
  If both *atr* and *val* parameters are given, it sets that *atr* to that *val*. More than one atr can be changed via giving an object:
  ```javascript
  //<img id="inn" src="inn.jpg" alt="Inn">Grüß dich!
  > $("#inn").attr("alt", "Inn Fluss");
  //<img id="inn" src="inn.jpg" alt="Inn Fluss">Grüß dich!
  > $("#inn").attr({
    alt: "Wundervoller Inn Fluss",
    title: "Hans Krille"
  });
  > $("h1").text();
  "Servus!"
  ```
  We can even manipulate type of *input boxes* as its feature depends on its *value*:
  ```javascript
  // <input type="text" placeholder="input">
  $("input").attr("type", "color");
  $("input").attr("type", "number");
  $("input").attr("type", "checkbox");
  ```

- [`val()` - `val(val)`](https://api.jquery.com/val/)  
  Actually it's the wrapper for `.value()` in DOM. Thus it helps us extract the value from an input. On the other hand it is of course working with anything that has *value* attribute like dropdown menus etc.  
  If we don't put in an argument it returns us the value of the input we select:
  ```javascript
  // Our input box: (<input type="text" placeholder="inp">)
  // ---------------
  // |inp          |
  // ---------------
  > $("input").val();
  ""
  ```
  If we pass in a value, it will set the value of that input to that value. This is used especially when the value of the input box is wanted to be cleared, *i.e. after typing a value to be added to a list and hit Enter*
  ```javascript
  > $("input").val("Eigentlich");
  // ---------------
  // |Eigentlich   |
  // ---------------
  > $("input").val(""); //clears the box
  ```
  On dropdown menus:
  ```javascript
  $("select").val(); //returns the current value (selection)
  ```
  > For selects, checkboxes and radio buttons, you can use `:checked` to select the right elements. For example:
  ```javascript
  // <select id="foo">...</select>
  // Get the value from the selected option in a dropdown
  $("select#foo option:checked").val();
  
  // Get the value from a dropdown select directly
  $("select#foo").val();
  
  // Get the value from a checked checkbox
  $("input[type=checkbox][name=bar]:checked").val();
  
  // Get the value from a set of radio buttons
  $("input[type=radio][name=baz]:checked").val();
  ```

- addClass()  
  Equals to `.classList.add()` in DOM. Simpley adds class/classes to the selected object/objects:
  ```javascript
  $("li").addClass("style:hover darkened");
  ```
- removeClass()  
  Equals to `.classList.remove()` in DOM. Simpley removes class/classes from the selected object/objects:
  ```javascript
  $("li").removeClass("light");
  ```
- toggleClass()  
  Equals to `.classList.toggle()` in DOM. Simpley toggles class/classes of the selected object/objects:
  ```javascript
  $("li").toggleClass("selected");
  ```
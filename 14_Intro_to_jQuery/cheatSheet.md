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
&nbsp;-&nbsp;`.css()` method is jQuery's interface to styling:
```javascript
// select element with id "special" and give it a border,
$("selector").css(property, value); //or,
$("selector").css(styleObject);
// i.e.:
$("#special").css("border", "2px solid red");
```
We can pass in an object with styles,
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
$("div.highlight")
```
To select the first element of a group,
```javascript
$("div:first") //js method (more practical but slower)
$("div:first-of-type") //built-in css method (less practical but faster)
```
Here inside inside this *styling object* or *property* we must use the properties that contains a *dash (-)* with removing the dash and converting the first letter of the following word to uppercase as seen above with *fontSize* and *textTransform* properties. Otherwise we get an error!
***

### [Common jQuery Methods](https://api.jquery.com/)
- val()
- [`text()`](https://api.jquery.com/text/)  
  Actually does the same thing as `.textContent`. It retrieves just the strings inside of an element and if we pass a value it will modify the content with it. This method is called as *HTML safe* and actually provides us a safe way while getting **input** from user!
  ```javascript
  //<h1>Grüß dich!</h1>
  > $("h1").text()
  "Grüß dich!"
  > $("h1").text("Servus!")
  > $("h1").text()
  "Servus!"
  ```

- attr()
- [`html()`](https://api.jquery.com/html/)
  Works in the same way with `.innerHTML` from DOM. It retrieves the content with HTML stuff included and again if we pass a value with HTML stuff it modifies the content accordingly:
  ```javascript
  //<h1>... <strong>keiner</strong> meiner Freunde ...</h1>
  > $("h1").html()
  "... <strong>keiner</strong> meiner Freunde ..."
  > $("h1").html("... keiner <em>meiner</em> Freunde ...")
  > $("h1").html()
  "... keiner <em>meiner</em> Freunde ..."
  ```
- addClass()
- removeClass()
- toggleClass()
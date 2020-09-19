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

### Manipulating Style
&nbsp;-&nbsp;**.css()** method is jQuery's interface to styling:
```javascript
// select element with id "special" and give it a border,
$("selector").css(property, value); //or,
$("selector").css(styleObject);
// i.e.:
$("#special").css("border", "2px solid red");

// we can also pass in an object with styles,
var styles = {
  backgroundColor: "pink",
  fontWeight: "bold"
};
$("#special").css(styles);

// we can also select and manipulate all elements of a kind in one line,
$("li").css("color", "purple");

$("p").css({
  fontSize: "10px",
  textTransform: "uppercase",
  background: "#232323",
  color: "white"
});
```
Here inside inside this ***styling object*** or ***property*** we must use the properties that contains a ***dash (-)*** with removing the dash and converting the first letter of the following word to uppercase as seen above with ***fontSize*** and ***textTransform*** properties. Otherwise we get an error!
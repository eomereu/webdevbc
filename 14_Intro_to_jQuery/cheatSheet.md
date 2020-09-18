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
- ***slim minified:*** The compressed (minified) version of the *slim* one.
***

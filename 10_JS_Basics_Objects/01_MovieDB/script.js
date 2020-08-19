var movies = [
  {
    title: "Iron Man",
    rating: 4.2,
    watched: true
  },
  {
    title: "Resimdeki Sevgili",
    rating: 4.8,
    watched: true
  },
  {
    title: "Fast and Furious 7",
    rating: 4.4,
    watched: false
  },
  {
    title: "Mad Max",
    rating: 4.6,
    watched: false
  }
];

movies.forEach(function(movie){
  if(movie.watched) console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
  else console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
});
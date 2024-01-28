const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

// let findMovie = (movieTitle) => { 
//   for (let movie in movies) {
//     console.log(movie);
//     if (movies[movie].title === movieTitle) {
//       console.log(`Movie found: ${movies[movie].title}`);
//     }
//   }
// }

// findMovie("Star Wars");

// let movie = "Thor: Ragnorok";
// console.log(movie);

// Part 2 = Create a function to return a movie object

let returnMovie = (movieTitle) => {
  for(let movie of movies) {
    if(movie.title === movieTitle) {
      return movie;
    }
    console.log(movie);
  }
  return "Movie not found";
}

let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie);

console.log(`title: ${myMovie.title}, director: ${myMovie.director}, year: ${myMovie.year}`);

let myOtherMovie = returnMovie("Jaws");
console.log(myOtherMovie);

let myMovieDetails = (anyMovie) => {
  return typeof anyMovie === "object" ? `title: ${anyMovie.title}, director: ${anyMovie.director}, year: ${anyMovie.year}` : anyMovie;
}

console.log(myMovieDetails(myOtherMovie));
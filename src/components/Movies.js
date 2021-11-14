import React from "react";
import { movies } from "../data";

const Movies = () => {

  const mapMovies = movies.map((movie) => {

    console.log(movie.title)
    return <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime : {movie.time} minutes</p>
      <ul>
        {
          movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>
          })
        }
      </ul>
    </div>
  })


  return (
    <>
      <h1>Movies Page</h1>
      {mapMovies}
    </>
  )

}

export default Movies;

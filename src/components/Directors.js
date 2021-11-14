import React from "react";
import { directors } from "../data";

const Directors = () => {

  const mapDirectors = directors.map((director) => {
    return <div key={director.name}>
      {director.name}
      <ul>
        {director.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })}
      </ul>
      </div>
  })

  return (

    <>
      <h1>Directors Page</h1>
      {mapDirectors}
    </>

  )

}

export default Directors;

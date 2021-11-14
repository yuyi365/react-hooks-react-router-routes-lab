import React from "react";
import { actors } from "../data";

const Actors = () => {

  const mapActors = actors.map((actor) => {
    return <div key={actor.name}>
      {actor.name}
      {actor.movies.map((movie) => {
        return <ul>
          <li key={movie}>{movie}</li>
        </ul>
      })}
    </div>
  })
  
  return (

    <>
      <h1>Actors Page</h1>
      {mapActors}
    </>

  )

}

export default Actors;

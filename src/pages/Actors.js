// This component should render the text `Actors Page` in an `<h1>`, and render a
// new `<article>` element for each actor in our array of actors. The `<article>`
// should contain the actor's name in an `<h2>` and a `<ul>` with a list of their
// movies.

// > Note: The tests will count how many `<article>`s are nested inside your
// > `Directors` and `Actors` components. So to get tests to pass, you must create
// > _exactly one_ `<article>` for each director or actor, and no additional nested
// > `<article>`s in those components.

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
 
  useEffect (() => {
    fetch(`http://localhost:4000/actors`)
    .then((res) => res.json())
    .then((data) => setActors(data))
  }, []) 


  return (
    <>
    <header>
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
    {
      actors.map((actor) => (
        <header key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}
            </li>
          ))}
          </ul>
      </header>
      ))
    }
      </main>
    </>
  );
};
export default Actors;
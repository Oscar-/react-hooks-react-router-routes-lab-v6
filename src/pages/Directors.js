// This component should render on the `/directors` route. It should display the
// text `Directors Page` in an `<h1>`, and render a new `<article>` element for
// each director in our array of directors. The `<article>` should contain the
// director's name in an `<h2>` and a `<ul>` with a list of their movies.

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {
const [directorData, setDirectorData] = useState([])

useEffect (() => {
  fetch(`http://localhost:4000/directors`)
  .then((res) => res.json())
  .then((data) => setDirectorData(data) )
}, []) 




  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1> Directors Page </h1>
        {directorData.map((curDirector) => (
          <article key={curDirector.id}>
            <h2> {curDirector.name} </h2>
            <ul> 
              {curDirector.movies.map((movie) => (
                <li key={movie}> {movie} </li>
              ))} 
              </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;

// This component should render on the `/` route. It should display the text `Home
// Page` in an `<h1>`. It should also render a list of movies using `MovieCard`
// components.


import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
const [movies, setMovies] = useState([])

useEffect (() => {
  fetch(`http://localhost:4000/movies`)
  .then((res) => res.json())
  .then((data) => setMovies(data))
}, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1> Home Page </h1>
        {movies.map((curMovie) => 
          <MovieCard 
          key={curMovie.id}
          id={curMovie.id}
          title={curMovie.title}
          time={curMovie.time}
          genres={curMovie.genres}/>
        )
        }
      </main>
    </>
  );
};

export default Home;

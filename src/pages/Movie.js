// This component should render on the `/movie` route. You will need to include a
// URL parameter of `id` on that route.

// The component will display information about one specific movie. It should
// display the movie's title in an `<h1>` tag, the movie's time in a `<p>` tag, and
// each of the movie's genres within its own `<span>` tag.

// You'll need to use the `useParams` hook to get URL parameter data about which
// movie you want to render, then use that data to fetch and render the appropriate
// movie.

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const {id} = useParams();
const [movieData, setMovieData] = useState({genres:[]});
 
  useEffect (() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((res) => res.json())
    .then((data) => setMovieData(data) )
  }, []) 
 
  return (
    <div>
      <h1>
        {movieData.title}
      </h1>
      <p>
        {movieData.time}
      </p>
      <div>
          {movieData.genres.map((curGenre) => ( 
            <span key={curGenre}>{curGenre}</span>
          ))}
      </div>
    </div>
  );
};
export default Movie;
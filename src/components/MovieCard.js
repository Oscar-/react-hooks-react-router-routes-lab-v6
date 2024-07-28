// This component is already set up to render the title of one movie. You'll need
// to pass it the appropriate props to render a movie's title. You'll also need to
// use a `Link` component from `react-router-dom` that uses dynamic routing to link
// a user to the `Movie` page, using the movie id as a parameter.

import {Link} from 'react-router-dom';

function MovieCard({movie, id, title, time, genres}) {
  
  return (
    <article>
        <h2>{movie}</h2>
        <p> Time: {time} minutes</p>
        <p> Title: {title} </p>
        <p> Genres: {genres} </p>
        <Link to={`/movie/${id}`}> Movie Info </Link>
    </article>
  );
};

export default MovieCard;
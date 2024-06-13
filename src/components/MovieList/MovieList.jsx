import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {
  const history = useHistory()

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleMovieClick = (movieId) => {
    history.push(`/movies/${movieId}`); 
  };

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
              <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            {movie.title}
          </li>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;

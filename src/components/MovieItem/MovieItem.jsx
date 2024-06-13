import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.find((m) => m.id === Number(movieId)));
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({ type: 'FETCH_GENRES' });
  }, [dispatch]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <h3>Genres</h3>
      <ul>
        {genres
          .filter((genre) => movie.genre_ids.includes(genre.id))
          .map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default MovieDetails;

    
    

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GenreList from '../GenreList/GenreList';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const genre = useSelector(store => store.genres)
    const movie = useSelector((store) => store.movies.find((m) => m.id === Number(movieId)));
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, [dispatch]);

    const returnHome = (event) => {
        event.preventDefault()
        history.push('/')
    }


    if (!movie) {
        return <div>Loading...</div>;
    }

    const genreIds = movie.genre_ids 

    return (
        <div data-testid="movieDetails" >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.poster}/>
                        <h3>Genres</h3>
            <GenreList genreIds={genreIds} genre={genre} data-testid="movieItem"/>
            <button data-testid="toList" onClick={returnHome}>home</button>
        </div>
    );
};

export default MovieDetails;




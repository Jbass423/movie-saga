import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GenreList from '../GenreList/GenreList';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const MovieDetails = () => {
    const allItems = useSelector((state)=> state.allItems)
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres)
    const movie = useSelector((store) => store.movies.find((m) => m.id === Number(movieId)));
    const history = useHistory()
    console.log('checkig gen in item', allItems);

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

    const genreIds = movie.genre_ids || [];
    const filteredGenres = genres.filter((gen) => genreIds.includes(gen.id));

//console.log("genreids", genreIds)

    return (
        <div data-testid="movieDetails" >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.poster}/>
                        <h3>Genres</h3>
            <GenreList filteredGenres={filteredGenres}  data-testid="movieItem"/>
            <button data-testid="toList" onClick={returnHome}>home</button>
        </div>
    );
};

export default MovieDetails;



